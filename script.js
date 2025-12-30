const entry_display = document.querySelector(".entry_display");
const display = document.querySelector("#display");

const buttons = document.querySelectorAll("button");


buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear") {
            display.innerText = "";
        } else if (item.id == "backspace") {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != "" && item.id == "equal") {

            const answer = eval(display.innerText);

            const newRegistry = document.createElement("li");

            const text = document.createElement("p");
            text.classList.add("answerText");
            text.innerText = display.innerText + " = " + answer;

            const dateText = document.createElement("p");
            dateText.classList.add("dateText");
            const today = new Date();
            const hours = today.getHours();
            const minutes = today.getMinutes();
            const displayMinutes = String(minutes).padStart(2, '0');

            const displayHours = hours % 12 || 12;
            const ampm = hours >= 12 ? "pm" : "am";

            dateText.innerText = `${displayHours}:${displayMinutes} ${ampm}`;

            newRegistry.append(text);
            newRegistry.append(dateText);

            entry_display.append(newRegistry);

            display.innerText = answer;

        } else if (display.innerText == "" && item.id == "equal") {
            display.innerText = "Null";
            setTimeout(() => (display.innerText = ""), 2000);
        } else {
            display.innerText += item.id;
        }
    };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
};

const historyToggler = document.querySelector(".history-toggler");
const historyPanel = document.querySelector(".historial");

historyToggler.onclick = () => {
    historyPanel.classList.toggle("hidden");
}