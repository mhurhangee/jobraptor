import { cn } from '@/lib/utils'

import ReactMarkdown from 'react-markdown'

export const Markdown = ({ children }: { children: string }) => {
  return (
    <div className={cn('prose prose-sm prose-p:text-black')}>
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  )
}
