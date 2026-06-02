import { CourseNavigationTabs } from '../../../features/course-navigation/ui/CourseNavigationTabs'
import { HomeButton } from '../../../shared/ui/HomeButton'

export const CourseHeader = () => {
  return (
    <header className="flex items-start justify-between pt-[4vh] px-4">
      <HomeButton />
      <CourseNavigationTabs />
    </header>
  )
}
