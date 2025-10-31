import logo from '../assets/codex-logo.jpg'

function SupportUs() {
    return (
        <section className='support-page'>
            <div className="title"><h2>Support Us</h2></div>

            <div className="support-content">
                <div className="support-details">
                    <div className="support">
                        <p>Bank Name: First Bank Of Nigeria</p>
                        <p className='acc-name'>Account Name: EJOYMENE PETER TAMARAUPERE DAVID(CODEX INC Account)</p>
                        <p>Account Number: 3223333508</p>
                        <span className='span'>✨✨ Description: CODEX INC Donation</span>
                    </div>
                    <div>
                        <img src={logo} alt="codexlogo" width={365} height={392} />
                    </div>
                </div>
                <p className='last-p'>Thank You For believing in our dream. Your generosity builds more than a tech class - It builds a future filled with hope, skills, and impact.<br></br> -From all of us at CODEX INC❤️</p>
            </div>
        </section>
    )
}

export default SupportUs