const options = {
  indicators: true,
};

document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".slider");
  const instances = M.Slider.init(elems, options);
});
