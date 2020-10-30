/* ---------------------------------- VARS ---------------------------------- */

// Btns
const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");
const resetBtn = document.getElementById("reset-btn");

// User input form
const userInputTitle = document.getElementById("title");
const userInputExtraName = document.getElementById("extra-name");
const userInputExtraValue = document.getElementById("extra-value");

// Movies container
const movies = [];
const movieList = document.getElementById("movie-list");

/* -------------------------------- FUNCTIONS ------------------------------- */

// Clear inputs
const clearInputs = function () {
  userInputTitle.value = "";
  userInputExtraName.value = "";
  userInputExtraValue.value = "";
};

// Render movie
const renderMovies = function (id, title, addTitle, addValue) {
  // Switch visible class
  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  // Render and insert html
  const movieEl = document.createElement("li");
  movieEl.setAttribute("id", `${id}`);
  movieEl.innerHTML = `
  <h2>${title}</h2>
  <h5>${addTitle}</h5>
  <p>${addValue}</p>
  <button onclick="removeItem(${id})">Delete</button>
  `;
  movieList.prepend(movieEl);
};

// Remove movie
const removeItem = function (id) {
  // Remove from movies array
  const idx = movies.findIndex((movie) => movie.id === id);
  movies.splice(idx, 1);

  // Remove from html
  const el = document.getElementById(`${id}`);
  el.remove();

  // Switch visible class
  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
};

/* -------------------------------- HANDLERS -------------------------------- */

const addMovieHandler = function () {
  // Get values
  const title = userInputTitle.value.trim();
  const extraName = userInputExtraName.value.trim();
  const extraValue = userInputExtraValue.value.trim();

  // Chech if all the inputs has values
  if (title === "" || extraName === "" || extraValue === "") {
    console.log(title, extraName, extraValue);
    return;
  }

  // Generate id based on utc
  const generateId = function () {
    const id = new Date().getTime() - 1604050112716;
    return id;
  };

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: generateId(),
  };

  // Unshift new movie into the movie array
  movies.unshift(newMovie);

  // Render movie on the display
  const curMovie = movies[0];
  renderMovies(
    curMovie.id,
    curMovie.info.title,
    Object.entries(curMovie.info)[1][0],
    Object.entries(curMovie.info)[1][1]
  );

  // Clear the inputs
  clearInputs();

  // Console the movies array (test)
  console.log(movies);
};

// Search filter by title
const searchMovieHandler = function () {
  const filterTerm = document
    .getElementById("filter-title")
    .value.toLowerCase();
  const filteredMovies = movies.filter((movie) => {
    let title = movie.info.title.toLowerCase();
    return title.includes(filterTerm);
  });
  reRender(filteredMovies);
};

// Rerender html
const reRender = function (renderArr) {
  movieList.innerHTML = "";

  for (const i of renderArr) {
    renderMovies(
      i.id,
      i.info.title,
      Object.entries(i.info)[1][0],
      Object.entries(i.info)[1][1]
    );
  }

  // Clear input
  document.getElementById("filter-title").value = '';

  // Switch visible class
  if (renderArr.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }
};

/* -------------------------------- LISTENERS ------------------------------- */

// Add movie
addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
resetBtn.addEventListener("click", () => {
  reRender(movies);
});

// Basic reset
reRender(movies);
