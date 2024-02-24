import '../styles/about.css'
import Header from './Header'
import Footer from './Footer'

function About() {
    return (
        <div className="about-section">
            <Header />
            <div className='about-main'>
                <p className='about-me'>About Me</p>
                <div className="box">
                    <div className="main-box">
                        <div className="content">
                            <p>Hello there! I'm Anas, a passionate UI/UX developer ready to bring creativity and functionality to digital experiences. About Me I thrive on turning ideas into visually appealing and user-friendly designs. My journey in the world of UI/UX has equipped me with the skills to create seamless and enjoyable interactions. Skills User Interface Design (UI): Clean and modern design aesthetics Intuitive and user-centered layouts Pixel-perfect attention to detail User Experience (UX): Wireframing and prototyping Information architecture Usability testing and feedback integration I'm excited about the possibility of contributing my skills to innovative projects. Whether you have a specific opportunity or just want to chat about design, I'm all ears.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About