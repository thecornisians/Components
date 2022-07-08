// const labels = document.querySelectorAll('label')

// labels.forEach(label => {
//     label.innerHTML = label.innerText
//         .split('')
//         .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
//         .join('')
// })

const labels = document.querySelectorAll('label')

labels.forEach(label => {
    label.innerHTML = label.innerText.split('').map((letter, index) =>`<span style="transition-delay:${index * 50}ms">${letter}</span>`).join('')
})