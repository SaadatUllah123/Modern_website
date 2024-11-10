import { FaCalendarAlt } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function Features() {
  return (
    <section id="features">
      <div>
        <div className="main-headings">
          <h4>Our Future</h4>
          <h1>Easy To Manage Your All Payments By Our App</h1>
        </div>
        <div className="features-container">
          <div className="card">
            <div className="card-icon">
              <FaCalendarAlt />
            </div>
            <h3>Expense Trackering</h3>
            <p>We use an application designed a testing gnose to keep away</p>
          </div>
          <div className="card">
            <div className="card-icon">
              <FaChartBar />
            </div>
            <h3>Expense Trackering</h3>
            <p>We use an application designed a testing gnose to keep away</p>
          </div>
          <div className="card">
            <div className="card-icon">
              <FaPhoneAlt />
            </div>
            <h3>Expense Trackering</h3>
            <p>We use an application designed a testing gnose to keep away</p>
          </div>
        </div>
      </div>
    </section>
  );
}
