'use client'
import image from "../../public/emblem.png"
import phone from "../../public/landingPagePhone.png"
import './page.css'
import Image from "next/image"
import emailjs from '@emailjs/browser';
import { useRef,useState } from "react"


export default function LandingPage() {
    
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
        <div className="firstHalfContainer">
            <div className="companyNameContainer">
                <Image className="TagLinkLogo"src={image} />
                <div className="TagLinkName">
                    <p>TagLink</p>
                </div>
            </div>
            <div className="string-phoneContainer"style={{display:"flex"}}>
                <div className="stringLetterContainer">
                    <p className="string">Effortlessly Manage Vehicle Information with NFC Technology - Streamline Your Dealership Operations!</p>
                </div>
                <div className="phoneContainer">
                    <Image className="phone" src={phone}/>
                </div>
            </div>
            
        </div>
        <div className="secondHalfContainer">
            {submittedForm && (
                <>
                    <div className="string">
                        REQUEST A FREE DEMO TO GET STARTED
                    </div>
                    <div className="userInputContainer">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="yourInput">
                                    <input className="input" type="text" name="email" placeholder="Your email" />
                                </div>
                                <div className="yourInput">
                                    <input className="input" type="text" name="company" placeholder="Company" />
                                </div>
                                <div className="getStartedContainer">
                                    <button type="submit" className="getStarted"> Get Started</button>
                                </div>
                            </form>

                    </div>
                </>
            )}
            {!submittedForm && (
                <>
                    <div className="string">
                    Thank you for submitting your information!<br/> We will get back to you soon.
                    </div>
                    
                </>
            )}
        </div>

    </main>
  ) 
}
