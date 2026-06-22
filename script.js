document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('actionBtn');
    const message = document.getElementById('message');

    const messages = [
        "Hello there! 👋",
        "You clicked the button!",
        "JavaScript is awesome!",
        "Keep learning! 🚀",
        "Nice to meet you!"
    ];

    btn.addEventListener('click', function () {
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        message.textContent = randomMsg;
    });
});
