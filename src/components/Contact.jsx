import style from './Contact.module.css'
import Heading from './Heading'
import Reveal from './Reveal'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const form = useRef()
  const [valueName, setValueName] = useState('')
  const [valueEmail, setValueEmail] = useState('')
  const [valueMessage, setValueMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_baisv9l',
        'template_g1amwri',
        form.current,
        'me-q81_5hbXcOzKnY'
      )
      .then(
        (result) => {
          console.log(result.text)
          setValueName('')
          setValueEmail('')
          setValueMessage('')
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <section id="contact" className={style.contact}>
      <Heading color="#EEF0F1" front="Get in Touch" back="Contact" />
      <div className={style.contactContent}>
        <div className={style.left}>
          <Reveal>
            <div className={style.contactItem}>
              <span className={style.contactItemIcon}>
                <BsWhatsapp />
              </span>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://wa.me/573045661202"
              >
                +57 304 5661202
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div className={style.contactItem}>
              <span className={style.contactItemIcon}>
                <AiOutlineMail />
              </span>
              <a href="mailto:alexisopereze@gmail.com">
                alexisopereze@gmail.com
              </a>
            </div>
          </Reveal>
        </div>
        <div className={style.right}>
          <Reveal>
            <h3 className={style.formTitle}>Send me a note</h3>
          </Reveal>
          <Reveal thisWidth="100%">
            <form ref={form} onSubmit={sendEmail} className={style.form}>
              <div className={style.formInputs}>
                <div className={style.inputField}>
                  <input
                    name="from_name"
                    required
                    type="text"
                    className={style.inputBox}
                    id="fullName"
                    value={valueName}
                    onChange={(e) => setValueName(e.target.value)}
                  />
                  <label htmlFor="fullName">Full Name</label>
                </div>
                <div className={style.inputField}>
                  <input
                    name="from_email"
                    required
                    type="email"
                    className={style.inputBox}
                    id="email"
                    value={valueEmail}
                    onChange={(e) => setValueEmail(e.target.value)}
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
                  value={valueMessage}
                  onChange={(e) => setValueMessage(e.target.value)}
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
