const colors = [
    '#4A0404', // Bordeaux foncé
    '#722F37', // Burgundy rouge
    '#800000', // Bordeaux classique
    '#990012', // Rouge vin vif
    '#581845', // Prune foncée
    '#900C3F'  // Bordeaux profond
];
let currentColorIndex = 0;

function changeHeartColor() {
    const heart = document.getElementById('heart');
    const message = document.getElementById('message');
    
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    const newColor = colors[currentColorIndex];
    
    heart.style.setProperty('--heart-color', newColor);
    
    const messages = [
        "You are the moonlight in my life, the one who makes everything brighter.",
        "I look at you and wonder, why do poets even try?",
        "You're my sunshine on a rainy day",
        "Your love is the art that colors my world.",
        "You are the spark that lights up my dark days."
    ];
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    message.textContent = messages[randomIndex];
}
