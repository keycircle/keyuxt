const sluggify = (words) => {
  return words
    .toLowerCase()
    .split(' ')
    .map(word => word.trim())
    .join('-');
}

module.exports = {
  sluggify,
}
