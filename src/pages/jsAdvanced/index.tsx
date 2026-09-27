import React from 'react'
import { CourseHeader } from '../../widgets/course-header/ui/CourseHeader'

export const JsAdvancedPage: React.FC = () => {
  return (
    <main className="course-page">
      <CourseHeader />
      <section className="course-page__content">
        <p className="home-page__kicker">Продвинутый JavaScript</p>
        <h1>JS Advanced</h1>
        <p>Здесь будут продвинутые темы и практические задания.</p>
      </section>
    </main>
  )
}
