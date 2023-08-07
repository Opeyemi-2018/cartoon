let apiContainer = document.querySelector(".api-container");

function getApiData() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((post) => {
        apiContainer.innerHTML += `
        <div id="Api-output">
           <div class="img">
              <img src="${post.image}">
           </div>
            <div class="info-div">
              <h2> Name: ${post.name}</h2>
              <h3> Location: ${post.location.name}</h3>
              <h4>No of movies: ${post.episode.length}</h4>
            </div>
          </div>
        `;
      });
    });
}

getApiData();
