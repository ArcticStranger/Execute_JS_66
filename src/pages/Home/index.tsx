import { CircleScene } from '../../shared/ui/CircleScene'
import { courseCards } from '../../entities/course/course.cards'
import { CourseCard } from '../../entities/course/ui/CourseCard'

export const HomePage = () => {
  return (
    <>
      <CircleScene />

      <main className="home-page">
        <section className="home-page__intro" aria-labelledby="home-title">
          <p className="home-page__kicker">Практика веб-разработки</p>
          <h1 id="home-title">Курс-обучалка по JS/TS</h1>
          <p className="home-page__lead">
            Выберите блок и продолжайте обучение с того места, где остановились.
          </p>
          <p className="home-page__contact">TG: @AtlasovT_Marlysma</p>
        </section>
        <section className="course-grid" aria-label="Разделы курса">
          {courseCards.map((card) => (
            <CourseCard key={card.id} card={card} />
          ))}
        </section>
      </main>
    </>
  )
}
