"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { contact, services } from "@/lib/content";
import { ease, Reveal } from "./motion";

export function Contact() {
  const [sent, setSent] = useState(false);

  // There is no backend yet, so the enquiry opens in the visitor's email app.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Service: ${data.get("service")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      "Facility management enquiry",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container contact-grid">
        <Reveal from="right" className="contact-intro">
          <span className="eyebrow">Let’s work together</span>
          <h2>Your next facility partner is here.</h2>
          <p>
            Tell us about your site and your needs. Our team is ready to find a dependable solution
            that works for you.
          </p>
          <ul className="contact-quick">
            {contact.phones.map((phone) => (
              <li key={phone.href}>
                <a href={phone.href}>☎ {phone.label}</a>
              </li>
            ))}
            <li>
              <a href={`mailto:${contact.email}`}>✉ {contact.email}</a>
            </li>
          </ul>
        </Reveal>

        <Reveal from="left" delay={0.15}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  className="form-sent"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease }}
                >
                  <span className="form-sent-icon">✓</span>
                  <h3>Your email app should be open</h3>
                  <p>Send the drafted message and our team will get back to you shortly.</p>
                  <button type="button" className="button" onClick={() => setSent(false)}>
                    <span>Write another enquiry</span>
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" exit={{ opacity: 0, y: -10 }} className="form-fields">
                  <div className="field">
                    <input id="name" name="name" required placeholder=" " autoComplete="name" />
                    <label htmlFor="name">Your name</label>
                  </div>
                  <div className="field">
                    <input id="phone" name="phone" type="tel" required placeholder=" " autoComplete="tel" />
                    <label htmlFor="phone">Phone number</label>
                  </div>
                  <div className="field">
                    <select id="service" name="service" defaultValue="General enquiry">
                      <option>General enquiry</option>
                      {services.map((s) => (
                        <option key={s.title}>{s.title}</option>
                      ))}
                    </select>
                    <label htmlFor="service" className="is-fixed">
                      Service needed
                    </label>
                  </div>
                  <div className="field">
                    <textarea id="message" name="message" rows={4} placeholder=" " />
                    <label htmlFor="message">Tell us about your site</label>
                  </div>
                  <button className="button button-navy" type="submit">
                    <span>Send enquiry</span> <span aria-hidden="true">↗</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
