import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <button class="button">Plus</button>
    <button class="button">Minus</button>
    <button class="button">Reset</button>
    <p id="value"></p>
    <small id="clickAction"></small>
  </div>
`;

let value = 0;

const buttons = document.getElementsByTagName("button");
const valueElement = document.getElementById("value") as HTMLElement;
const actionElement = document.getElementById("clickAction") as HTMLElement;

const updateValue = (change: number, action: string) => {
    value += change;
    valueElement.innerHTML = String(value);
    actionElement.innerHTML = `You have clicked <strong>${action}</strong>`;
};

buttons[0].addEventListener("click", () => updateValue(1, "Plus"));
buttons[1].addEventListener("click", () => updateValue(-1, "Minus"));
buttons[2].addEventListener("click", () => {
    value = 0;
    updateValue(0, "Reset");
});


