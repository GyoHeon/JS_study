const timer = {
  name: "Heropy!!",
  timeout: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  },
};
timer.timeout();
