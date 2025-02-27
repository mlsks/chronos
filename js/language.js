// Language utility functions
let currentLanguage = "en"; // Default language is English

// Function to set the current language
function setLanguage(language) {
  console.log("Setting language to:", language);
  currentLanguage = language;

  updateUILanguage();

  // Update search placeholder
  const searchInput = document.getElementById("search-events");
  if (searchInput) {
    searchInput.placeholder =
      language === "en" ? "Search events..." : "Rechercher des événements...";
  }

  // If there's a selected event, update its display
  if (
    window.timelineInteractions &&
    window.timelineInteractions.selectedEvent
  ) {
    window.timelineInteractions.updateEventDetails(
      window.timelineInteractions.selectedEvent
    );
  }

  // Reload events to update any visible labels
  if (window.timeline) {
    const currentEra = document.getElementById("era-selector").value;
    const events = getEventsByEra(currentEra);
    window.timeline.loadEvents(events);
    window.timeline.render();
  }

  console.log("Language updated to:", currentLanguage);
}

// Direct function to set language to French
// This can be called from the console for testing
function setFrench() {
  setLanguage("fr");
}

// Function to update UI elements based on the current language
function updateUILanguage() {
  // Update main title
  document.getElementById("main-title").textContent =
    currentLanguage === "en"
      ? "Interactive Historical Timeline"
      : "Chronologie Historique Interactive";

  // Update select event title
  document.getElementById("select-event-title").textContent =
    currentLanguage === "en"
      ? "Select an event to learn more"
      : "Sélectionnez un événement pour en savoir plus";

  // Update click instruction
  document.getElementById("click-instruction").textContent =
    currentLanguage === "en"
      ? "Click on any node in the timeline to view details about that historical event."
      : "Cliquez sur n'importe quel nœud dans la chronologie pour voir les détails de cet événement historique.";

  // Update what if title
  document.getElementById("what-if-title").textContent =
    currentLanguage === "en" ? "What If?" : "Et Si?";

  // Update explore instruction
  document.getElementById("explore-instruction").textContent =
    currentLanguage === "en"
      ? "Explore how history might have unfolded differently."
      : "Explorez comment l'histoire aurait pu se dérouler différemment.";

  // Update all elements with data-en and data-fr attributes
  const elementsWithTranslation =
    document.querySelectorAll("[data-en][data-fr]");
  elementsWithTranslation.forEach((element) => {
    element.textContent = element.getAttribute(`data-${currentLanguage}`);
  });

  // Update era selector options
  const eraSelector = document.getElementById("era-selector");
  Array.from(eraSelector.options).forEach((option) => {
    option.textContent = option.getAttribute(`data-${currentLanguage}`);
  });
}

// Function to get text in the current language
function getText(enText, frText) {
  return currentLanguage === "en" ? enText : frText;
}

// Initialize language functionality
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded - Initializing language functionality");

  // Add a global function to switch language
  window.setLanguage = setLanguage;
});