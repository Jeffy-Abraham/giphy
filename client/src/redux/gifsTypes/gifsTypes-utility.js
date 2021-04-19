export const addtoType = (array, data) => {
  var added = [...data];

  var chunks = [],
    i = 0,
    n = added.length;

  while (i < n) {
    chunks.push(added.slice(i, (i += 7)));
  }

  
  var transformed=[...chunks]
  return transformed;
};
