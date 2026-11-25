import Page from './Page'

function SkillsPage({ groups }) {
  return (
    <Page>
      <p className="text-xs leading-tight uppercase tracking-widest text-zinc-500">Chapter III</p>
      <h2 className="text-xs leading-tight font-bold mb-2">Index</h2>

      <div className="columns-2 gap-8 text-sm">
        {groups.map((group) => (
            <div key={group.letter} className="break-inside-avoid mb-4">
              <h3 className="font-bold text-base">{group.letter}</h3>

            {group.terms.map((term) => (
              <div key={term.name} className="flex items-baseline gap-2">
                <span>{term.name}</span>
                <span className="flex-1 border-b border-dotted border-zinc-400"></span>
                <span>{term.pages.map((p) => p + 1).join(", ")}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Page>
  )
}

export default SkillsPage