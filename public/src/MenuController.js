function $(name) {
  const element = document.getElementById(name);
  if (!element) {
    log.E(`Element with id ${name} not found`);
    return null;
  }
  return element;
}

function _ToggleMenu(e) {
  e.preventDefault();
  e.stopPropagation();

  if (dropdownMenu.style.display === "none") {
    dropdownMenu.style.display = "block"
    dropdownButton.classList.add("active");
    dropdownMenu.classList.add("no-scroll");
    document.body.classList.add('no-scroll');
  } else {
    dropdownMenu.style.display = "none";
    dropdownButton.classList.remove("active");
    dropdownMenu.classList.remove("no-scroll");
    document.body.classList.remove('no-scroll');
  }
}

const navBarButton = $("navBarButton");
const dropdownButton = $("dropdownButton");
const dropdownMenu = $("dropdownMenu");

navBarButton.style.display = "block";
dropdownMenu.style.display = "none";

navBarButton.addEventListener("click", _ToggleMenu);
dropdownButton.addEventListener("click", _ToggleMenu);
