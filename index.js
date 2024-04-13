const key = "f4b52cc9d0a025802464c725b4a117b9"



async function findCity(cidade) {
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())
  putData(dados)
}

function putData(dados) {
  console.log(dados)
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
  document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
  document.querySelector(".temp2").innerHTML = dados.weather[0].description
  document.querySelector(".umid").innerHTML = dados.main.humidity +  "%" + " Umidade" 
  document.querySelector(".icone-info-tempo").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}


function clickButton() {
  const cidade = document.querySelector(".input-cidade").value
  findCity(cidade)

}

