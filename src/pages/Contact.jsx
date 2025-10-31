import MyMap from '../componet/MapComponet.jsx';

function Contact() {
    return (
        <section className='contact-page'>
            <div className="title">
                <h2>Contact Us</h2>
            </div>

            <div className="contact-content">
                <h2>CONTACT US FOR ANY ENQUIRIES OR QUESTIONS</h2>
                <p>CEO Email: <a href="/">dejoymene@gmail.com</a></p>
                <p>Chief Learning Officer Email: <a href="/">mkddyp11@gmail.com</a></p>
                <p>CEO WhatsApp: +2348133786311</p>
                <p>CLO WhatsApp: +2349064993624</p>
            </div>

            <div className='map-container'>
                <MyMap />
            </div>
        </section>
    )
}

export default Contact
