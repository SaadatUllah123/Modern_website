import Image from "next/image";
import iosImage from "../images/ios-store-dark.png";
import googleImage from "../images/g-play-dark.png";

export default function Download() {
  return (
    <section id="download">
      <div className="down-container">
        <h1>Download App Now And Save Your Money</h1>
        <p>
          Serving an impressive list of long-term money with experience and
          expertise in multiple industries.
        </p>
        <div className="download-box">
          <div className="ios-store">
            <Image src={iosImage} alt="" />
          </div>
          <div className="google-store">
            <Image src={googleImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
