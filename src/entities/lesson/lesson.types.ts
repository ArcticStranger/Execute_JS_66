export type LessonLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  level: LessonLevel;
  duration: number; // in minutes
  tags: string[];
  thumbnailUrl?: string;
}

