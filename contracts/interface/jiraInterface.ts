export interface CreateJiraTicket {
  topic: string
  description: string | undefined
  label: string
}

export interface MoveTicketToEpic {
  issueId: string | number
  epicId: string | number
}
