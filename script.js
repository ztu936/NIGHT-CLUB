function toggleGallery() {
    document.getElementById("gallery").classList.toggle("hidden");
}

function toggleChat() {
    document.getElementById("chat").classList.toggle("hidden");
}

function askQuestion(question) {
    let chatBox = document.getElementById("chatBox");
    let consultant = document.getElementById("consultant").value;
    
    let userMessage = document.createElement("p");
    userMessage.textContent = "Вы: " + question;
    chatBox.appendChild(userMessage);
    
    setTimeout(() => {
        let consultantMessage = document.createElement("p");
        consultantMessage.textContent = consultant + ": " + getAnswer(question);
        chatBox.appendChild(consultantMessage);
    }, 5000);
}

function getAnswer(question) {
    const answers = {
        "Какие у вас вечеринки?": "У нас проходят вечеринки каждые выходные!",
        "Какие у вас акции?": "Сейчас действует скидка 20% на вход!",
        "Как добраться до клуба?": "Мы находимся в центре города, рядом с метро."
    };
    return answers[question] || "Извините, я не знаю ответа на этот вопрос.";
}