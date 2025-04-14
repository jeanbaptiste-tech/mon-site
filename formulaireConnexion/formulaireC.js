document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche l'envoi réel

  const message = document.getElementById("success-message");
  const loader = document.getElementById("loader");

  // Affiche le loader
  loader.classList.remove("hidden");

  // Simule une attente (ex: requête serveur)
  setTimeout(() => {
    loader.classList.add("hidden"); // Cache le loader
    message.style.display = "block"; // Affiche le message de succès

    // Réinitialise le formulaire
    this.reset();

    // Cache le message de succès après 2.5s
    setTimeout(() => {
      message.style.display = "none";
    }, 2500);
  }, 2000); // Simule une attente de 2 secondes
});
