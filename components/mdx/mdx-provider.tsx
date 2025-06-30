import { MDXProvider } from '@mdx-js/react'

import React from 'react'

// Custom components for MDX content
const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="mt-8 mb-6 text-4xl font-bold" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-8 mb-4 text-3xl font-bold" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-6 mb-4 text-2xl font-bold" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="mt-6 mb-4 text-xl font-semibold" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 leading-relaxed" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-4 ml-6 list-disc" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-4 ml-6 list-decimal" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li className="mb-1" {...props} />,
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-blue-600 hover:underline" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="mb-4 overflow-x-auto rounded bg-gray-100 p-4 font-mono text-sm" {...props} />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className="mx-auto my-4 max-w-full rounded" {...props} alt={props.alt || ''} />
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="mb-4 overflow-x-auto">
      <table className="w-full border-collapse" {...props} />
    </div>
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th className="border border-gray-300 bg-gray-100 p-2 text-left" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
    <td className="border border-gray-300 p-2" {...props} />
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-6 border-gray-300" {...props} />
  ),
}

interface MDXContentProviderProps {
  children: React.ReactNode
}

export function MDXContentProvider({ children }: MDXContentProviderProps) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
