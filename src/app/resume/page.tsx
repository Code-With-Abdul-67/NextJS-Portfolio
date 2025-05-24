'use client'

import { FaDownload } from 'react-icons/fa'

export default function Resume() {
  return (
    <div className="container max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-primary">
        Resume
      </h1>

      <div className="flex justify-center mb-6">
        <a
          href="/cv.pdf"
          download
          className="btn btn-primary flex items-center gap-2 hover:border hover:border-black hover:rounded"
        >
          <FaDownload />
          Download CV
        </a>
      </div>

      <div className="rounded-lg shadow-md overflow-hidden border border-black/10 hover:border-black transition bg-white dark:bg-[#3b185f]/50">
        <iframe
          src="/cv.pdf"
          className="w-full h-[80vh] rounded-md"
          title="CV PDF"
        />
      </div>
    </div>
  )
}
