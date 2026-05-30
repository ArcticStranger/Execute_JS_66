import { Link } from 'react-router-dom'
import type { CourseCard as CourseCardType } from '../../entities/course/course.types'

interface Props {
  card: CourseCardType
}

export const CourseCard = ({ card }: Props) => {
  return (
    <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-white">
      <Link to={card.path} className="border rounded-2x1 p-6">
        <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
      </Link>

      <div className="p-4">
        <h2 className="text-xl font-semibold text-black-500">{card.title}</h2>
      </div>
    </div>
  )
}
