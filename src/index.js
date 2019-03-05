/**
 * @param preferences - an preferencesay of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0
    for (let i = 0; i < preferences.length; i++) {
    const firstLover = preferences[i];
    const secondLover = preferences[firstLover - 1];
    const thirdLover = preferences[secondLover - 1];
    if (i === thirdLover - 1) count++;
  }
  return Math.floor(count / 3);
};
