const API_KEY = "25c991d6";

const form = document.getElementById("searchForm");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const movieName = document.getElementById("movieName").value;
    const releaseYear = document.getElementById("releaseYear").value;

    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}&y=${releaseYear}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            resultsDiv.innerHTML = "";

            if (data.Search) {
                data.Search.forEach((movie) => {
                    const movieCard = `
                        <div class="movie-card">
                            <h3>${movie.Title}</h3>
                            <p>Year: ${movie.Year}</p>
                            <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200"}" alt="${movie.Title}">
                        </div>
                    `;
                    resultsDiv.innerHTML += movieCard;
                });
            } else {
                resultsDiv.innerHTML = "<p>No results found.</p>";
            }
        });
});
