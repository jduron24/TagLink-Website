import Head from "next/head";
import NextVideo from"next-video"
import screenRecording from "/videos/updatedVideo.mp4"
import image from "../public/emblem.png"  
import clock from "../public/clock.png"
import Image from "next/image"
import Link from 'next/link';  

import effort from "../public/effort.png"
 
 
export default function Home() {
  
  return (  
    <main className="main"  style={{backgroundColor:"#363636"}}>
      <nav className="navBar" style={{backgroundColor:"#363636"}}>
        <div className="TagLinkHomeScreenContainer">
          <div className="TagLinkLogo" style={{display:"flex"}}>
            <Image className="TagLinkLogo"src={image}  />
            <div className="TagLinkName">
              <p>TagLink</p>
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
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>
      <hr className="navDivider" style={{color: '#6A6969',backgroundColor: '#6A6969',height: 1,borderColor : '#6A6969'}}/>
      <div className="introContainer">
        <div className="letterContainer">
          <div className="bigLetterContainer">
            <p>The fastest and easiest<br/> way to store information <br/></p> 
            <p style={{color: '#9BCBD5'}}>for car dealerships</p>
          </div>
          <div className="littleContainer">
            <p>Helping leading car dealers efficiently manage information
              with TagLink through personalized forms and cloud storage.</p>
          </div>
        </div>
        <div className="videoContainer">

        </div>
      </div>
      <div className="phoneExampleContainer">
        <div className="letterContainer">
          <div className="bigLetterContainer">
            <p>Our innovative software makes it easier to store and receive data for your dealer</p>
          </div>
        </div>
        <div className="deviceContainer">
          <NextVideo autoPlay loop className='screenRecording' src={screenRecording}/>
        </div>  
      </div>

      <div className="savingCompanyContainer">
        <div className="savingContainer">
          <div className="titleName">
            <p>Save Time</p>
          </div>
          <div className="stringContainer">
            <ul>
              <ol>&#8226; Reduce time sorting through paper</ol>
              <ol>&#8226; Minimize error from manual handling</ol>
              <ol>&#8226; Streamline data retrieval</ol>
            </ul>
          </div>
          <div className="picture">
            <Image src={clock}/>
          </div>
        </div>

        <div className="savingContainer">
          <div className="titleName">
            <p>Enhance Communcation</p>
          </div>
          <div className="stringContainer">
            <ul>
              <ol>&#8226; Share information between departments</ol>
              <ol>&#8226; Keep your entire team informed with real-time updates</ol>
              <ol>&#8226; Enable technicians and other staff to suggest improvements.</ol>
            </ul>
          </div>
          <div className="picture">
            <Image src={clock}/>
          </div>
        </div>

        <div className="savingContainer">
          <div className="titleName">
            <p>Save Time</p>
          </div>
          <div className="stringContainer">
            <ul>
              <ol>&#8226; Reduce time sorting through paper</ol>
              <ol>&#8226; Minimize error from manual handling</ol>
              <ol>&#8226; Streamline data retrieval</ol>
            </ul>
          </div>
          <div className="picture">
            <Image src={clock}/>
          </div>
        </div>

      </div>
    </main>
  );
}
