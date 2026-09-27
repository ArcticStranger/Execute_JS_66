type CourseTab = {
  key: string
  label: string
}

type CourseTabsProps = {
  items: CourseTab[]
  activeKey: string
  onChange: (key: string) => void
}
export const CourseTabs = ({ items, activeKey, onChange }: CourseTabsProps) => {
  return (
    <nav className="course-tabs" aria-label="Навигация по курсам">
      {items.map((item) => (
        <button
          key={item.key}
          type="button"
          className={
            item.key === activeKey
              ? 'course-tabs__item course-tabs__item--active'
              : 'course-tabs__item'
          }
          aria-current={item.key === activeKey ? 'page' : undefined}
          onClick={() => onChange(item.key)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}
