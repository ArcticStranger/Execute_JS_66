import { CircleScene } from '../../shared/ui/CircleScene'
import { courseCards } from '../../entities/course/course.cards'
import { CourseCard } from '../../entities/course/ui/CourseCard'

export const HomePage = () => {
  return (
    <>
      <CircleScene />

      <main className="relative z-10 pt-[58vh] pb-12">
        <h1>Курс-обучалка по JS/TS</h1>

        <div className="grid grid-cols-3 gap-4 p-4">
          {courseCards.map((card) => (
            <CourseCard key={card.id} card={card} />
          ))}
        </div>
      </main>
    </>
  )
}
