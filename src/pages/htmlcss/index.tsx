import React from 'react'
import { Flex, Steps } from 'antd'
import { CourseHeader } from '../../widgets/course-header/ui/CourseHeader'
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  LoadingOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons'

type LessonStatus = 'finished' | 'inProgress' | 'waiting' | 'blocked'

const statusIcons: Record<LessonStatus, React.ReactNode> = {
  finished: <CheckCircleOutlined />,
  inProgress: <LoadingOutlined spin />,
  waiting: <ClockCircleOutlined />,
  blocked: <CloseCircleOutlined />,
}

const statusToAntdStatus: Record<LessonStatus, 'finish' | 'process' | 'wait' | 'error'> = {
  finished: 'finish',
  inProgress: 'process',
  waiting: 'wait',
  blocked: 'error',
}

const lessons = [
  {
    title: 'Семантическая и доступная разметка',
    content: 'HTML structure, forms, accessibility',
    status: 'finished',
  },
  {
    title: 'Layout-системы: Flex, Grid и позиционирование',
    content: 'Flex, Grid, position, overflow',
    status: 'inProgress',
  },
  {
    title: 'Адаптивная верстка без боли',
    content: 'Media queries, clamp, responsive images',
    status: 'waiting',
  },
  {
    title: 'Каскад, специфичность и архитектура CSS',
    content: 'Specificity, variables, CSS organization',
    status: 'blocked',
  },
] satisfies {
  title: string
  content: string
  status: LessonStatus
}[]

const items = lessons.map((lesson) => ({
  title: <span className="text-white">{lesson.title}</span>,
  content: <span className="text-white">{lesson.content}</span>,
  status: statusToAntdStatus[lesson.status],
  icon: statusIcons[lesson.status],
}))

export const HtmlCssPage: React.FC = () => {
  return (
    <div>
      <CourseHeader />
      <h1>HTML/CSS Page</h1>
      <p>This is the HTML/CSS reference page.</p>

      <Flex>
        <div style={{ flex: 1 }}>
          <Steps className="course-steps" orientation="vertical" items={items} />
        </div>
      </Flex>
    </div>
  )
}

export default HtmlCssPage
