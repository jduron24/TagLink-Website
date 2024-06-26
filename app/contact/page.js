import image from "../../public/emblem.png"
import Image from "next/image"
import Link from 'next/link';
export default function Contact() {
    return (
        <main className=""  style={{backgroundColor:"#363636",height:"100vh"}}>
            <nav className="navBar" style={{backgroundColor:"#363636"}}>
                <div className="TagLinkHomeScreenContainer">
                    <div className="TagLinkLogo" style={{display:"flex"}}>
                        <Image className="TagLinkLogo"src={image}  />
                        <div className="TagLinkName">
                        <Link href="/">TagLink</Link>
                        </div>
                    </div>
                </div>
                <div className="aboutUsContainer">
                    <div className="aboutUs">
                        
                        <Link href="/aboutUs">About Us</Link>
                    </div>
                </div>
                <div className="contactUsContainer">
                    <div className="contactUs">
                        <p>Contact</p>
                    </div>
                </div>
            </nav>
            <hr className="navDivider" style={{color: '#6A6969',backgroundColor: '#6A6969',height: 1,borderColor : '#6A6969'}}/>
            <div className="contactUsPageContainer">
                <div className="header">
                    <p>Contact Us</p>
                </div>
                <div className="userInput">
                    <div className="yourName">
                        <input className="input" type="text" placeholder="Your Name"/>
                    </div>
                    <div className="yourEmail">
                        <input className="input" type="text" placeholder="Your Email"/>
                    </div>
                    <div className="yourMessage">
                        <textarea className="message" placeholder="Your Message"rows={10} cols={53.5}/>
                    </div>
                </div>
                <div className="submitButton">
                    <button className="button">Submit Form</button>
                </div>
                
            </div>
        </main>
    )
}