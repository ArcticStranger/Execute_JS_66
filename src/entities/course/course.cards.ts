import { cardImages } from '../../assets/cards/index.ts'
import type { CourseCard } from './course.types.ts'

export const courseCards: CourseCard[] = [
  {
    id: 1,
    title: 'HTML/CSS',
    image: cardImages.htmlcss,
    path: '/htmlcss',
  },
  {
    id: 2,
    title: 'JS_Base',
    image: cardImages.jsBase,
    path: '/jsbase',
  },
  {
    id: 3,
    title: 'JS_Advanced',
    image: cardImages.jsAdvanced,
    path: '/jsadvanced',
  },
]
