import Heading from './Heading'
import style from './Portfolio.module.css'
import Reveal from './Reveal'
import project1 from '../assets/project1-1.png'
import project2 from '../assets/project2.png'

export default function Portfolio() {
  return (
    <section className={style.portfolio}>
      <Heading front="My Work" back="Portfolio" color="#EEF0F1" />
      <div className={style.portfolioContent}>
        <Reveal>
          <div className={style.card}>
            <h2 className={style.projectTitle}>Jewelry Store</h2>
            <img className={style.projectImg} src={project1} alt="" />
            <div className={style.portfolioBtns}>
              <button className={style.btn}>Live website</button>
              <button className={style.btn}>Github repo</button>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className={style.card}>
            <h2 className={style.projectTitle}>Popular movies</h2>
            <img className={style.projectImg} src={project2} alt="" />
            <div className={style.portfolioBtns}>
              <button className={style.btn}>Live website</button>
              <button className={style.btn}>Github repo</button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
