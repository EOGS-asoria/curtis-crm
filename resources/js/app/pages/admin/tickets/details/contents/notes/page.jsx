import React from 'react'
import ContentNotesCommentSection from './sections/content-notes-comment-section'
import ContentNotesTextareaSection from './sections/content-notes-textarea-section'

export default function TicketsDetailsContentNotes() {
  return (
    <div>
      <ContentNotesTextareaSection />
      <ContentNotesCommentSection />
    </div>
  )
}
