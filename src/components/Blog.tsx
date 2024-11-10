import Image from "next/image";
import Link from "next/link";
import blog1 from "../images/blog1.jpg";
import blog2 from "../images/blog2.jpg";
import blog3 from "../images/blog3.jpg";

export default function blogs() {
  return (
    <section id="blog">
      <div>
        <div className="main-headings">
          <h4>Innovation And Quality Improvement</h4>
          <h1> Latest Updates, Solutions And Company News</h1>
        </div>
        <div className="blogs-container">
          <div>
            <div className="blog-image">
              <Image src={blog1} alt="blog1" />
            </div>
            <div className="blog-content">
              <p>
                20 august 2022<span>1 min read </span>
              </p>
              <Link href="#">
                Four ways to cheer yourself up on Blue Monday!
              </Link>
              <p>
                On the second edition of Serious Business, Inc. editor Jim
                Ledbetter and Fusion senior editor Salmon debate...
              </p>
              <Link href="#">
                <span>read more</span>
              </Link>
            </div>
          </div>
          <div>
            <div className="blog-image">
              <Image src={blog2} alt="blog2" />
            </div>
            <div className="blog-content">
              <p>
                20 august 2022 <span>1 min read </span>
              </p>
              <Link href="#">
                How to Organize Your budget for Maximum Productivity?
              </Link>
              <p>
                Global provider connected products for consumers, and
                enterprises worldwide, supply chain control is everything...
              </p>
              <Link href="#">
                <span>read more</span>
              </Link>
            </div>
          </div>
          <div>
            <div className="blog-image">
              <Image src={blog3} alt="blog3" />
            </div>
            <div className="blog-content">
              <p>
                20 august 2022 <span>1 min read </span>
              </p>
              <Link href="#">
                Should Small Businesses Be Entitled to system?
              </Link>
              <p>
                Our team provides skilled & experienced managers who know the
                intricacies of this vertical and focus...
              </p>
              <Link href="#">
                <span>read more</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
