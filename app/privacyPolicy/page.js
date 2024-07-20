import './page.css'
import image from "../../public/emblem.png"
import Image from "next/image"
import Link from 'next/link';

export default function PrivacyPolicy() {
  
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
              <Link href="/contact" >Contact</Link>
            </div>
          </div>
        </nav>
        <hr className="navDivider" style={{color: '#6A6969',backgroundColor: '#6A6969',height: 1,borderColor : '#6A6969'}}/>    
        <div className='policyContainer'>
            <div className='titleContainer'>
                <p>Privacy Policy</p>
            </div>
            <div className='string'>
                <p>This statement is effective as of July 18, 2024 <br/><br/>
                This privacy policy sets out how TagLink collects, discloses,
                 and uses personal information about you and how you exercise 
                 your privacy rights. Please read this Privacy Policy carefully.
                  If you do not agree with the terms of this Privacy Policy, 
                  please do not access the App.</p>
            </div>


            {/* infor we collect */}
            <div className='titleContainer'>
                <p>Information We Collect </p>
            </div>
            <div className='string'>
                <h1 className='subHeading'>Information You Provide</h1>
                <p>We may collect information that you choose to provide 
                    on the sites in a variety of ways, such as when you:</p>
                <ol>
                    <li>1. Register for our service. This information 
                        may include your name, address, telephone number, 
                        email number, company name</li>
                    <li>2. Data from NFC tags. Information read from or 
                        written to NFC tags using the App, including vehicle
                         information and repair history.</li>
                    <li>3.	Log Data. Information our servers automatically 
                        collect when you access the App, such as your IP address, 
                        device type, operating system, and usage statistics.	</li>
                </ol>
                <h1 className='subHeading'>Combined Information And Information From Other Sources</h1>
                <p>
                    We may combine information that you provide to us with information we receive from our 
                    affiliates and other sources, as well as with other information that is automatically collected.
                </p>
            </div>


            {/* How we use the info we collect */}
            <div className='titleContainer'>
                <p>How We Use the Information We Collect </p>
            </div>
            <div className='string'>
                <h1 className='subHeading'>WE MAY USE INFORMATION WE COLLECT FOR THE FOLLOWING PURPOSES:</h1>
                <p>
                    <ol>
                        <li>
                            1.for every day business purposes, such as establishing and managing your user account, 
                            providing products and services you request, and providing customer support;
                        </li>
                        <li>
                            2.	to offer our other products or services and/or the products or services of others to 
                            you;
                        </li>
                        <li>
                            3.	to evaluate and improve our business, including developing new products and services and
                            analyzing the effectiveness of products, services, applications 	
                        </li>
                        <li>
                            4.	to diagnose and address technical and service problems;
                        </li>
                        <li>
                            5.	to perform data analyses, including market and consumer research, trend analysis, demographic 
                            analysis and financial analysis;
                        </li>
                        <li>
                            6.	to deliver content (including advertising) correlating to your interests and browsing and usage
                             history, both within the Sites and on other websites and applications;
                        </li>
                        <li>
                            7.	to comply with applicable legal requirements and our policies;
                        </li>
                        <li>
                            8.	to contact you via telephone, text or chat. We will obtain your consent to contact you when and 
                            in the manner required by law; and
                        </li>
                        <li>
                            9.	to SMS Program: Personal data collected through the short code won’t be shared, sold, or rented to unaffiliated 
                            or affiliated third parties for their own marketing purposes.
                        </li>
                        <li>
                             10. No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. 
                             All other categories exclude text messaging originator opt-in data and consent; this information will not 
                             be shared with any third parties
                        </li>
                    </ol>
                </p>
            </div>


            {/* Info we share */}
            <div className='titleContainer'>
                <p>Inforamtion We Share</p>
            </div>
            <div className='string'>
                <ol style={{display:"list-item"}}>
                    <li>
                         1.	Affiliates and Dealers. Information collected, including personal information and
                          Data Technologies, may be shared with affiliates and dealers, and their agents and 
                          third-party service providers, who will use that information in accordance with their
                           own privacy policies.
                    </li>
                    <li>
                        2.	Our Service Providers. We may engage third parties to provide the services offered 
                        through or in connection with the Sites on our behalf. We require such providers to maintain
                        information about you as confidential and to use the information only to perform the services
                        specified by us in a manner consistent with this Privacy Statement.
                    </li>
                    <li>
                        3.	Corporate and Asset Transactions. If we sell all or substantially all of our business or 
                        sell or transfer all or a material part of our assets, or are otherwise involved in a merger or 
                        transfer of all or a substantial part of our business, we may transfer all information we have 
                        collected and stored, including personal information, to the party or parties involved in the 
                        transaction as part of that transaction.
                    </li>
                    <li>
                        4.	Other. We may access or disclose information, including personal information, to:<br/>
                            a. protect or defend our interests and the legal rights or property of TagLink and our affiliates; <br/>
                            b. protect the rights, interests, safety and security of users of the Sites or members of the public; <br/>
                            c. protect against fraud or for risk management purposes; or <br/>
                            d. comply with prudent legal practice as we may determine, and applicable law or legal process.
                    </li>
                </ol>
            </div>


            {/* Your Choices */}
            <div className='titleContainer'>
                <p>Your Choice</p>
            </div>
            <div  className='string'>
                <p>You are entitled to make certain choices about how we communicate with you.</p>
                <ol>
                    <li>
                        1.	You may choose not to provide personal information, even though that might impact your
                         ability to register or receive a particular product or service.
                    </li>
                    <li>
                        2.	If you do not want to receive marketing email from the Sites, you can follow the unsubscribe
                        link provided in those emails.
                    </li>
                    <li>
                        3.	If you do not want to receive interest-based advertisements, you can opt out as discussed in 
                        the “Advertising Networks” section above.
                    </li>
                    <li>
                        4. If you do not want us to use Location Information, you can decline our initial invitation to 
                        provide that information, or opt out by changing the location services settings on your mobile device. 
                        However, please note that certain features may not function properly or at all as a result if you opt out.
                    </li>

                </ol>
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
        );
}