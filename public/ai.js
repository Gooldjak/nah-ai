let userInputValue;
const user_chat = document.querySelector('.user-chat');

const words = [
    "i dont care",
    "i dont care about your problems",
    "nah bro do it yourself",
    "maybe later",
    "not my problem",
    "ask someone else",
    "¯\\_(ツ)_/¯",
]

function log() {
    const userInput = document.getElementById('user-input').value;
    const userInputElement = document.getElementById('user-input');
    userInputValue = userInput;
    console.log(userInputValue);

    const message_user = document.createElement('div');
    message_user.textContent = "You: " + userInputValue;
    userInputElement.value = '';
    user_chat.appendChild(message_user);
    if (userInputValue) {
        bot();
    }
    user_chat.scrollTop = user_chat.scrollHeight;
}

function bot() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const botResponse = words[randomIndex];

    const message_bot = document.createElement('div');
    message_bot.textContent = "Bot: " + botResponse;
    user_chat.appendChild(message_bot);
    user_chat.scrollTop = user_chat.scrollHeight;
}