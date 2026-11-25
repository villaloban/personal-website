import Page from './Page'

const numerals = ["I", "II", "III", "IV", "V", "VI"]

function TableOfContents({ chapters, onNavigate }) {
    return (
        <Page>
            <h2 className="text-3xl font-bold mb-4 pb-3 border-b-2 border-amber-600/60">Table of Contents</h2>
            <ul className="space-y-18">
                {chapters.map((chapter, index) => (
                    <li key={chapter.title}>
                        <button 
                        onClick={() => onNavigate(chapter.page)} 
                        disabled={chapter.page === null}
                        className="w-full flex items-baseline gap-2 text-left hover:text-zinc-500 disabled:opacity-40"
                        >
                        <span>{numerals[index]}. {chapter.title}</span>
                        <span className="flex-1 border-b border-dotted border-zinc-400"></span>
                        <span>{chapter.page == null ? "-" : chapter.page + 1}</span>
                    </button>
                    </li>
                ))}
            </ul>
        </Page>
    )
}

export default TableOfContents