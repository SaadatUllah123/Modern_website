import Image from "next/image";
import heroImage from "../images/hero4.png";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>awesome app for your financial.</h1>
          <p>
            the should be used to tell a story and let your users know a little
            more about app and it's use, how can benefit them.
          </p>
          <button className="btn">download app</button>
        </div>
        <div className="hero-image">
          <Image src={heroImage} alt="hero-image" />
        </div>
      </div>
    </section>
  );
}
