import React from 'react'
import { HomeButton } from '../../shared/ui/HomeButton'
import { CourseNavigationTabs } from '../../features/course-navigation/ui/CourseNavigationTabs'

export const JsBasePage: React.FC = () => {
  return (
    <div>
      <div className="flex items-start justify-between pt-[4vh] px-4">
        <HomeButton />
        <CourseNavigationTabs />
      </div>
      <h1>This is JS Base page</h1>
      <p>and This is a js base reference page</p>
    </div>
  )
}
