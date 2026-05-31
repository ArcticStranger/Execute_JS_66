import { CourseTabs } from '../../../shared/ui/CourseTabs'
import { useCourseNavigation } from '../model/useCourseNavigation'

export const CourseNavigationTabs = () => {
  const { tabs, activeKey, handleTabChange } = useCourseNavigation()

  return <CourseTabs items={tabs} activeKey={activeKey} onChange={handleTabChange} />
}
