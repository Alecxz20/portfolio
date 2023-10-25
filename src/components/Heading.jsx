import style from './Heading.module.css'

export default function Heading({ front, back, color = "white" }) {
  return (
    <div className={style.heading}>
      <h2 className={style.frontWord}>{front}</h2>
      <h3 style={{color: color}} className={style.backWord}>{back}</h3>
    </div>
  )
}
