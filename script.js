const url = "https://api.hgbrasil.com/weather"
const formulario = document.querySelector('#formulario')
const divResultado = document.querySelector('.resultado')

formulario.addEventListener("submit", e => {
    e.preventDefault()

    const nomeCidade = e.target.nomeCidade.value
    
    axios.get(url)
        .then(res => res.data)
        .then(console.log)
})