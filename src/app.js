import React, {useState, useEffect} from 'react'
import { getGames } from "./api"

const App = () => {
    const [gameData, setGameData] = useState([])

    async function fetchTheData () {
        const theData = await getGames()
        console.log(theData)
        let contentStore = theData.contents
   console.log(contentStore)
   
   let newArr = JSON.parse(contentStore)
console.log(typeof newArr)
console.log(newArr)


let dataMap = newArr.map((element)=> element.games_played)
console.log(dataMap)
let brandArr = []
dataMap.forEach((c) => {
    if (!brandArr.includes(c)) {
        brandArr.push(c);
        
    }
});


setGameData(brandArr)
        
    }

    useEffect(()=> {
        fetchTheData()
    }, [])

    

    function getCombination(array, value) {
        var count = 0;
        array.forEach((v) => (v === value && count++));
        return count;
    }

    


    return (
        <div>

        </div>
    )
}

export default App