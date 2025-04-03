// Login Toggle
document.getElementById('loginBtn').addEventListener('click', () => {
    const userAccount = document.getElementById('userAccount');
    userAccount.classList.toggle('hidden');
    document.getElementById('loginBtn').textContent = userAccount.classList.contains('hidden') ? 'Login' : 'Logout';
});

// Catalog Search
document.getElementById('catalogSearch').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const results = document.getElementById('catalogResults');
    results.innerHTML = '';
    const books = [
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { title: '1984', author: 'George Orwell' }
    ];
    books.filter(book => book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query))
        .forEach(book => {
            results.innerHTML += `<p>${book.title} by ${book.author} - <button onclick="alert('Reserved!')">Reserve</button></p>`;
        });
});

// Chatbot
document.getElementById('chatToggle').addEventListener('click', () => {
    document.getElementById('chatWindow').classList.toggle('hidden');
});

document.getElementById('sendChat').addEventListener('click', () => {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (message) {
        const messages = document.getElementById('chatMessages');
        messages.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
        // Simple AI response
        let response = 'I’m here to help! What do you need?';
        if (message.toLowerCase().includes('book')) {
            response = 'Try "The Great Gatsby" or ask for more suggestions!';
        } else if (message.toLowerCase().includes('open')) {
            response = 'The library is open 9 AM - 5 PM daily.';
        }
        setTimeout(() => {
            messages.innerHTML += `<p><strong>Assistant:</strong> ${response}</p>`;
            messages.scrollTop = messages.scrollHeight;
        }, 500);
        input.value = '';
    }
});

// Accessibility Features
document.getElementById('increaseText').addEventListener('click', () => {
    document.body.style.fontSize = '1.2em';
});

document.getElementById('highContrast').addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// Explore Button (Placeholder)
document.getElementById('exploreBtn').addEventListener('click', () => {
    alert('Start exploring the library!');
});
