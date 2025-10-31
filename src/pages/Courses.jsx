import pythonimg from '../assets/python.jpg'
import appimg from '../assets/app.jpg'
import gameimg from '../assets/game.png'
import ethicalimg from '../assets/ethical.jpg'

function Courses() {
    return (
        <section className='course-page'>
            <div className="title"><h2>Courses</h2></div>

            <div className="courses-content">
                <p className="headed">🎉OUR BEST AND FREE COURSES</p>
                <div className='courses'>
                    <div className='course'>
                        <img src={pythonimg} alt="python" width={464} height={400} />
                        <div>
                            <h2>Python Programming</h2>
                            <p>Learn how to code from scratch using one of the most popular languages in the world.</p>
                            <a href='https://chat.whatsapp.com/ECne3nzs6l5EFIRp6I2Vta'><button>Join Us Here</button></a>
                        </div>
                    </div>

                    <div className='course'>
                        <img src={appimg} alt="app" width={464} height={260} />
                        <div>
                            <h2>App Development</h2>
                            <p>Build real mobile apps using beginner-friendly tools.</p>
                            <a href='https://chat.whatsapp.com/ECne3nzs6l5EFIRp6I2Vta'><button>Join Us Here</button></a>
                        </div>
                    </div>

                    <div className='course'>
                        <img src={gameimg} alt="game" width={464} height={260} />
                        <div>
                            <h2>Game Development</h2>
                            <p>Build real mobile apps using beginner-friendly tools.</p>
                            <a href='https://chat.whatsapp.com/ECne3nzs6l5EFIRp6I2Vta'><button>Join Us Here</button></a>
                        </div>
                    </div>

                    <div className='course'>
                        <img src={ethicalimg} alt="ethical" width={464} height={260} />
                        <div>
                            <h2>Ethical Hacking</h2>
                            <p>Learn how to protect digital systems and understand cybersecurity - ethically and responsibly.</p>
                            <a href='https://chat.whatsapp.com/ECne3nzs6l5EFIRp6I2Vta'><button>Join Us Here</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='ads'>
                <iframe width="1175" height="556" src="https://www.youtube.com/embed/ClGNC3Eh1t8" title="WHAT WE OFFER" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>
    )
}

export default Courses;