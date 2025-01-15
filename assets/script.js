// Zachytíme odeslání zprávy
function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-box");
  
    // Přidáme uživatelskou zprávu do chatu
    chatBox.innerHTML += `<p><strong>Ty:</strong> ${userInput}</p>`;
  
    // Jednoduché odpovědi
    if (userInput.toLowerCase().includes("hello")) {
      chatBox.innerHTML += `<p><strong>Bot:</strong> "Hello, how are you?"</p>`;
    } else if (userInput.toLowerCase().includes("How are you?")) {
      chatBox.innerHTML += `<p><strong>Bot:</strong> "I'm ok, thank you for asking!"</p>`;
    } else {
      chatBox.innerHTML += `<p><strong>Bot:</strong>" I'm sorry, not sure if I understand"</p>`;
    }
  
    // Vymazání vstupu po odeslání
    document.getElementById("user-input").value = "";
  }
  