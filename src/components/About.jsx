import style from './About.module.css'
import Heading from './Heading'
import Reveal from './Reveal'
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs'

export default function About() {
  return (
    <section className={style.about}>
      <div className={style.container}>
        <Heading color="#EEF0F1" front={'Know Me More'} back={'About Me'} />
        <div className={style.aboutContent}>
          <div className={style.information}>
            <Reveal>
              <h2 className={style.aboutTitle}>👋🏼 Hi there! I&apos;m Alexis</h2>
            </Reveal>
            <Reveal>
              <p className={style.aboutText}>
                A passionate Front-End React Developer with a love for creating
                interactive and visually appealing web applications. I thrive on
                turning ideas into beautifully crafted, user-friendly
                experiences.
              </p>
            </Reveal>
            <Reveal>
              <p className={style.aboutText}>
                With a solid foundation in JavaScript, HTML, CSS, and React, I
                am dedicated to turning your project into a reality. My
                expertise in React allows me to build dynamic and responsive
                user interfaces.
              </p>
            </Reveal>
          </div>
          <div className={style.social}>
            <Reveal>
              <div className={style.socialItem}>
                <BsGithub className={style.socialIcon} />
                <p>Github</p>
              </div>
            </Reveal>
            <Reveal>
              <div className={style.socialItem}>
                <BsLinkedin className={style.socialIcon} />
                <p>Linkedin</p>
              </div>
            </Reveal>
            <Reveal>
              <div className={style.socialItem}>
                <BsTwitter className={style.socialIcon} />
                <p>Twitter</p>
              </div>
            </Reveal>
            <Reveal>
              <div className={style.socialItem}>
                <BsInstagram className={style.socialIcon} />
                <p>Instagram</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
