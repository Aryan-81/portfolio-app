'use client';
import { useState } from 'react';
import styles from './ContactForm.module.css';
import data from '/public/data/homeData.json';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // setStatus('Sending...');

    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     setStatus('Message sent successfully!');
    //     setFormData({
    //       name: '',
    //       email: '',
    //       mobileNumber: '',
    //       message: '',
    //     });
    //   } else {
    //     setStatus('Failed to send the message. Please try again.');
    //   }
    // } catch (error) {
    //   console.error('Error sending the message:', error);
    //   setStatus('An error occurred. Please try again.');
    // }
  };

  return (
    <main>
      <section className={styles.contactFormctr}>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <div>
              <h2>Contact Info</h2>
              <ul className={styles.info}>
                <li>
                  <span><img src='/assets/location.png' alt="location" /></span>
                  <span>
                    Indian Institute of Technology Jammu <br />
                    Jagti, NH-44 , PO Nagrota <br />
                    Jammu - 181 221 J&K, India
                  </span>
                </li>
                <li>
                  <span><img src='/assets/mail.png' alt="mail" /></span>
                  <span>{data.email}</span>
                </li>
              </ul>
            </div>
            <ul className={styles.socialIcon}>
              <li><a href="#" target='_blank'><img src='/assets/github.svg' width='25px' alt="social1" /></a></li>
              <li><a href="#"><img src='/assets/3.png' alt="social2" /></a></li>
              <li><a href="#"><img src='/assets/5.png' alt="social3" /></a></li>
            </ul>
          </div>

          <div className={styles.contactForm}>
            <h2>Get In Touch</h2>
            <form className={styles.formBox} onSubmit={handleSubmit}>
              <div className={`${styles.inputBox} ${styles.w50}`}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <span>Name</span>
              </div>
              <div className={`${styles.inputBox} ${styles.w50}`}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <span>Email</span>
              </div>
              <div className={`${styles.inputBox} ${styles.w50}`}>
                <input
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  
                />
                <span>Mobile Number</span>
              </div>
              <div className={`${styles.inputBox} ${styles.w100}`}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <span>Write Your Message Here.</span>
              </div>
              <div className={`${styles.inputBox} ${styles.w100}`}>
                <input type="submit" value="Submit" />
              </div>
            </form>
            <p>{status}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactForm;
