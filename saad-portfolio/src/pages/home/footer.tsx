import { useRef } from "react";

import styles from '../../styles/footer.module.css';

const Footer = () => {
    const form = useRef();
    const sendEmail = () => {};
    return (
        <section id="footer" className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <h2 className={styles.footerTitle}>Contact me!</h2>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className={styles.footerForm}>
                    <input type="text"
                           placeholder="Name" name="user_name" required/>
                    <input type="email"
                           placeholder="Email" name="user_email" required/>
                </form>
            </div>
        </section>
    );
};


export default Footer;