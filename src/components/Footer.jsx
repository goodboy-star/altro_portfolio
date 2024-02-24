import '../styles/footer.css'
import facebook from '../assets/facebook.png'
import discord from '../assets/discord.webp'
import instagram from '../assets/instagram.png'
import behance from '../assets/behance.png'

function Footer() {
    return (
        <div className="footer-section">
            <div className='icon-group'>
                <div>
                    <a className='footer-icon' href="#" target='_blank'>
                        <img src={facebook} alt=''></img>
                    </a>
                </div>
                <div>
                    <a className='footer-icon' href="https://discordapp.com/users/917769332157718599" target="_blank" rel="noreferrer">
                        <img src={discord} alt='' style={{ backgroundImage: 'none' }}></img>
                    </a>
                </div>
                <div>
                    <a className='footer-icon' href="https://www.instagram.com/anasdesigns.__/" target="_blank" rel="noreferrer">
                        <img src={instagram} alt=''></img>
                    </a>
                </div>
            </div>
            <a href="https://www.behance.net/AnasSualeh" target="_blank" rel="noreferrer">
                <img src={behance} alt='' className='behance-img'></img>
            </a>
            <p>
                <a href='https://www.behance.net/AnasSualeh' target='_blank' rel="noreferrer" className='behance-logo-heading'>www.behance.net/AnasSualeh
                </a>
            </p>
        </div>
    )
}

export default Footer