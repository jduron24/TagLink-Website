import Link from 'next/link';
import image from "../../public/emblem.png"
import Image from "next/image"
import headShot from "../../public/jonathanDuronheadShot.jpg"
// import { ImageOptimizerCache } from 'next/dist/server/image-optimizer';

export default function AboutUs() {
    return (
        <main className=""  style={{}}>
            <nav className="navBar" style={{backgroundColor:"#363636"}}>
                <div className="TagLinkHomeScreenContainer">
                    <div className="TagLinkLogo" style={{display:"flex"}}>
                        <Image className="TagLinkLogo"src={image} />
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
                    <Link href="/contact">Contact</Link>
                    </div>
                </div>
            </nav>

            <div className='aboutTagLinkContainer'>
                <div className='sectionContainer'>
                    <div className='header'>
                        <p>About TagLink</p>
                    </div>
                    <div className='string'>
                        <p>TagLink is a phone application that utilizes near field communication (NFC) 
                            technology to store and retrieve information efficiently for third-party car 
                            dealers. This data storage method offers greater efficiency compared to 
                            traditional pen and paper forms, enabling real-time updates and seamless 
                            integration with existing dealership systems. <br/> <br/>
                            TagLink helps dealers create effortless experiences by streamlining 
                            data management, facilitating quick access to vehicle information, and 
                            providing user-friendly interfaces for seamless navigation. We provide 
                            these services within a single platform, optimizing business operations 
                            with unparalleled efficiency that our customers won&apos;t find elsewhere, 
                            ultimately granting them the invaluable gift of <p style={{fontWeight:"bold",color:"black",display:"inline"}}>time</p>.</p>
                    </div>
                </div>
            </div>
            <div className='ourStoryContainer'>
                <div className='header'>
                    <p>Our Story</p>
                </div>
                <div className='section'>
                    <div className='string'>
                        <p>TagLink was founded in 2024 by Jonathan Duron, Founder and CEO. TagLink began 
                            in the idea stage for the initial first months before being presented at a pitch 
                            competition, where it secured a honorable mention winning spot. Following the pitch
                            competition, development of TagLink commenced, and by April, the app was operational
                            for a single user. Although there were already a few potential users at that point,
                            it wasn&apos;t until May that TagLink became functional for multiple dealers to utilize
                            simultaneously. <br/> <br/>
                            In May, TagLink joined the CYstarters program to launch the company and propel its growth. 
                            
                        </p>
                    </div>
                    <div className='picture'>
                            <Image src={headShot}/>
                    </div>
                </div>
            </div>
        </main>
    );
  }