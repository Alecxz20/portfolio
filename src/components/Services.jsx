import style from './Services.module.css'
import Heading from './Heading'
import serviceData from '../utils/serviceData';
import ServiceItem from './ServiceItem';
import Reveal from "./Reveal"

export default function Services() {
  return (
    <div id='service' className={style.services}>
      <Heading front="What I Do" back="Services" color="#F3F4F5" />
      <div className={style.servicesContent}>
        {serviceData.map((item, index) => (
          <Reveal thisWidth='100%' key={index}>
            <ServiceItem item={item} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
