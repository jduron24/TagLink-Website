'use client'
import image from "../../public/emblem.png"
import Image from "next/image"
import Link from 'next/link';
import { useRef,useState } from "react"
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef()
    const [submittedForm, setSubmittedForm] = useState(true)

    const sendEmail = (e) => {
        e.preventDefault();
        setSubmittedForm(false);
    
        emailjs
          .sendForm('service_9twrsx9', 'template_eaa3ixn', form.current, {
            publicKey: 'CFO1QmBQGVvam-rzi',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          event.target.reset()
      };
    return (
        <main className="main"  style={{backgroundColor:"#363636"}}>
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
                    {submittedForm && (
                        <>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="yourName">
                                    <input className="input" type="text" placeholder="Your Name"/>
                                </div>
                                <div className="yourEmail">
                                    <input className="input" type="text" placeholder="Your Email"/>
                                </div>
                                <div className="yourMessage">
                                    <textarea className="message" placeholder="Your Message"rows={10} cols={45} />
                                </div>
                                <div className="submitButton">
                                    <button className="button">Submit Form</button>
                                </div>
                            </form>
                        </> 
                    )}
                    {!submittedForm && (
                        <>
                            <div className="thankYouForInfo">
                            Thank you for submitting your information!<br/> We will get back to you soon.
                            </div>
                            
                        </>
                    )}
                </div>
               
            </div>


            <div className="footer">
                <div className="footerContainer">
                <div className="contactContainer">
                    <div className="title">
                    <p>CONTACT</p>
                    </div>
                    <div className="string">
                    <p>Email: TagLink2024@gmail.com</p>
                    </div>
                </div>

                <div className="contactContainer">
                    <div className="title">
                    <p>MENU</p>
                    </div>
                    <div className="string">
                    <p><Link href="/">Home</Link> <br/> <Link href="/aboutUs">About</Link> <br/> <Link href="/contact">Contact</Link></p>
                    </div>
                </div>
                </div>
            </div>


        </main>
    )
}