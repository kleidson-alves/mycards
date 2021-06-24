export function sortByTitle(a, b) {
  if(a.title > b.title){
    return true;
  }
  return false;
}

export function sortByColor(a, b) {
  if(a.color > b.color){
    return true;
  }
  return false;
}

export function sortByDate(a, b) {
  if(a.created_at > b.created_at){
    return true;
  }
  return false;
}

