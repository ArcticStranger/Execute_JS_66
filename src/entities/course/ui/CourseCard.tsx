import { Link } from 'react-router-dom'
import type { CourseCard as CourseCardType } from '../course.types'

interface Props {
  card: CourseCardType
}

export const CourseCard = ({ card }: Props) => {
  return (
    <Link to={card.path} className="course-card" aria-label={`Открыть курс ${card.title}`}>
      <img src={card.image} alt="" className="course-card__image" />
      <span className="course-card__content">
        <span className="course-card__eyebrow">Учебный блок</span>
        <span className="course-card__title">{card.title}</span>
        <span className="course-card__action">
          Открыть курс <span aria-hidden="true">→</span>
        </span>
      </span>
    </Link>
  )
}
