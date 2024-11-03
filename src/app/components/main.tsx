import Image from "next/image";
import Picture from "../data/building.png"
import Building1 from "../data/building1.png"
import Building2 from "../data/building2.png"
import Building3 from "../data/building3.png"
import Project from "../data/project.png"
import Project1 from "../data/project1.png"
import Project2 from "../data/project2.png"
import Project3 from "../data/project3.png"
import Project4 from "../data/project4.png"
import Project5 from "../data/project5.png"
import Project6 from "../data/All-project.png"
import Contact from "../data/contact.png"
import Contact2 from "../data/email.png"
import Read from "../data/read-more.png"
import Right from "../data/right.png"
import Left from "../data/left.png"
import Number from "../data/numbers.png"
import VeiwProject from "../data/viewProject.png"

export default function Main(){
    return(
        <div className="main">
       <div className="main-page">
       <div className="heading">
            <h1 className="project00">
                PROJECT
            </h1>
            <h1 className="lorum">
                Lorem
            </h1>
            <div className="right-arrow">
                <Image src={Right} alt="Right" width={0} height={0} />
               
            </div>
            <div className="left-arrow">
            <Image src={Left} alt="Left" width={0} height={0} />
            </div>
            <div className="number">
                <Image src={Number} alt="Number" width={0} height={0} />
            </div>
            </div>
            <div className="building">
            <Image src={Picture} alt="Building" width={0} height={0} />
           <div className="view">
            <Image src={VeiwProject} alt="View Project" width={0} height={0} />
 
           </div>
        </div>
           
       </div>
       
       <div className="about-page">
       <div className="building1">
            <Image src={Building1} alt="Building" width={0} height={0} />
        </div>
        <div className="building2">
            <Image src={Building2} alt="Building" width={0} height={0} />
        </div>
        <div className="building3">
            <Image src={Building3} alt="Building" width={0} height={0} />
        </div>
        <div className="about">
            <h1 className="about-heading">About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure aperiam iste voluptatibus veritatis sapiente repellendus esse quia, quas dolores obcaecati inventore ab et, officiis provident assumenda harum a voluptatem.</p>
        </div>
        <div className="read-more">
        <Image src={Read} alt="Read More" width={0} height={0} />
  
      </div>
       </div>
      <div className="main-focus">
      <div className="mission">
      <h1>Main Focus /Mission Statement</h1>
      </div>
      <div className="mission-container">
        <h1>1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatibus praesentium ex, dolores, quae, dolorum nobis laudantium dolor impedit expedita assumenda provident dicta esse explicabo nisi possimus tempore numquam eum!</p>
        <h1>2</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui accusantium veritatis maiores optio consequatur quis nihil facilis voluptas minima. Officia voluptatem veniam quidem temporibus? Obcaecati itaque numquam totam saepe sit.</p>
      </div>
    
       </div>
       <div className="project-div">
        <h1>Our Projects</h1>
        <div className="project-container">
           
        <div className="project">
            <Image src={Project} alt="Project" width={570} height={255} />
            
        </div>
        <div className="project1">
            <Image src={Project1} alt="Project" width={570} height={255} />
        </div>
        <div className="project2">
            <Image src={Project2} alt="Project" width={0} height={0} />
        </div>
        <div className="project3">
            <Image src={Project3} alt="Project" width={0} height={0} />
        </div>
        <div className="project4">
            <Image src={Project4} alt="Project" width={0} height={0} />
        </div>
        <div className="project5">
            <Image src={Project5} alt="Project" width={0} height={0} />
        </div>
        <div className="project6">
            <Image src={Project6} alt="Project" width={0} height={0} />
        </div>
       </div>
       
       </div>
       <div className="contact-container">
        
        <div className="contact-containers">
        <form action="">
        <h1 className="contact-heading">Contact Us</h1> 
                <input type="text"  id="name"  placeholder="Name" required/>
                <input type="number" id="Mobile"  placeholder="Phone Number*" required/>
                <input type="email" id="email"  placeholder="Email*" required/>
                <input type="text"   id="name"  placeholder="Interested In" required/>
                <h4>Message*</h4>
                <textarea name="" id="" required></textarea>
                
            </form>
       </div>
      <div className="contact-image">
        <Image src={Contact} alt="Contact" width={0} height={0} />
       
 
      </div>
      <div className="contact-email">
      <Image src={Contact2} alt="Email" width={0} height={0} />
      </div>
        </div>
        </div>
    )
}