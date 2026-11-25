function buildIndex(items) {
    const map = {}
    for (const item of items) {
        for (const tech of item.stack) {
            if (!map[tech]) {
                map[tech] = []
            }
            map[tech].push(item.page)
        }
    }

    const terms = Object.keys(map)
    .sort((a, b) => a.localeCompare(b))
    .map((name) => ({ name, pages: map[name] }))

    const groups = []
    for (const term of terms){
        const letter = term.name[0].toUpperCase()
        const last = groups[groups.length - 1]
        if (last && last.letter === letter) {
            last.terms.push(term)
        } else {
            groups.push({ letter, terms: [term] })
        }
    }
    return groups
    }
export default buildIndex