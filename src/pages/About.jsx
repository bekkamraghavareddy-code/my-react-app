import { useContext, useEffect } from "react";
import { AuthContext } from "../globalvalues/AuthContext";
import "./About.css";

export default function About() {
  const { logout, login } = useContext(AuthContext);
  useEffect(() => {
    login();
  }, []);

  return (
    <main className="about-page">
      <header>
        <h1>About Us</h1>
        <p className="tagline">Building thoughtful web experiences that help teams move faster.</p>
      </header>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          We create reliable, user-centered software that solves real problems. Our focus is on clarity,
          performance, and delightful user experiences. We partner with product teams to turn ideas into
          production-ready applications.
        </p>
      </section>

      <section className="what-we-do">
        <h2>What We Do</h2>
        <ul>
          <li>Design and build modern web applications</li>
          <li>Ship accessible, performant user interfaces</li>
          <li>Provide product and technical consulting</li>
        </ul>
      </section>

      <section className="team">
        <h2>Our Team</h2>
        <p>Small, cross-functional teams of designers and engineers who collaborate closely with customers.</p>
        <div className="team-list">
          <div className="team-member">
            <strong>Raghava</strong>
            <div>Founder &amp; CEO</div>
          </div>
          <div className="team-member">
            <strong>Alice</strong>
            <div>Product Designer</div>
          </div>
          <div className="team-member">
            <strong>Bob</strong>
            <div>Lead Engineer</div>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Get in touch</h2>
        <p>
          If you'd like to learn more or work together, visit our contact page or email us at
          <a href="mailto:hello@example.com" className="email-link">hello@example.com</a>.
        </p>
      </section>
    </main>
  );
}
