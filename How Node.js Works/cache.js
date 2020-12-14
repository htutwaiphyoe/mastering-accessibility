const now = Date.now();
console.log("Now" + now);
module.exports = () => {
  setTimeout(() => {
    console.log(now);
  }, 1000);
};
