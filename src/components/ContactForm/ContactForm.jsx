import styles from "./Contact.module.css";
import Button from "../Button/Button";
import { MdMessage, MdAddCall, MdEmail, MdOutlineDoneAll } from "react-icons/md";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button
            text="VIA CALL"
            icon={<MdAddCall fontSize="24px" />}
          />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FROM"
          icon={<MdEmail fontSize="24px" />}
        />
        <form action="">
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="name" placeholder=" Name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder=" Email id" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text_area">Text</label>
            <textarea type="text" rows="8" placeholder=" Write your text" />
          </div>
          <div style={{
            display: "flex",
            justifyContent: "end",
          }}>
            <Button
              text="Submit Button"
              icon={<MdOutlineDoneAll fontSize="24px" />}
            />
          </div>
        </form>
      </div>

      <div className={`${styles.contactImage}`}>
        <img src="image/Service 24_7-pana 1.png" alt="img" />
      </div>
    </section>
  )
}

export default ContactForm
