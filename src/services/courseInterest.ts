import { supabase } from '../lib/supabase'

import type {
  CourseInterestSubmission,
} from '../types/courseInterest'

function normalizeOptionalText(
  value: string,
): string | null {
  const normalized =
    value.trim()

  return normalized.length > 0
    ? normalized
    : null
}

export async function saveCourseInterest(
  submission: CourseInterestSubmission,
): Promise<void> {
  const { error } =
    await supabase.rpc(
      'submit_course_interest',
      {
        p_submission_key:
          submission.submissionKey,

        p_name:
          normalizeOptionalText(
            submission.name,
          ),

        p_email:
          normalizeOptionalText(
            submission.email,
          ),

        p_age_range:
          submission.ageRange,

        p_sex:
          submission.sex,

        p_professional_courses:
          submission.professionalCourses,

        p_technical_courses:
          submission.technicalCourses,

        p_other_professional_course:
          normalizeOptionalText(
            submission.otherProfessionalCourse,
          ),

        p_other_technical_course:
          normalizeOptionalText(
            submission.otherTechnicalCourse,
          ),

        p_preferred_shifts:
          submission.preferredShifts,

        p_weekly_frequency:
          submission.weeklyFrequency,

        p_preferred_days:
          submission.preferredDays,

        p_wants_course_updates:
          submission.wantsCourseUpdates,

        p_privacy_acknowledged:
          submission.privacyAcknowledged,
      },
    )

  if (error) {
    throw new Error(
      `Não foi possível enviar suas respostas: ${error.message}`,
    )
  }
}