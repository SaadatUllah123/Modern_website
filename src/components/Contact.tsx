export default function Contact() {
  return (
    <section id="contact">
      <div>
        <div className="main-headings">
          <h4>have a question</h4>
          <h1>Get In touch</h1>
        </div>
        <div className="contact-container">
          <form action="">
            <div className="input-box">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-box">
              <input type="number" placeholder="phone" required />
              <input type="text" placeholder="company" required />
            </div>
            <textarea name="Your Message" placeholder="Your Message"></textarea>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
