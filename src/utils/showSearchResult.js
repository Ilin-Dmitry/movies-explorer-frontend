export default function showSearchResult (array, key) {
  const shortFilmCheck = document.querySelector('.filtercheckbox__input').checked
  const searchedResultArray = array.filter((item) => {
    if (shortFilmCheck) { return (item.duration < 40) && item.nameRU.toLowerCase().includes(key.toLowerCase())}
    return item.nameRU.toLowerCase().includes(key.toLowerCase())
  })
  return searchedResultArray;
}