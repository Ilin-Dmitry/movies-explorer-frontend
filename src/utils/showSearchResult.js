import { SHORT_FILM_MAX_DURATION } from "./config"

export default function showSearchResult (array, key) {
  const shortFilmCheck = document.querySelector('.filtercheckbox__input').checked
  const searchedResultArray = array.filter((item) => {
    if (shortFilmCheck) { return (item.duration < SHORT_FILM_MAX_DURATION) && item.nameRU.toLowerCase().includes(key.toLowerCase())}
    return item.nameRU.toLowerCase().includes(key.toLowerCase())
  })
  return searchedResultArray;
}