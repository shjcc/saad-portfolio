import {useRef} from "react";
import emailjs from '@emailjs/browser';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import styles from '../../styles/contact.module.css';

const Contact = () => {
    const form = useRef(null);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_n1wrsw4', 'template_vgnja1v', e.currentTarget, {
                publicKey: 'cn8V8gjTY22xvh7_-',
            })
            .then(
                () => {
                    console.log('email fired off!');
                },
                (error) => {
                    console.log('email fizzled out...', error.text);
                },
            );
        e.currentTarget.reset()
    };

    return (
        <section id="contact" className={styles.contactContainer}>
            <div className={styles.contactContent}>
                <h2 className={styles.contactTitle}>Contact</h2>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className={styles.contactForm}>
                    <label className={styles.contactLabel}>Name*</label>
                    <input className={styles.contactInput} type="text" placeholder="Your Name..." name="user_name" required/>

                    <label className={styles.contactLabel}>Email*</label>
                    <input className={styles.contactInput} type="email" placeholder="Your Email..." name="user_email" required/>

                    <label className={styles.contactLabel}>Message*</label>
                    <textarea className={styles.contactInputMsg} placeholder="Your Message..." name="message"></textarea>

                    <button className={styles.contactBtn} type="submit">Send</button>
                </form>
                <div className={styles.contactIconBox}>
                    <p className={styles.contactIconText}>For more info</p>
                    <a href="https://www.linkedin.com/in/saad-hussain-a0b9a629b/" target="_blank" className={styles.aboutIconAnchor}>
                    <FontAwesomeIcon className={styles.contactIcon} icon={ faLinkedin } /></a>
                    <a href="https://github.com/shjcc" target="_blank" className={styles.aboutIconAnchor}>
                    <FontAwesomeIcon className={styles.contactIcon} icon={ faSquareGithub }  /></a>
                </div>
            </div>
        </section>
    );
};


export default Contact;