import { CourseNavigationTabs } from '../../../features/course-navigation/ui/CourseNavigationTabs'
import { HomeButton } from '../../../shared/ui/HomeButton'

export const CourseHeader = () => {
  return (
    <header className="course-header">
      <HomeButton />
      <CourseNavigationTabs />
    </header>
  )
}
