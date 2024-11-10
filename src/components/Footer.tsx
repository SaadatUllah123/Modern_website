import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

export default function Footer() {
  return (
    <footer>
      <div id="footer">
        <div className="footer-container">
          <div className="col-1">
            <h1>about app</h1>
            <p>
              This Should Be Used To Tell A Story And Include Any Testimonials
              You Might Have About Your Product Or Service For Your Clients
            </p>
            <div className="media-icons">
              <h2>follow us </h2>
              <ul>
                <li>
                  <Link href="">
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.github.com/SaadatUllah123"
                    target="_blank"
                  >
                    <FaGithub />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/saadat-ullah-29b5042b8"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="nav-box">
              <h1>Quick Links</h1>
              <Link href={"/"}>Home</Link>
              <Link href={"/features"}>features</Link>
              <Link href={"/pricing"}>pricing</Link>
              <Link href={"/blog"}>blog</Link>
              <Link href={"/contact"}>contact</Link>
            </div>
            <div className="nav-box">
              <h1>help</h1>
              <Link href={"/"}>about us</Link>
              <Link href={"/"}>career</Link>
              <Link href={"/"}>reviews</Link>
              <Link href={"/"}>terms & conditions</Link>
              <Link href={"/"}>help</Link>
            </div>
          </div>
          <div className="col-3">
            <h1>Newsletter</h1>
            <p>Subscribe With Email And Loads Of News Will Be Sent To You</p>
            <div className="email-box">
              <input type="email" placeholder="Enter Your Email" required />
              <button type="submit" className="sub-btn">
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
        <div className="footer-end">
          <p>2024 &copy; saadatullah. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
