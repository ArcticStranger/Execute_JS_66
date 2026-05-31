import { FontColorsOutlined } from '@ant-design/icons'
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import React from 'react'

const onChange = (key: string) => {
  console.log(key)
}

const items: TabsProps['items'] = [
  {
    key: '1',
    label: <span className="text-white">HTML/CSS</span>,
    children: <span className="text-white">HTML/CSS lessons</span>,
  },
  {
    key: '2',
    label: <span className="text-white">JS Base</span>,
    children: <span className="text-white">Base Level lessons</span>,
  },
  {
    key: '3',
    label: <span className="text-white">JS Advanced</span>,
    children: <span className="text-white">Advanced level lessons</span>,
  },
]

const CourseTabs: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

export default CourseTabs
