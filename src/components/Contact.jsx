import style from './Contact.module.css'
import Heading from './Heading'
import Reveal from './Reveal'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

export default function Contact() {
  return (
    <section className={style.contact}>
      <Heading color="#EEF0F1" front="Get in Touch" back="Contact" />
      <div className={style.contactContent}>
        <div className={style.left}>
          <Reveal>
            <div className={style.contactItem}>
              <span className={style.contactItemIcon}>
                <BsWhatsapp />
              </span>
              <a href="#">+57 304 5661202</a>
            </div>
          </Reveal>
          <Reveal>
            <div className={style.contactItem}>
              <span className={style.contactItemIcon}>
                <AiOutlineMail />
              </span>
              <a href="#">alexisopereze@gmail.com</a>
            </div>
          </Reveal>
        </div>
        <div className={style.right}>
          <Reveal>
            <h3 className={style.formTitle}>Send me a note</h3>
          </Reveal>
          <Reveal>
            <form className={style.form}>
              <div className={style.formInputs}>
                <div className={style.inputField}>
                  <input
                    required
                    type="text"
                    className={style.inputBox}
                    id="fullName"
                  />
                  <label htmlFor="fullName">Full Name</label>
                </div>
                <div className={style.inputField}>
                  <input
                    required
                    type="email"
                    className={style.inputBox}
                    id="email"
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className={style.textAreaContainer}>
                <textarea
                  required
                  className={style.textArea}
                  name="message"
                  id="message"
                  rows={10}
                />
                <label className={style.textAreaLabel} htmlFor="message">
                  Write a note
                </label>
              </div>
              <button className={style.formBtn} type="submit">
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
