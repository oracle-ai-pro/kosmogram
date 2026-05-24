const fileInput = document.getElementById('file-input');
const container = document.getElementById('attachments-container');
const publishBtn = document.getElementById('publish-btn');
const statusBar = document.getElementById('status-bar');

// Добавление файлов в список
fileInput.addEventListener('change', (e) => {
    Array.from(e.target.files).forEach(file => {
        const chip = document.createElement('div');
        chip.className = 'file-chip';
        chip.innerHTML = `
            <span>${file.name}</span>
            <button class="delete-btn">🗑️</button>
        `;
        
        // Удаление файла
        chip.querySelector('.delete-btn').onclick = () => chip.remove();
        container.appendChild(chip);
    });
});

// Отправка (имитация процесса)
publishBtn.addEventListener('click', () => {
    publishBtn.disabled = true;
    publishBtn.innerText = "🚀 Загрузка...";
    
    setTimeout(() => {
        statusBar.style.display = 'block';
        statusBar.innerHTML = "<strong>Космограмм:</strong> Пришло Новое сообщение! ✅";
        publishBtn.innerText = "Опубликовано";
    }, 2000);
});
