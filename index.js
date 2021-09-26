const cards = document.getElementById("cards");
const API = 'https://rickandmortyapi.com/api/character/';
const maxPageAPI = 34;
const apiPage = "?page=:page";
const characters = [];

const getDataApi = async (page) => {
  try {
    const { results } = await fetchData(`${API}${apiPage.replace(":page", `${page}`)}`);
    results.map((character) => {
      const card = createCard(character); //Create function createCard, is not exist yet
      cards.appendChild(card);
    });
  } catch (e) {
      console.error(e);
  }
};

function loadData(){
    for(let i=1; i<= maxPageAPI;i++){
        getDataApi(i);
    }
}

loadData();

const allCards = document.createDocumentFragment();


const createCard = (object)=>{
    const card = document.createElement('div');
    card.classList.add('oneCard');

    card.innerHTML = `
        <div class="card-img">
            <img src="${object.image}" class="fluid-img" alt="Picture of ${object.name}">
        <div>
        <div class="body-card">
            <h4>${object.name}</h4>
            <p>Origin: ${object.origin.name}</p>
            <p>Gender: ${object.gender}</p>
            <p>Specie: ${object.species}</p>
            <span class="${object.status.toLowerCase()}">${object.status}</span>
        </div>
    
    `;

    allCards.appendChild(card);

    return allCards;
}