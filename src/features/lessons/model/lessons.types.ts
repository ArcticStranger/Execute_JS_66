import type { Lesson } from '../../entities/lesson/lesson.types';

export type LessonsStatus = 'idle' | 'loading' | 'success' | 'error';

export interface LessonsState {
  lessons: Lesson[];
  status: LessonsStatus;
  error: string | null;
  selectedLessonId: string | null;
}

export interface LessonsFilters {
  level?: Lesson['level'];
  searchQuery?: string;
}
