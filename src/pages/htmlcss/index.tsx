import React from 'react'
import { HomeButton } from '../../shared/ui/HomeButton'
import { CourseNavigationTabs } from '../../features/course-navigation/ui/CourseNavigationTabs'

export const HtmlCssPage: React.FC = () => {
  return (
    <div>
      <div className="flex items-start justify-between pt-[4vh] px-4">
        <HomeButton />
        <CourseNavigationTabs />
      </div>
      <h1>HTML/CSS Page</h1>
      <p>This is the HTML/CSS reference page.</p>
    </div>
  )
}

export default HtmlCssPage
