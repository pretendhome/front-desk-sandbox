const walkthrough = document.querySelector("[data-demo]");
const switches = [...walkthrough.querySelectorAll("[data-step]")];
const panels = [...walkthrough.querySelectorAll(".demo-panel")];

function select(button) {
  for (const option of switches) {
    option.setAttribute("aria-pressed", String(option === button));
  }
  for (const panel of panels) {
    panel.hidden = panel.id !== button.getAttribute("aria-controls");
  }
}

for (const button of switches) {
  button.addEventListener("click", () => select(button));
}
select(switches[0]);

const arrived = document.querySelector("#arrive");
arrived.addEventListener("click", () => {
  const status = document.querySelector("#arrival-status");
  status.textContent = "Arrived";
  status.classList.add("recorded");
  arrived.disabled = true;
  document.querySelector("#arrival-result").textContent =
    "Arrival recorded for Clara’s 9:00 AM appointment. You can open Margaret’s card and come back to this result.";
});
