export interface CourseInterestSubmission {
  submissionKey: string

  name: string
  email: string

  ageRange: string
  sex: string

  professionalCourses: string[]
  technicalCourses: string[]

  otherProfessionalCourse: string
  otherTechnicalCourse: string

  preferredShifts: string[]

  weeklyFrequency: number

  preferredDays: string[]

  wantsCourseUpdates: boolean

  privacyAcknowledged: boolean
}

export type CourseInterestSaveStatus =
  | 'idle'
  | 'saving'
  | 'saved'
  | 'error'