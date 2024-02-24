import Header from './Header'
import Footer from './Footer'
import '../styles/Home.css'
import logo from '../assets/nav_logo.png'

function Home() {
    return (
        <div className="home-section">
            <Header />
            <div className='home-main'>
                <div className='home-main-left text-part'>
                    <div className='home-main-left-container'>
                        <p className='greeting'>Hi</p>
                        <p className='greeting'>I'm <span className='greeting-name'>Anas</span></p>
                        <p className='greeting-me'>User Interface Designer</p>
                        <a href="/" className='hire-me'>
                            <span className='button__icon-wrapper'>
                                <svg width="10" class="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z">
                                    </path>
                                </svg></span> Hire Me</a>
                    </div>
                </div>
                <div className='home-main-center'>
                    <img src={logo} alt='' style={{ height: '100px' }}></img>
                </div>
                <div className='home-main-right'>
                    <div className="circles text-part">
                        <p className='expertsOn'>Experts On</p>
                        <p className='web-app'>Web/App Interface <br />Game Interface</p>
                        <p className='hey'>Hey are you looking for designer to build your brand and grow your business? <br /> Let’s shake hands with me.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home