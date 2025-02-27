// Language utility functions
let currentLanguage = "en"; // Default language is English

// Function to set the current language
function setLanguage(language) {
  console.log("Setting language to:", language);
  currentLanguage = language;

  // Update all UI elements
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

  // Update language toggle indicators
  updateLanguageToggle();

  console.log("Language updated to:", currentLanguage);
}

// Function to update the language toggle indicators
function updateLanguageToggle() {
  const currentIndicator = document.getElementById("current-language-indicator");
  const alternateIndicator = document.getElementById("alternate-language-indicator");
  
  if (currentIndicator && alternateIndicator) {
    if (currentLanguage === "en") {
      currentIndicator.textContent = "EN";
      alternateIndicator.textContent = "FR";
    } else {
      currentIndicator.textContent = "FR";
      alternateIndicator.textContent = "EN";
    }
  }
}

// Function to toggle between languages
function toggleLanguage() {
  const newLanguage = currentLanguage === "en" ? "fr" : "en";
  
  // Store the new language
  localStorage.setItem('selectedLanguage', newLanguage);
  
  // Force a page reload to ensure everything is updated
  window.location.href = window.location.pathname + '?lang=' + newLanguage + '&t=' + new Date().getTime();
}

// Function to completely recreate the timeline container
function recreateTimelineContainer() {
  // Get the current era
  const currentEra = document.getElementById("era-selector").value;
  
  // Remove old timeline canvas
  const oldCanvas = document.getElementById("timeline-canvas");
  const container = oldCanvas.parentElement;
  
  // Store the container dimensions
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  
  // Clear the container
  container.innerHTML = '';
  
  // Create new canvas
  const newCanvas = document.createElement('canvas');
  newCanvas.id = 'timeline-canvas';
  container.appendChild(newCanvas);
  
  // Create overlay div
  const overlayDiv = document.createElement('div');
  overlayDiv.id = 'timeline-overlay';
  container.appendChild(overlayDiv);
  
  // Initialize new timeline
  const timeline = new TimelineVisualization('timeline-canvas');
  window.timeline = timeline;
  
  // Initialize new interactions
  const interactions = new TimelineInteractions(timeline);
  window.timelineInteractions = interactions;
  
  // Load events for current era
  const events = getEventsByEra(currentEra);
  timeline.loadEvents(events);
  
  // Force the timeline to render
  timeline.render();
}

// Direct function to set language to French
// This can be called from the console for testing
function setFrench() {
  setLanguage("fr");
}

// Function to update UI elements based on the current language
function updateUILanguage() {
  // Update document title
  document.title = currentLanguage === "en" 
    ? "Interactive Historical Timeline" 
    : "Chronologie Historique Interactive";

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
  if (eraSelector) {
    Array.from(eraSelector.options).forEach((option) => {
      option.textContent = option.getAttribute(`data-${currentLanguage}`);
    });
  }
  
  // Update simulate button text
  const simulateButton = document.getElementById("simulate-alt");
  if (simulateButton) {
    simulateButton.textContent = currentLanguage === "en"
      ? "Simulate Alternative Path"
      : "Simuler un Chemin Alternatif";
  }
  
  // Update reset view button text
  const resetViewButton = document.getElementById("reset-view");
  if (resetViewButton) {
    resetViewButton.textContent = currentLanguage === "en"
      ? "Reset View"
      : "Réinitialiser la Vue";
  }
  
  // Update search button text
  const searchButton = document.getElementById("search-button");
  if (searchButton) {
    searchButton.textContent = currentLanguage === "en"
      ? "Search"
      : "Rechercher";
  }
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
  
  // Make getText globally available
  window.getText = getText;
  
  // Add event listener to language toggle
  const languageSwitch = document.getElementById("language-switch");
  if (languageSwitch) {
    languageSwitch.addEventListener("click", (e) => {
      e.preventDefault();
      toggleLanguage();
    });
  }
  
  // Initialize language toggle indicators
  updateLanguageToggle();
});