const PIN_CODE = "L$24GcdiH)";
let timeLeft = 5;

const timerEl = document.getElementById("timer");
const inputEl = document.getElementById("pin-input");

// Запуск таймера
const interval = setInterval(() => {
    timeLeft--;
    timerEl.innerText = timeLeft < 10 ? "0" + timeLeft : timeLeft;
    if (timeLeft <= 0) {
        clearInterval(interval);
        inputEl.disabled = true;
        alert("Вход заблокирован: время вышло!");
    }
}, 1000);

// Валидация
inputEl.addEventListener("input", (e) => {
    if (e.target.value === PIN_CODE) {
        clearInterval(interval);
        alert("Доступ разрешен. Добро пожаловать, Агент Саня!");
        window.location.href = "/admin-panel"; // Переход в панель отправки
    }
});
