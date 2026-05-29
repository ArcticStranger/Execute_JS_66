import type { Lesson } from '../../entities/lesson/lesson.types'
import type { LessonsState } from './lessons.types'

const initialState: LessonsState = {
  lessons: [],
  status: 'idle',
  error: null,
  selectedLessonId: null,
}

export const lessonsReducer = (
  state: LessonsState = initialState,
  action: {
    type: string
    payload?: unknown
  }
): LessonsState => {
  switch (action.type) {
    case 'lessons/setLessons': {
      const lessons = action.payload as Lesson[]
      return { ...state, lessons, status: 'success' as const, error: null }
    }
    case 'lessons/setLoading': {
      return { ...state, status: 'loading' as const }
    }
    case 'lessons/setError': {
      const error = action.payload as string
      return { ...state, status: 'error' as const, error }
    }
    case 'lessons/selectLesson': {
      const selectedLessonId = action.payload as string | null
      return { ...state, selectedLessonId }
    }
    default:
      return state
  }
}
