// Animations pour la découpe du ruban
window.onload = function() {
    var ribbon = document.getElementById('ribbon');
    var scissors = document.getElementById('scissors');

    scissors.style.opacity = '0'; // Cacher les ciseaux au début

    // Animation de découpe du ruban
    setTimeout(function() {
        scissors.style.opacity = '1'; // Afficher les ciseaux
        scissors.style.transition = 'transform 0.5s ease'; // Animation de transition
        scissors.style.transform = 'translate(-50%, -50%) rotate(-45deg)'; // Rotation des ciseaux
        setTimeout(function() {
            ribbon.style.height = '0'; // Coupe du ruban
        }, 500); // Attendre 0.5s avant de couper le ruban
    }, 1000); // Attendre 1s avant de montrer les ciseaux
};

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('concours-form');
    const codeSection = document.getElementById('code-section');
    const errorMessage = document.getElementById('error-message');
    const participants = new Set(); // Utilisation d'un ensemble pour stocker les participants uniques

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;

        if (!isValidEmail(email)) {
            displayErrorMessage('Veuillez entrer une adresse email valide.');
            return;
        }

        if (!participants.has(email)) {
            if (participants.size < 20) {
                participants.add(email);
                displayCode();
            } else {
                displayErrorMessage('Désolé, tous les codes ont été distribués.');
            }
        } else {
            displayErrorMessage('Vous avez déjà participé.');
        }
    });

    function displayCode() {
        codeSection.style.display = 'block';
        const code = generateCode();
        document.getElementById('code').innerText = code;
    }

    function displayErrorMessage(message) {
        errorMessage.style.display = 'block';
        errorMessage.innerText = message;
    }

    function generateCode() {
        // Code de réduction généré aléatoirement
        return Math.random().toString(36).substring(2, 8).toUpperCase();
    }

    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', function() {
        codeSection.style.display = 'none';
    });
});

// pour la possibiliter de fermer l'endroit où le code apparait

document.addEventListener('DOMContentLoaded', function() {
    const codeSection = document.getElementById('code-section');
    const closeBtn = document.getElementById('close-btn'); // Ajout de la référence au bouton de fermeture

    closeBtn.addEventListener('click', function() {
        codeSection.style.display = 'none'; // Cacher la section du code de réduction
    });
});

// Fonction pour valider une adresse e-mail
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
