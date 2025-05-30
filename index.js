const list_tooltip = [];

function toggleTooltip(event, id = undefined) {
  const list_ids = [1, 2, 3, 4, 5, 6, 7];
  for (let e of list_ids) {
    document.getElementById(`tooltip${e}`).style.display = "none";
  }
  const id_selected = `tooltip${id}`;
  list_tooltip.push(id_selected);
  document.getElementById(id_selected).style.display = "block";
}

document.addEventListener("scroll", function () {
  const list_ids = [1, 2, 3, 4, 5, 6, 7];
  for (let e of list_ids) {
    document.getElementById(`tooltip${e}`).style.display = "none";
  }
});

const texto = "descúbrela aquí";
const target = document.getElementById("type-target");

function escribir(i = 0) {
  if (i <= texto.length) {
    target.textContent = texto.slice(0, i);
    setTimeout(() => escribir(i + 1), 100);
  } else {
    // Espera 1s, borra y repite
    setTimeout(() => {
      target.textContent = "";
      escribir(0);
    }, 1000); // 1s después de escribir completo
  }
}

escribir();

const container = document.getElementById("container_match_section_06");
const divider = document.getElementById("divider");
const rightImg = container.querySelector(".right-img");

container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;

  const clampedX = Math.max(0, Math.min(offsetX, rect.width));

  divider.style.left = clampedX + "px";
  const percent = (clampedX / rect.width) * 100;
  rightImg.style.clipPath = `inset(0 0 0 ${percent}%)`;
});

const radios = document.querySelectorAll(
  'input[type="radio"][name="acordeon"]'
);
let selected = null;

radios.forEach((radio) => {
  radio.addEventListener("click", function () {
    if (this === selected) {
      this.checked = false;
      selected = null;
    } else {
      selected = this;
    }
  });
});
