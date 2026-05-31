import { Tabs } from 'antd'
import type { TabsProps } from 'antd'

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
  const tabItems: TabsProps['items'] = items.map((item) => ({
    key: item.key,
    label: <span className="text-white">{item.label}</span>,
  }))

  return <Tabs activeKey={activeKey} items={tabItems} onChange={onChange} />
}
