'use client'

export const ContentReviewForm = ({ data }: { data: unknown }) => {
  return (
    <div>
      <h2>Content Review</h2>
      <p>Review the extracted content</p>
      <pre className="text-left whitespace-pre-wrap text-black">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}
