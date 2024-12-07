import {useRef} from "react";
import emailjs from '@emailjs/browser';
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
        <section id="footer" className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <h2 className={styles.footerTitle}>Contact</h2>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className={styles.footerForm}>
                    <label className={styles.footerLabel}>Name*</label>
                    <input className={styles.footerInput} type="text" placeholder="Your Name..." name="user_name" required/>

                    <label className={styles.footerLabel}>Email*</label>
                    <input className={styles.footerInput} type="email" placeholder="Your Email..." name="user_email" required/>

                    <label className={styles.footerLabel}>Message*</label>
                    <textarea className={styles.footerInputMsg} placeholder="Your Message..." name="message"></textarea>

                    <button className={styles.footerBtn} type="submit">Send</button>
                </form>
            </div>
        </section>
    );
};


export default Contact;