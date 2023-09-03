function generateSVG (response) {
    return `<svg width='300' height='200'>
    ${response.shape}
    <text x="150" y="100" text-anchor="middle" alignment-baseline="middle" fill=${response.textColor}>${response.text}</text>
    </svg>`
}

module.exports = generateSVG;