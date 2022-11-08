const x = {
  name: "tayyab",
  role: "JS developer",
  exp: 30,
  show: function () {
    console.log(this.name, this.exp);
    const data = () => {
      console.log(this);
    };
    data();
  },
};
x.show();
