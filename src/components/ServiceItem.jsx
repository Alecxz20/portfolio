import style from './ServiceItem.module.css'

export default function ServiceItem({ item }) {
  const { icon, title, text } = item
  return (
    <div className={style.serviceItem}>
      <figure className={style.serviceItemIcon}>{icon}</figure>
      <div className={style.serviceDescription}>
        <h3 className={style.serviceItemTitle}>{title}</h3>
        <p className={style.serviceItemText}>{text}</p>
      </div>
    </div>
  )
}
