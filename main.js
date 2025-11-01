// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Logique pour le menu mobile
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Afficher le bouton WhatsApp après un court délai pour l'animation
    setTimeout(() => {
        document.querySelector('.whatsapp-float').classList.remove('translate-y-10', 'opacity-0');
    }, 100);
});

// Fonction pour le formulaire de réservation
function openReservation() {
    document.getElementById('reservationModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden'; 
}

function closeReservation() {
    document.getElementById('reservationModal').classList.add('hidden');
    document.body.style.overflow = 'auto'; 
}

// Fonction pour le bouton "Commander Boissons" (redirige vers WhatsApp)
function openOrderForm() {
    window.open('https://wa.me/224628189227?text=Bonjour,%20je%20souhaite%20commander%20des%20boissons.', '_blank');
}

// Fermer la modale en cliquant en dehors
document.getElementById('reservationModal').addEventListener('click', function(e) {
    if (e.target.id === 'reservationModal') {
        closeReservation();
    }
});
