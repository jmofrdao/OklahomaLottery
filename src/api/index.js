const BASE = 'https://www.lottery.ok.gov/plays.json'

//  export async function getGames() {
//     try {
//       const response = await fetch(`${BASE}`, {
//         method: 'GET',
//         headers: {
//             "Content-Type": "application/json",
//           'Access-Control-Allow-Origin': '*'
//         },
//       });
  
//       if (!response.ok) {
//         throw new Error(`Error! status: ${response.status}`);
//       }
  
//       const result = await response.json();
//       return result;
//     } catch (err) {
//       console.log(err);
//     }
//   }

export async function getGames () {
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.lottery.ok.gov/plays.json')}`)
    const result = await response.json()
    return result
}