const url = "https://api.hgbrasil.com/weather?format=json-cors&key=732957ac"
const formulario = document.querySelector('#formulario')
const divResultado = document.querySelector('.resultado')

formulario.addEventListener("submit", e => {
    e.preventDefault()

    const nomeCidade = e.target.nomeCidade.value
    const estadoCidade = e.target.estadoCidade.value

    divResultado.innerHTML = "";

    axios.get(`${url}&city_name=${nomeCidade}, ${estadoCidade}`)
        .then(res => criarCard(res))
        .catch(e => tratarErro(e))

    e.target.nomeCidade.value = ""
    e.target.estadoCidade.value = ""
})

function criarCard(response) {
    let h2 = document.createElement('h2');
    let divData = document.createElement('div');

    let resultados = response.data.results;
    console.log(resultados);

    let temperatura = resultados.temp;
    let tempo = resultados.time;
    let humidity = resultados.humidity;
    let cidadeEstado = resultados.city;

    h2.classList.add('titulos');
    divData.classList.add('infos');

    h2.innerText = cidadeEstado;

    let pTemperatura = document.createElement('p');
    pTemperatura.innerText = `Temperatura: ${temperatura}°C`;

    let pTempo = document.createElement('p');
    pTempo.innerText = `Tempo: ${tempo}`;

    let pHumidity = document.createElement('p');
    pHumidity.innerText = `Umidade: ${humidity}%`;

    divData.appendChild(pTemperatura);
    divData.appendChild(pTempo);
    divData.appendChild(pHumidity);

    divResultado.appendChild(h2);
    divResultado.appendChild(divData);
}

function tratarErro(erro) {
    let h3 = document.createElement('h3')
    h3.innerText = erro

    divResultado.appendChild(h3)
}