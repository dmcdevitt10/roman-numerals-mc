function romanNumeral(num){
    const conversionTable = [
        [1, 'I'],
        [5, 'V'],
        [10, 'X'],
        [50, 'L'],
        [100, 'C'],
        [500, 'D'],
        [1000, 'M']
    ]

    let finalAnswer = ''

    for(let i = conversionTable.length - 1; i >= 0; i--){
        while(num - conversionTable[i][0] >= 0){
            num = num - conversionTable[i][0]
            finalAnswer += conversionTable[i][1]
        }
    }
    return finalAnswer
}

console.log(romanNumeral(267))