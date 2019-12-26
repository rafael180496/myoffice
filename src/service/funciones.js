const YearAct = () => {
  var today = new Date();
  return today.getFullYear();
};

const NavCamb = (indpath = true) => {
  let elem = document.getElementById("mainNav");
  if (indpath) {
    elem.className = "navbar navbar-expand-lg navbar-dark fixed-top";
  } else {
    elem.className =
      "navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink";
  }
};

const AppSer = {
  NavCamb,
  YearAct
};

export { AppSer };
