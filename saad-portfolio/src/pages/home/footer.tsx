import {useRef} from "react";
import emailjs from '@emailjs/browser';
import styles from '../../styles/footer.module.css';

const Footer = () => {
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
                <h2 className={styles.footerTitle}>Contact me!</h2>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className={styles.footerForm}>
                    <label>Name</label>
                    <input type="text" placeholder="Name" name="user_name" required/>

                    <label>Email</label>
                    <input type="email" placeholder="Email" name="user_email" required/>

                    <label>Message</label>
                    <textarea name="message" placeholder="Message"> </textarea>

                    <button className="styles.footerBtn" type="submit">Send</button>
                </form>
            </div>
        </section>
    );
};


export default Footer;