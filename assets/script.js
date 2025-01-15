// Zachytíme odeslání zprávy
function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-box");
  
    // Přidáme uživatelskou zprávu do chatu
    chatBox.innerHTML += `<p><strong>Ty:</strong> ${userInput}</p>`;
  
    // Jednoduché odpovědi
    if (userInput.toLowerCase().includes("ahoj")) {
      chatBox.innerHTML += `<p><strong>Bot:</strong> Ahoj! Jak se máš?</p>`;
    } else if (userInput.toLowerCase().includes("jak se máš")) {
      chatBox.innerHTML += `<p><strong>Bot:</strong> Mám se skvěle, děkuji za optání!</p>`;
    } else {
      chatBox.innerHTML += `<p><strong>Bot:</strong> Promiň, tomu nerozumím.</p>`;
    }
  
    // Vymazání vstupu po odeslání
    document.getElementById("user-input").value = "";
  }
  