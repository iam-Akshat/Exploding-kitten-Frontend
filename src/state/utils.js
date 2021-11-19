const genRandomNum = (start = 0, end = 1) => {
    return Math.floor(start + Math.random() * end)
}

/**
 * 
 * @param {number} [n = 5] number of choices
 * @param {array} availableChoices array represnting available choices
 * @returns array
 */
const chooseNCardsOutOfMCards = (n=5, availableChoices = ['cat', 'diffuse', 'shuffle', 'exploding']) => {
    const chosenOnes = []
    for (let i = 1; i <= n; i++) {
        chosenOnes.push(availableChoices[genRandomNum(0,availableChoices.length)])
    }
    return chosenOnes
}
const emojiMap = {
    'cat':'😼',
    'diffuse':'🙅‍♂️',
    'shuffle':'🔀',
    'bomb':'💣'
}
export { chooseNCardsOutOfMCards, emojiMap }