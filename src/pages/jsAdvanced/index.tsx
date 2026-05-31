import React from 'react'
import { HomeButton } from '../../shared/ui/HomeButton'
import { CourseNavigationTabs } from '../../features/course-navigation/ui/CourseNavigationTabs'

export const JsAdvancedPage: React.FC = () => {
  return (
    <div>
      <div className="flex items-start justify-between pt-[4vh] px-4">
        <HomeButton />
        <CourseNavigationTabs />
      </div>
      <h1>This is JS Advanced Page</h1>
      <p>and This is JS Advanced reference content</p>
    </div>
  )
}
