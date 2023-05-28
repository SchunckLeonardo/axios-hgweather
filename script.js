const url = "https://api.hgbrasil.com/weather?format=json-cors&key=732957ac"
const formulario = document.querySelector('#formulario')
const divResultado = document.querySelector('.resultado')

formulario.addEventListener("submit", e => {
    e.preventDefault()

    const nomeCidade = e.target.nomeCidade.value
    const estadoCidade = e.target.estadoCidade.value
    
    axios.get(`${url}&city_name=${nomeCidade}, ${estadoCidade}`)
        .then(res => criarCard(res))
})

function criarCard(response) {
    let h2 = document.createElement('h2')
    let divData = document.createElement('div')
    let temperatura = response.data.results.temp
    let tempo = response.data.results.time
    let humidity = response.data.results.humidity
    let cidadeEstado = response.data.results.city

    h2.classList.add('titulos')
    divData.classList.add('infos')

    h2.innerText = cidadeEstado
    divData.appendChild(temperatura)
    divData.appendChild(tempo)
    divData.appendChild(humidity)

    divResultado.appendChild(h2)
    divResultado.appendChild(divData)
}