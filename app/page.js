import Head from "next/head";
import Video from"next-video"
import ScreenRecording from "@/videos/phoneVideo.mp4"
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
            <Image className="TagLinkLogo"src={image} />
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
          <Video className="screenRecording"  src={ScreenRecording}/>
        </div>
      </div>
      <div className="savingCompanyContainer" >
        <div className="savingTimeContainer">
          <div className="pictureContainer">
            <Image className="clock"src={clock} />
          </div>
          <div className="stringContainer">
              <div className="header">
                <p>Save Time</p>
              </div>
              <div className="info">
                <p>Manage all your forms in the palm of your hands, saving time by :</p>
                <ul>
                  <li> &nbsp; &#8226; Reducing the time spent sorting through stacks of paper</li>
                  <li> &nbsp;&#8226; Streamlining data retrieval</li>
                  <li> &nbsp; &#8226;  improving organnization and accessibility</li>
                  <li> &nbsp; &#8226; Minimizing errors from manual handling  </li>  
                </ul>
                <p>Experience increased efficiency and productivity, allowing you to 
                  focus on what matters most—serving your customers and growing your business.</p>
              </div>
          </div>
        </div>
        <div className="savingEffortContainer" >
          <div className="stringContainer">
                <div className="header">
                  <p>Save Effort</p>
                </div>
                <div className="info">
                  <p>TagLink offers an efficient reporting tool:</p>
                  <ul>
                    <li> &nbsp; &#8226; Store information in one place </li>
                    <li> &nbsp;&#8226; Retrieve information quickly </li>
                    <li> &nbsp; &#8226;  Simplify data management </li>
                    <li> &nbsp; &#8226; Reduce paperwork clutter </li>  
                  </ul>
                  <p>These tools ensure that you and your employees are
                     always up to date with the latest updates on each vehicle, 
                     enhancing productivity and accuracy.</p>
                </div>
            </div>
          <div className="pictureContainer">
            <Image src={effort}/>
          </div>
        </div>
      </div>
    </main>
  );
}
