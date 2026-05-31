import { useNavigate, useLocation } from 'react-router-dom'

export const courseTabs = [
  { key: '/htmlcss', label: 'HTML/CSS' },
  { key: '/jsbase', label: 'JS Base' },
  { key: '/jsadvanced', label: 'JS Advanced' },
]

export const useCourseNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const activeKey = location.pathname

  const handleTabChange = (key: string) => {
    navigate(key)
  }

  return {
    tabs: courseTabs,
    activeKey,
    handleTabChange,
  }
}
