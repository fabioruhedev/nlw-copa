function createGame(player1, hour, player2) {
  return `
  <li>
              <img id="flag" src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
              <strong>${hour}</strong>
              <img id="flag" src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />
            </li>
  
  `
}
let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
  
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "21/11",
    "segunda",
    createGame("senegal", "13:00", "netherlands") +
      createGame("usa", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "saudiarabia") +
      createGame("mexico", "13:00", "poland")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("southkorea", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguai") +
      createGame("cameroon", "16:00", "brazil")
  )
