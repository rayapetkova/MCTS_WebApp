export function extractGenresAndCast(items) {
    let extractedItems = []

    for (let item of items) {
        extractedItems.push(item.name)
    }

    return extractedItems.join(', ')
}

export function exctractDirsAndWriters(crew, match) {
    let extractedCrew = []

    for (let person of crew) {
        if (person.job.includes(match)) {
            extractedCrew.push(person.original_name)
        }
    }

    return extractedCrew.join(', ')
}