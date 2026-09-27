import React from 'react'
import { CourseHeader } from '../../widgets/course-header/ui/CourseHeader'

export const JsBasePage: React.FC = () => {
  return (
    <main className="course-page">
      <CourseHeader />
      <section className="course-page__content">
        <p className="home-page__kicker">Основы JavaScript</p>
        <h1>JS Base</h1>
        <p>Здесь будут базовые материалы и упражнения по JavaScript.</p>
      </section>
    </main>
  )
}
