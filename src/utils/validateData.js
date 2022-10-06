export function validateLink(link) {
  if (link.match(/https?:\/\/[a-z0-9-]+\.[\S]*/i)) {
    return true;
  } else {
    return false;
  }
}