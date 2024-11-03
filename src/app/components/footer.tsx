import '@fortawesome/fontawesome-free/css/all.min.css';
// import '@global.css';  // Assuming you have global styles

import Image from 'next/image';
import Link from 'next/link';
import Logo from "../data/footer-logo.png"
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <Image src={Logo} alt="Logo" width={145} height={94} />
                   
                </div>
                <div className="footer-section">
                    <h4>Information</h4>
                    <ul>
                        <li><Link href="#">Main</Link></li>
                        <li><Link href="#">Gallery</Link></li>
                        <li><Link href="#">Projects</Link></li>
                        <li><Link href="#">Certifications</Link></li>
                        <li><Link href="#">Contacts</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contacts</h4>
                    <p><i className="fas fa-map-marker-alt"></i> 1234 Sample Street<br />Austin Texas 78704</p>
                    <p><i className="fas fa-phone"></i> 512.333.2222</p>
                    <p><i className="fas fa-envelope"></i> sampleemail@gmail.com</p>
                </div>
                <div className="footer-section-social-media">
                    <h4>Social Media</h4>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-pinterest"></i></a>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p>© 2023 All Rights Reserved</p>
            </div>
        </footer>
    )
}

