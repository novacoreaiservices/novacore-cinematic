const films = {
  mark: {
    kicker: "Moment · 8.0 s · stays here",
    title: "Wake the mark",
    body: "The geometric mark on the far wall flares, the word holds, and a cyan wash runs down the aisle before the photograph returns.",
    fine: "Canary candidate. Render on workers 462 and 463 with SOGNI tokens after you approve the plan."
  },
  "left-wall": {
    kicker: "Moment · 7.3 s · stays here",
    title: "Read the left wall",
    body: "The port monitor bank scrolls its cyan and magenta diagrams. The right wall and the mark stay still.",
    fine: "Click outline is planned. SAM 3 has not been run yet."
  },
  "right-wall": {
    kicker: "Moment · 7.3 s · stays here",
    title: "Read the right wall",
    body: "The starboard screens answer, magenta edges flaring once, then the hall settles back onto the still.",
    fine: "Click outline is planned. SAM 3 has not been run yet."
  },
  aisle: {
    kicker: "Moment · 8.7 s · stays here",
    title: "Walk the aisle",
    body: "The floor reflection travels toward the mark and eases back into the tiles. The aisle stays empty.",
    fine: "This is a moment, not a crossing. A second photograph is required before any door can open."
  }
};

const card = document.getElementById("card");
const close = document.getElementById("close");

document.querySelectorAll(".hot").forEach((button) => {
  button.addEventListener("click", () => {
    const film = films[button.dataset.film];
    document.getElementById("card-kicker").textContent = film.kicker;
    document.getElementById("card-title").textContent = film.title;
    document.getElementById("card-body").textContent = film.body;
    document.getElementById("card-fine").textContent = film.fine;
    card.hidden = false;
  });
});

close.addEventListener("click", () => { card.hidden = true; });
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") card.hidden = true;
});

requestAnimationFrame(() => document.body.classList.add("ready"));
