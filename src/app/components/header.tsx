import Image from "next/image";
import Picture from "../data/logo.png";
export default function Header(){
    return(
       <div className="header">
       <div className="logo">
       <Image src={Picture} alt="logo" width={100} height={100}/>
       </div>
       <ul className="header-button">
        <li className="mainli">MAIN</li>
        <li>GALLERY</li>
        <li>PROJECTS</li>
        <li>CERTIFICATIONS</li>
        <li>CONTACTS</li>
       </ul>
       </div>
    )
}