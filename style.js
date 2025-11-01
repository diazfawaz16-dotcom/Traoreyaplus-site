/* =================================== */
/* TRAOREYA PLUS - CSS Personnalisé */
/* =================================== */

/* 1. Animations d'apparition (Utilisé par main.js) */
/* ------------------------------------------------ */

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px); /* Commence légèrement en bas */
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Cacher initialement les éléments de la galerie */
.gallery-item {
    opacity: 0;
    transform: translateY(20px); 
    transition: all 0.5s ease-out; 
}


/* 2. Styles du Bouton WhatsApp Flottant */
/* -------------------------------------- */

.whatsapp-float {
    transition: transform 0.4s ease-out, opacity 0.4s ease-out;
    cursor: pointer;
}

/* État initial pour l'animation (utilisé par main.js pour l'entrée) */
.whatsapp-float.translate-y-10 {
    transform: translateY(40px);
    opacity: 0;
}

/* État d'arrivée */
.whatsapp-float.translate-y-0 {
    transform: translateY(0);
    opacity: 1;
}

/* 3. Styles de la Modale de Réservation */
/* -------------------------------------- */

/* Animation pour l'apparition de la modale */
@keyframes slideIn {
    from {
        transform: translateY(-50px) scale(0.95);
        opacity: 0;
    }
    to {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
}

#reservationModal > div {
    /* Appliquer l'animation uniquement au contenu de la modale */
    animation: slideIn 0.3s ease-out forwards;
}

/* Pour le défilement fluide */
html {
    scroll-behavior: smooth;
}

