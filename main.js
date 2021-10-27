function timeout(callback) {
  setTimeout(() => {
    console.log("Heropy!");
    callback();
  }, 1000);
}
timeout(() => {
  console.log("Done!");
});
