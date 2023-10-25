import Heading from './Heading'
import style from './Portfolio.module.css'
import Reveal from './Reveal'
import project1 from '../assets/project1-1.png'
import project2 from '../assets/project2.png'

export default function Portfolio() {
  return (
    <section id="portfolio" className={style.portfolio}>
      <Heading front="My Work" back="Portfolio" color="#EEF0F1" />
      <div className={style.portfolioContent}>
        <Reveal>
          <div className={style.card}>
            <h2 className={style.projectTitle}>Jewelry Store</h2>
            <img className={style.projectImg} src={project1} alt="" />
            <div className={style.portfolioBtns}>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://alecxz20.github.io/store/"
              >
                <button className={style.btn}>Live website</button>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/Alecxz20/store"
              >
                <button className={style.btn}>Github repo</button>
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className={style.card}>
            <h2 className={style.projectTitle}>Popular movies</h2>
            <img className={style.projectImg} src={project2} alt="" />
            <div className={style.portfolioBtns}>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://alecxz20.github.io/movies-react-js/"
              >
                <button className={style.btn}>Live website</button>
              </a>
              <a 
                rel="noreferrer"
                target="_blank"
                href="https://github.com/Alecxz20/movies-react-js"
              >
                <button className={style.btn}>Github repo</button>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
