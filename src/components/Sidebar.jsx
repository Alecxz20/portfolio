import style from './Sidebar.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import { Link, animateScroll as scroll } from 'react-scroll'

export default function Sidebar({ setOpen, open }) {
  return (
    <div className={`${style.sidebar} ${open ? style.show : style.hide}`}>
      <div className={style.sidebarHeader}>
        <AiOutlineClose onClick={() => setOpen(false)} />
      </div>
      <ul className={style.links}>
        <a className={style.link} onClick={() => {
            scroll.scrollToTop()
            setOpen(false)
        }}>
          <li>Home</li>
        </a>
        <Link
          duration={500}
          offset={50}
          smooth={true}
          className={style.link}
          to="about"
          onClick={() => setOpen(false)}
        >
          <li>About</li>
        </Link>
        <Link
          duration={500}
          offset={50}
          smooth={true}
          className={style.link}
          to="service"
          onClick={() => setOpen(false)}
        >
          <li>What I do</li>
        </Link>
        <Link
          duration={500}
          offset={50}
          smooth={true}
          className={style.link}
          to="portfolio"
          onClick={() => setOpen(false)}
        >
          <li>Portfolio</li>
        </Link>
        <Link
          duration={500}
          offset={50}
          smooth={true}
          className={style.link}
          to="contact"
          onClick={() => setOpen(false)}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  )
}
