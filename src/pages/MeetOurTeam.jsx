import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpg"
import pic3 from "../assets/pic3.jpg"
import pic4 from "../assets/pic4.jpg"
import pic5 from "../assets/placeholder-img.jpeg"

function MeetOurTeam() {
    return (
        <section className="team-page">
            <div className="title">
                <h2>Meet Our Team</h2>
            </div>

            <div className="meetourteam-content">
                <div className="meetourteam">
                    <div className="team">
                        <img src={pic1} alt="pic1" width={464} height={624} />
                        <h3>EJOYMENE DAVID TAMARAUPERE</h3>
                        <p>FOUNDER & CEO/ APP DEVELOPMENT TEACHER</p>
                        <p>CODEX INC ENTERPRISE</p>
                    </div>

                    <div className="team">
                        <img src={pic2} alt="pic2" width={464} height={624} />
                        <h3>MOSES KEMUEL</h3>
                        <p>CHIEF LEARNING OFFICER/ GAME DEVELOPMENT TEACHER</p>
                        <p>CODEX INC ENTERPRISE</p>
                    </div>

                    <div className="team">
                        <img src={pic3} alt="pic3" width={464} height={624} />
                        <h3>EBONO TAMARAULAYEFA JOAN</h3>
                        <p>WEB DEVELOPMENT TEACHER</p>
                        <p>CODEX INC ENTERPRISE</p>
                    </div>

                    <div className="team">
                        <img src={pic4} alt="pic4" width={464} height={624} />
                        <h3>MICHAEL IMAIKOP UWAKMFONABASI</h3>
                        <p>OUTREACH & COMMUNITY MANAGER</p>
                        <p>CODEX INC ENTERPRISE</p>
                    </div>

                    <div className="team">
                        <img src={pic5} alt="pic5" width={464} height={624} />
                        <h3>GOODLUCK EMMANUEL AUGUSTINE</h3>
                        <p>LEAD DEVELOPER/PLATFORM ENGINEER</p>
                        <p>CODEX INC ENTERPRISE</p>
                    </div>

                    <div className="team">
                        <img src={pic5} alt="pic5" width={464} height={624} />
                        <h3>FRANCIS UTOMOBONG</h3>
                        <p>CONTENT & MEDIA CREATOR / LEARNING SUPPORT</p>
                        <p>CODEX INC ENTERPRISE</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MeetOurTeam