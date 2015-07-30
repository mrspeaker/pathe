export default array => {
  let out = array.slice(0);
  let count = out.length;
  let rand, temp;
  while (count) {
    rand = Math.random() * count-- | 0;
    temp = out[count];
    out[count] = out[rand];
    out[rand] = temp;
  }
  return out;
};
