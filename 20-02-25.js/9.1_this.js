let person = {
  greeting: "Hello",
  name: ["Uday", "Sakib", "Mushfiq"],
  showName: function () {
    this.name.forEach(function (el) {
      console.log(this);
    }, person);
  },
};

person.showName();
