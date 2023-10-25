import style from './Hero.module.css'
import { AiOutlineDownload } from 'react-icons/ai'
import Reveal from './Reveal'
import profile from '../assets/profile.png'
import resume from "../assets/Alexis_Perez-Resume.pdf"

export default function Hero() {
  return (
    <section id='home' className={style.container}>
      <div className={style.hero}>
        <div className={style.heroDescription}>
          <Reveal>
            <h2 className={style.heroTitle}>Hello! I&apos;m</h2>
          </Reveal>
          <Reveal>
            <h1 className={style.heroH1}>
              <span>Alexis</span> Perez
            </h1>
          </Reveal>
          <Reveal>
            <p className={style.heroText}>Front-end React Developer</p>
          </Reveal>
          <Reveal>
            <a
              download="resume-alexis-perez"
              href={resume}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <button className={style.heroBtn}>
                <span>Get Resume</span>
                <AiOutlineDownload className={style.heroIcon} />
              </button>
            </a>
          </Reveal>
        </div>
        <Reveal thisWidth="100%" className={style.imgContainer}>
          <img className={style.heroImg} src={profile} alt="profile image" />
        </Reveal>
      </div>
    </section>
  )
}
