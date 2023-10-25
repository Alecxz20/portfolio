import style from './Hero.module.css'
import { AiOutlineDownload } from 'react-icons/ai'
import Reveal from './Reveal'
import profile from '../assets/profile.png'

export default function Hero() {
  return (
    <section className={style.container}>
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
            <button className={style.heroBtn}>
              <span>Get Resume</span>
              <AiOutlineDownload className={style.heroIcon} />
            </button>
          </Reveal>
        </div>
        <Reveal className={style.imgContainer}>
          <img className={style.heroImg} src={profile} alt="profile image" />
        </Reveal>
      </div>
    </section>
  )
}
