export interface IssueParagraphType {
  content: string
  isSelectable: boolean
}

export interface ReferenceByStandType {
  firstStand: string
  firstReferences: string[]
  secondStand: string
  secondReferences: string[]
}

export interface ReprocessedIssueType {
  title: string
  imageUrl: string
  caption: string
  references: ReferenceByStandType
  category: string
  paragraphs: IssueParagraphType[]
  stands: string[]
}
