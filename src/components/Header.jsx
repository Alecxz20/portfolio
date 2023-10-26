import style from './Header.module.css'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link, animateScroll as scroll } from 'react-scroll'

export default function Header({setOpen}) {
  return (
    <header className={style.container}>
      <div className={style.header}>
        <h2 className={style.logo}>{'<>Alex</>'}</h2>
        <ul className={style.links}>
          <a className={style.link} onClick={() => scroll.scrollToTop()}>
            <li>Home</li>
          </a>
          <Link
            duration={500}
            offset={50}
            smooth={true}
            className={style.link}
            to="about"
          >
            <li>About</li>
          </Link>
          <Link
            duration={500}
            offset={50}
            smooth={true}
            className={style.link}
            to="service"
          >
            <li>What I do</li>
          </Link>
          <Link
            duration={500}
            offset={50}
            smooth={true}
            className={style.link}
            to="portfolio"
          >
            <li>Portfolio</li>
          </Link>
        </ul>
        <Link
          to="contact"
          duration={500}
          offset={50}
          smooth={true}
          className={style.hireMeBtn}
        >
          <span>Hire Me</span>
          <MdKeyboardDoubleArrowRight />
        </Link>
        <GiHamburgerMenu onClick={() => setOpen(true)} className={style.hamMenuIcon} />
      </div>
    </header>
  )
}
