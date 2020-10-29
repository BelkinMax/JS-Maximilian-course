/* VARS */
const addMovieModal = document.getElementById('add-modal');
const startAddMovieBtn = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieBtn = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');
const movies = [];

/* FUNCTIONS */
const updateUi = function() {
  if (movies.length !== 0) {
    entryTextSection.style.display = 'none';
  } else {
    entryTextSection.style.display = 'block';
  }
}

const renderNewMovieElement = function(id, title, imageUrl, rating) {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id))
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
}

const toggleBackdrop = function() {
  backdrop.classList.toggle('visible');
}

const closeMovieModal = function() {
  addMovieModal.classList.remove('visible');
}

const showMovieModal = function() {
  addMovieModal.classList.add('visible');
  toggleBackdrop();
}

const clearMovieInputs = function() {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
}

const deleteMovie = function(movieId) {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }

  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
}

const cancelMovieDelitionModal = function() {
  toggleBackdrop();
  deleteMovieModal.classList.remove('visible');
}


/* HANDLERS */
const cancelAddMovieHandler = function() {
  closeMovieModal();
  clearMovieInputs()
}

const addMovieHandler = function() {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  const curDate = new Date();
  const idValue =
    curDate.getDay().toString() +
    curDate.getMonth().toString() +
    curDate.getFullYear().toString() +
    curDate.getHours().toString() +
    curDate.getMinutes().toString() +
    curDate.getSeconds().toString()
  ;

  if(
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Invalid input')
  }

  const newMovie = {
    id: idValue,
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  }

  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInputs();
  renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
  updateUi();
}

const deleteMovieHandler = function(movieId) {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();
  //deleteMovie(movieId);
}

const backdropClickHandler = function() {
  closeMovieModal();
  cancelMovieDelitionModal();
}


/* LISTENERS */
startAddMovieBtn.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieBtn.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieBtn.addEventListener('click', addMovieHandler)