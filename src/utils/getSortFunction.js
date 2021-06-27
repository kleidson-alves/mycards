function sortByTitle(a, b) {
  return a.title.toUpperCase() < b.title.toUpperCase() ? -1 : a.nome > b.nome ? 1 : 0;
}

function sortByColor(a, b) {
  return a.color < b.color ? -1 : a.nome > b.nome ? 1 : 0;

}

function sortByDate(a, b) {
  return a.created_at < b.created_at ? -1 : a.nome > b.nome ? 1 : 0;
}

export default function getSortFunction (filter) {
  if(filter === 'Título')
    return sortByTitle;
  else if(filter === 'Cor')
    return sortByColor;
  
    return sortByDate;
}
