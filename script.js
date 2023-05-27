const url = "https://api.hgbrasil.com/weather?format=json-cors&key=732957ac"
const formulario = document.querySelector('#formulario')
const divResultado = document.querySelector('.resultado')

formulario.addEventListener("submit", e => {
    e.preventDefault()

    const nomeCidade = e.target.nomeCidade.value
    
    axios.get(url)
        .then(res => console.log(res))
})