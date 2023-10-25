import style from './Header.module.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


export default function Header() {
  return (
    <header className={style.container}>
      <div className={style.header}>
        <h2 className={style.logo}>{'<>Alex</>'}</h2>
        <ul className={style.links}>
          <a className={style.link} href="#">
            <li>Home</li>
          </a>
          <a className={style.link} href="#">
            <li>About</li>
          </a>
          <a className={style.link} href="#">
            <li>What I do</li>
          </a>
          <a className={style.link} href="#">
            <li>Portfolio</li>
          </a>
          <a className={style.link} href="#">
            <li>Contact</li>
          </a>
        </ul>
        <button className={style.hireMeBtn}>
          <span>Hire Me</span>
          <MdKeyboardDoubleArrowRight/>
        </button>
      </div>
    </header>
  )
}
