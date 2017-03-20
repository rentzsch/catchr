module.exports = function catchr(f, defaultValue) {
  try {
    return [f(), null];
  } catch (ex) {
    return [defaultValue, ex];
  }
};
