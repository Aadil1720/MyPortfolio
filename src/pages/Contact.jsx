import React, {useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  
    const my_email='mohdadil1j2@gmail.com';
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation
        if (!name || !email|| !message) {
            toast.error('Please fill in all required fields.', false);
            return;
        }

        try {
            const mailtoLink = `mailto:${my_email}?body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
            window.location.href = mailtoLink;
            // Show success message
            toast.success('Message sent successfully!', true);
            // Reset form fields
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            // Show error message if sending email failed
            toast.error(`Failed to send message. Please try again later. ${error}`, false);
        }
    };
  return (
    <section className="contact" data-page="contact">

      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      {/* <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
            width="400" height="300" loading="lazy" title="Google Map"></iframe>
        </figure>
      </section> */}

      <section className="contact-form">

        <h3 className="h3 form-title">Contact Form</h3>

        <form action="#" className="form" data-form onSubmit={handleSubmit}>

          <div className="input-wrapper">
            <input type="text" name="fullname" className="form-input" placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required data-form-input />

            <input type="email" name="email" className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)} placeholder="Email address" required data-form-input />
          </div>

          <textarea name="message" className="form-input" value={message}
            onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" required data-form-input></textarea>

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>

        </form>

      </section>

    </section>
  );
};

export default Contact;
