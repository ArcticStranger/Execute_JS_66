import { CircleScene } from '../../shared/ui/CircleScene'
import { courseCards } from '../../entities/course/course.cards'
import { CourseCard } from '../../shared/ui/CourseCard'

export const HomePage = () => {
  return (
    <>
      <CircleScene />

      {/* hero */}

      <div className="grid grid-cols-3 gap-4 p-4">
        {courseCards.map((card) => (
          <CourseCard key={card.id} card={card} />
        ))}
      </div>
    </>
  )
}
