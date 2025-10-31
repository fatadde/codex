import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  age: z
    .string()
    .optional()
    .refine((v) => v === "" || /^\d+$/.test(v), "Age must be a number"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  phone: z.string().min(1, "Phone is required"),
  classes: z.array(z.string()).min(1, "Choose at least one class"),
});

function BookClasses() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { classes: [] },
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/REPLACE_WITH_YOUR_ID/exec";

  const onSubmit = async (data) => {
    console.log("Submitted:", data); 

    try {
      const resp = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await resp.json();
      console.log("Server response:", json);
    } catch (err) {
      console.warn("Send failed (you can ignore if not using Apps Script):", err);
    }

    setSuccessMessage("Form submitted successfully.");
    setSubmitted(true);
    reset();
  };

  return (
    <main className="book-class">
      <div className="title">
        <h2>Book Classes</h2>
      </div>

      {submitted ? (
        <section>
          <div className="columns">
            <div className="column">
              <div className="submission-result">
                <h3>CODEX INC: Book a Class</h3>
                <p>Your response has been recorded.</p>
                <a href="/">Submit another response</a>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="bookclass-page">
          <div className="columns">
            <div className="column">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="book-heading">
                  <div className="head">
                    <h3>CODEX INC: Book a Class</h3>
                    <p>Book a class and join Today!!!</p>
                    <div className="line-through"></div>
                  </div>
                  <div className="gmail">
                    <h3>GMAIL:</h3>
                    <div className="line-through"></div>
                    <p>* Indicates required question</p>
                  </div>
                </div>

                {successMessage && <p className="success">{successMessage}</p>}

                <div className="booking" style={
                    errors.fullName
                      ? { border: "1px solid red", padding: "20px 0px 20px 30px", borderRadius: 10 }
                      : undefined
                  }>
                  <label>Full Name*</label>
                  <br />
                  <input {...register("fullName")} type="text" placeholder="Your answer" style={errors.phone ? { borderBottom: "1px solid red" } : undefined} />
                  {errors.fullName && <p className="error">{errors.fullName.message}</p>}
                </div>

                <div className="booking" style={
                    errors.age ? { border: "1px solid red", padding: "20px 0px 0px 30px", borderRadius: 10 } : undefined
                  }>
                  <label>Age</label>
                  <br />
                  <input {...register("age")} type="text" placeholder="Your answer" />
                  {errors.age && <p className="error">{errors.age.message}</p>}
                </div>

                <div className="booking" style={
                    errors.email
                      ? { border: "1px solid red", padding: "20px 0px 20px 30px", borderRadius: 10 }
                      : undefined
                  }>
                  <label>Email Address*</label>
                  <br />
                  <input {...register("email")} type="text" placeholder="Your answer" style={errors.phone ? { borderBottom: "1px solid red" } : undefined} />
                  {errors.email && <p className="error">{errors.email.message}</p>}
                </div>

                <div className="booking" style={
                    errors.phone
                      ? { border: "1px solid red", padding: "20px 0px 20px 30px", borderRadius: 10 }
                      : undefined
                  }>
                  <label>Phone Number (With Country Code)*</label>
                  <br />
                  <input {...register("phone")} type="text" placeholder="Your answer" style={errors.phone ? { borderBottom: "1px solid red" } : undefined} />
                  {errors.phone && <p className="error">{errors.phone.message}</p>}
                </div>

                <div className="avaliable-course" style={
                    errors.classes
                      ? { border: "1px solid red", padding: "20px 0px 0px 30px", borderRadius: 10 }
                      : undefined
                  }>
                  <h2>Which class do you want to join*</h2>

                  <div>
                    <input {...register("classes")} type="checkbox" value="Python" id="c_python" />
                    <label htmlFor="c_python">Python</label>
                  </div>

                  <div>
                    <input
                      {...register("classes")}
                      type="checkbox"
                      value="Game Development"
                      id="c_game"
                    />
                    <label htmlFor="c_game">Game Development</label>
                  </div>

                  <div>
                    <input
                      {...register("classes")}
                      type="checkbox"
                      value="App Development"
                      id="c_app"
                    />
                    <label htmlFor="c_app">App Development</label>
                  </div>

                  <div>
                    <input
                      {...register("classes")}
                      type="checkbox"
                      value="Ethical Hacking"
                      id="c_hack"
                    />
                    <label htmlFor="c_hack">Ethical Hacking</label>
                  </div>
                  {errors.classes && <p className="error">{errors.classes.message}</p>}
                </div>
                <button className="button" type="submit" disabled={isSubmitting}>
                  Submit
                </button>
                <span className="clear-form" onClick={() => reset()}>
                  Clear form
                </span>
                <br></br>
                <small>Never submit passwords through Google Forms.</small>
              </form>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default BookClasses;