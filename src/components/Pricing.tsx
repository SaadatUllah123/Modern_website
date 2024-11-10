import React from "react";
import { MdBookmark } from "react-icons/md";

export default function Pricing() {
  return (
    <section id="pricing">
      <div>
        <div className="main-headings">
          <h4>Pricing</h4>
          <h1>Get In Reasonable Price</h1>
        </div>
        <div className="pricing-container">
          <div className="pricing-box">
            <h1>
              <sup>$</sup>20<sub>/per month</sub>
            </h1>
            <h3>Basic</h3>
            <p>For Beginner Who Want To Scale Business Globaly</p>
            <ul>
              <li>
                {" "}
                <span>
                  {" "}
                  <MdBookmark />
                </span>{" "}
                Expense Management
              </li>
              <li>
                {" "}
                <span>
                  {" "}
                  <MdBookmark />
                </span>{" "}
                Card Management
              </li>
              <li>
                {" "}
                <span className="icon">
                  {" "}
                  <MdBookmark />
                </span>{" "}
                Instant Statistics
              </li>
              <li>
                {" "}
                <span className="icon">
                  {" "}
                  <MdBookmark />
                </span>{" "}
                Bookmark Function
              </li>
              <li>
                {" "}
                <span className="icon">
                  {" "}
                  <MdBookmark />
                </span>{" "}
                Accounting System
              </li>
            </ul>
            <button>Get Started</button>
          </div>
          <div className="pricing-box">
            <h1>
              <sup>$</sup>50<sub>/per month</sub>
            </h1>
            <h3>Basic</h3>
            <p>For Beginner Who Want To Scale Business Globaly</p>
            <ul>
              <li>
                {" "}
                <span>
                  {" "}
                  <MdBookmark />
                </span>{" "}
                Expense Management
              </li>
              <li>
                {" "}
                <span>
                  {" "}
                  <MdBookmark />
                </span>{" "}
                Card Management
              </li>
              <li>
                {" "}
                <span>
                  {" "}
                  <MdBookmark />
                </span>{" "}
                Instant Statistics
              </li>
              <li>
                {" "}
                <span>
                  {" "}
                  <MdBookmark />
                </span>{" "}
                Bookmark Function
              </li>
              <li>
                {" "}
                <span className="icon">
                  {" "}
                  <MdBookmark />
                </span>{" "}
                Accounting System
              </li>
            </ul>
            <button>Get Started</button>
          </div>
          <div className="pricing-box">
            <h1>
              <sup>$</sup>100<sub>/per month</sub>
            </h1>
            <h3>Basic</h3>
            <p>For Beginner Who Want To Scale Business Globaly</p>
            <ul>
              <li>
                {" "}
                <span>
                  {" "}
                  <MdBookmark />
                </span>{" "}
                Expense Management
              </li>
              <li>
                {" "}
                <span>
                  {" "}
                  <MdBookmark />
                </span>{" "}
                Card Management
              </li>
              <li>
                {" "}
                <span>
                  {" "}
                  <MdBookmark />
                </span>{" "}
                Instant Statistics
              </li>
              <li>
                {" "}
                <span>
                  {" "}
                  <MdBookmark />
                </span>{" "}
                Bookmark Function
              </li>
              <li>
                {" "}
                <span>
                  {" "}
                  <MdBookmark />
                </span>{" "}
                Accounting System
              </li>
            </ul>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
}
