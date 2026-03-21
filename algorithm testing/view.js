updateBubble()
function updateBubble() {
    bubble.innerHTML = /*HTML*/`
    <button onclick="sort(numbers)">sort</button>
    <button onclick="fisherYatesShuffle()">shuffle</button>
    ${visualizeSort()}
`
}