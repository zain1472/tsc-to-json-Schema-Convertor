import { DateTime } from 'luxon'
import { FeedbackType } from 'Contracts/enums/FeedbackEnum'

/**
 * @property {number} page
 * @property {number} perPage
 * @property {string} searchQuery
 * @property {date} startDate
 * @property {date} endDate
 * @property {string} feedbackType
 * @property {number} id
 */

export interface GetAllFeedbacks {
  page: number
  perPage: number
  searchQuery?: string
  calendarRefQuery?: string
  startDate?: DateTime
  endDate?: DateTime
  feedbackType?: FeedbackType
}

export interface CreateJiraIssue {
  id: number
  topic: string
  label: string
  description?: string
}

export interface MoveTicketToEpic {
  epicId: number | string
  issueId: number | string
}
