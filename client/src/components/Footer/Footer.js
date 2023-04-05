import React from 'react'
import "./footer.css"
import { SocialIcon } from 'react-social-icons';
// import { BsArrowRightShort } from "react-icons/fa";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BsArrowRight,BsFillTelephoneFill,BsEnvelope } from "react-icons/bs";

const Footer = () => {
  return (
    <>
    <footer className="footer " id="contact">
        <div className="box-container">
            <div className="mainBox">
                <div className="content">
                    <a href="#"><img  className="footerlogo" src="https://cdn-icons-png.flaticon.com/512/1182/1182136.png?w=740&t=st=1672244997~exp=1672245597~hmac=5f24c451686e321ee5e3b268cd3fd8c3d4f000fdb883de4232dc0d356f768287" alt=""/></a>
                    <h1 className="logoName"> Cakyy </h1>
                </div>

                <p>Without Cakes Party Like Boaring Meeting. Make Life Happy With Cakky.</p>

            </div>
            <div className="box">
                <h3>Quick link</h3>
                <a href="/"><i><BsArrowRight/></i>Home</a>
                <a href="/cart"> <i><BsArrowRight/></i>Cart</a>
                <a href="/profile"> <i><BsArrowRight/></i>User Profile</a>
                <a href="/orderhistory"> <i><BsArrowRight/></i>Order History</a>
                {/* <a href="#"> <i><BsArrowRight/></i>contact</a> */}

            </div>
            {/* <div className="box">
                <h3>Extra link</h3>
                <a href="#"> <i><BsArrowRight/></i>Account info</a>
                <a href="#"> <i><BsArrowRight/></i>order item</a>
                <a href="#"> <i><BsArrowRight/></i>privacy policy</a>
                <a href="#"> <i><BsArrowRight/></i>payment method</a>
                <a href="#"> <i><BsArrowRight/></i>our  services</a>
            </div> */}
            <div className="box">
                <h3>Contact Info</h3>
                <a href="tel:+91 9428721281"> <i ><BsFillTelephoneFill/></i>+91 1111111111</a>
                <a href="mailto:hetshah059@gmail.com?subject=Feedback&body=Message" className="text-decoration-none" rel="noopener" target="_blank">Contact@Cakky</a>
                {/* <a href="#"> <i><BsEnvelope/></i>nikunjdudhat@gmail.com</a> */}

            </div>

        </div>
        <div className="share">
            {/* <a href="#" className="fab fa-facebook-f"></a> */}
            {/* <a href="#" className="fab fa-twitter"></a> */}
            <SocialIcon url="https://twitter.com/cakky" />
            <SocialIcon url="https://instagram.com/cakky" />
            <SocialIcon url="https://facebook.com/cakky" />
            {/* <a href="#" className="fab fa-instagram"></a> */}
            {/* <AiOutlineInstagram/> */}
            {/* <a href="#" className="fab fa-linkedin"></a> */}
            <SocialIcon url="https://linkedin.com/in/cakky" />
            {/* <a href="#" className="fab fa-pinterest"></a> */}
            <SocialIcon network="pinterest" style={{ height: 50, width: 50 }} />
        </div>
        <div className="credit">
            created by <span>Mr.Nikunj Dudhat </span> |all rights reserved ! 
        </div>
    </footer>
    </>
  )
}

export default Footer;
