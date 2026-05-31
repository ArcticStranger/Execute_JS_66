import React from 'react'
import { HomeButton } from '../../shared/ui/HomeButton'
import { useNavigate, useLocation } from 'react-router-dom'
import { CourseTabs } from '../../shared/ui/CourseTabs'

const tabs = [
  { key: '/htmlcss', label: 'HTML/CSS' },
  { key: '/jsbase', label: 'JS Base' },
  { key: '/jsadvanced', label: 'JS Advanced' },
]

export const HtmlCssPage: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div>
      <div className="flex items-start justify-between pt-[4vh] px-4">
        <HomeButton />
        <CourseTabs
          items={tabs}
          activeKey={location.pathname}
          onChange={(path) => navigate(path)}
        />
      </div>
      <h1>HTML/CSS Page</h1>
      <p>This is the HTML/CSS reference page.</p>
    </div>
  )
}

export default HtmlCssPage
