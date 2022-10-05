

export async function getGames () {
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.lottery.ok.gov/plays.json')}`)
    const result = await response.json()
    return result
}
