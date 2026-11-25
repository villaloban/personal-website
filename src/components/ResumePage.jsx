import Page from './Page'
import { FaExternalLinkAlt, FaDownload } from 'react-icons/fa'

function ResumePage() {
  return (
    <Page>
      <p className="text-sm uppercase tracking-widest text-zinc-500">Chapter IV</p>
      <h2 className="text-2xl font-bold">Resume</h2>
      <p className="mt-6">
        Here's my full resume. You can preview it below, open it in a new tab, or download a copy.
      </p>

      <iframe src="/resume.pdf" className="flex-1 min-h-0 mt-6 w-full border rounded" title="Resume preview" />

      <div className="mt-6 flex justify-center gap-6">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-zinc-500 transition-colors">
          <FaExternalLinkAlt />
          View
        </a>
        <a href="/resume.pdf" download className="flex items-center gap-2 hover:text-zinc-500 transition-colors">
          <FaDownload />
          Download
        </a>
      </div>
    </Page>
  )
}

export default ResumePage
