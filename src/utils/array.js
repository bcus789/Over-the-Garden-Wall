function shuffleArray(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function genArray(start, stop) {
  const arr = [];
  for (let i = start; i <= stop; i++) {
    arr.push(i);
  }

  return arr;
}

export { shuffleArray, genArray };
