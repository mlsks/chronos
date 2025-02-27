// Interactions handler for the timeline
class TimelineInteractions {
  constructor(timeline) {
    this.timeline = timeline;
    this.eventDetailsElement = document.getElementById("event-details");
    this.simulateAltButton = document.getElementById("simulate-alt");
    this.resetViewButton = document.getElementById("reset-view");
    this.eraSelector = document.getElementById("era-selector");
    this.searchInput = document.getElementById("search-events");
    this.searchButton = document.getElementById("search-button");
    this.modal = document.getElementById("event-modal");
    this.modalContent = document.getElementById("modal-content");
    this.closeModal = document.querySelector(".close-modal");

    this.setupEventListeners();
    this.setupTimelineCallbacks();
  }

  setupEventListeners() {
    // Reset view button
    this.resetViewButton.addEventListener("click", () => {
      this.timeline.resetView();
    });

    // Era selector
    this.eraSelector.addEventListener("change", () => {
      const selectedEra = this.eraSelector.value;
      const filteredEvents = getEventsByEra(selectedEra);
      this.timeline.loadEvents(filteredEvents);
      this.timeline.resetView();
    });

    // Search functionality
    this.searchButton.addEventListener("click", () => {
      this.performSearch();
    });

    this.searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.performSearch();
      }
    });

    // Alternative history simulation
    this.simulateAltButton.addEventListener("click", () => {
      if (!this.simulateAltButton.disabled) {
        this.timeline.simulateAlternativePath();
      }
    });

    // Modal close button
    this.closeModal.addEventListener("click", () => {
      this.closeEventModal();
    });

    // Close modal when clicking outside
    window.addEventListener("click", (e) => {
      if (e.target === this.modal) {
        this.closeEventModal();
      }
    });
  }

  setupTimelineCallbacks() {
    // Event selection callback
    this.timeline.onEventSelected = (event) => {
      this.updateEventDetails(event);
      this.simulateAltButton.disabled = false;
    };

    // Event deselection callback
    this.timeline.onEventDeselected = () => {
      this.clearEventDetails();
      this.simulateAltButton.disabled = true;
    };

    // Alternative scenario callback
    this.timeline.onAlternativeScenario = (scenario) => {
      this.showAlternativeScenario(scenario);
    };
  }

  updateEventDetails(event) {
    // Store the selected event for language switching
    this.selectedEvent = event;

    // Get the title and description in the current language
    const title = typeof event.title === "object" 
      ? getText(event.title.en, event.title.fr) 
      : event.title;
      
    const description = typeof event.description === "object"
      ? getText(event.description.en, event.description.fr)
      : event.description;

    // Get the causes and consequences in the current language
    const causes = event.causes.map((cause) =>
      typeof cause === "object" ? getText(cause.en, cause.fr) : cause
    );

    const consequences = event.consequences.map((consequence) =>
      typeof consequence === "object"
        ? getText(consequence.en, consequence.fr)
        : consequence
    );

    // Create the HTML
    let html = `
            <h2>${title}</h2>
            <p class="event-date">${event.date}</p>
            <p class="event-description">${description}</p>
            
            <div class="event-details-section">
                <h3>${getText("Causes", "Causes")}</h3>
                <ul>
                    ${causes.map((cause) => `<li>${cause}</li>`).join("")}
                </ul>
            </div>
            
            <div class="event-details-section">
                <h3>${getText("Consequences", "Conséquences")}</h3>
                <ul>
                    ${consequences
                      .map((consequence) => `<li>${consequence}</li>`)
                      .join("")}
                </ul>
            </div>
            
            <button class="view-more-btn">${getText(
              "View Full Details",
              "Voir Tous les Détails"
            )}</button>
        `;

    this.eventDetailsElement.innerHTML = html;

    // Add event listener to the "View Full Details" button
    const viewMoreBtn =
      this.eventDetailsElement.querySelector(".view-more-btn");
    viewMoreBtn.addEventListener("click", () => {
      this.openEventModal(event);
    });
  }

  clearEventDetails() {
    this.eventDetailsElement.innerHTML = `
            <h2>${getText(
              "Select an event to learn more",
              "Sélectionnez un événement pour en savoir plus"
            )}</h2>
            <p class="instruction">${getText(
              "Click on any node in the timeline to view details about that historical event.",
              "Cliquez sur n'importe quel nœud dans la chronologie pour voir les détails de cet événement historique."
            )}</p>
        `;
  }

  openEventModal(event) {
    // Get the title and description in the current language
    const title = typeof event.title === "object" 
      ? getText(event.title.en, event.title.fr) 
      : event.title;
      
    const description = typeof event.description === "object"
      ? getText(event.description.en, event.description.fr)
      : event.description;

    // Get the era name in the current language
    const eraNames = {
      ancient: { en: "Ancient", fr: "Ancienne" },
      medieval: { en: "Medieval", fr: "Médiévale" },
      renaissance: { en: "Renaissance", fr: "Renaissance" },
      industrial: { en: "Industrial", fr: "Industrielle" },
      modern: { en: "Modern", fr: "Moderne" },
      contemporary: { en: "Contemporary", fr: "Contemporaine" },
    };

    const eraName = eraNames[event.era]
      ? getText(eraNames[event.era].en, eraNames[event.era].fr)
      : event.era.charAt(0).toUpperCase() + event.era.slice(1);

    // Get the causes and consequences in the current language
    const causes = event.causes.map((cause) =>
      typeof cause === "object" ? getText(cause.en, cause.fr) : cause
    );

    const consequences = event.consequences.map((consequence) =>
      typeof consequence === "object"
        ? getText(consequence.en, consequence.fr)
        : consequence
    );

    // Create connected events list
    const connectedEvents = getConnectedEvents(event.id);
    const connectedEventsHtml = connectedEvents
      .map((e) => {
        const connectedTitle =
          typeof e.title === "object"
            ? getText(e.title.en, e.title.fr)
            : e.title;
        return `<li><a href="#" class="connected-event" data-id="${e.id}">${connectedTitle} (${e.date})</a></li>`;
      })
      .join("");

    // Create alternative scenarios list
    const alternativeScenariosHtml = event.alternativeScenarios
      .map((scenario) => {
        const scenarioTitle =
          typeof scenario.title === "object"
            ? getText(scenario.title.en, scenario.title.fr)
            : scenario.title;

        const scenarioDescription =
          typeof scenario.description === "object"
            ? getText(scenario.description.en, scenario.description.fr)
            : scenario.description;

        return `<div class="alt-scenario">
                <h4>${scenarioTitle}</h4>
                <p>${scenarioDescription}</p>
                <p class="probability">${getText(
                  "Estimated probability",
                  "Probabilité estimée"
                )}: ${Math.round(scenario.probability * 100)}%</p>
            </div>`;
      })
      .join("");

    let html = `
            <h2>${title}</h2>
            <p class="event-date">${event.date} (${getText(
      "Era",
      "Ère"
    )}: ${eraName})</p>
            
            <div class="event-modal-section">
                <p>${description}</p>
            </div>
            
            <div class="event-modal-columns">
                <div class="event-modal-column">
                    <h3>${getText("Causes", "Causes")}</h3>
                    <ul>
                        ${causes.map((cause) => `<li>${cause}</li>`).join("")}
                    </ul>
                </div>
                
                <div class="event-modal-column">
                    <h3>${getText("Consequences", "Conséquences")}</h3>
                    <ul>
                        ${consequences
                          .map((consequence) => `<li>${consequence}</li>`)
                          .join("")}
                    </ul>
                </div>
            </div>
            
            <div class="event-modal-section">
                <h3>${getText("Connected Events", "Événements Connectés")}</h3>
                ${
                  connectedEventsHtml
                    ? `<ul class="connected-events-list">${connectedEventsHtml}</ul>`
                    : `<p>${getText(
                        "No connected events.",
                        "Aucun événement connecté."
                      )}</p>`
                }
            </div>
            
            <div class="event-modal-section">
                <h3>${getText(
                  "Alternative Historical Scenarios",
                  "Scénarios Historiques Alternatifs"
                )}</h3>
                ${
                  alternativeScenariosHtml ||
                  `<p>${getText(
                    "No alternative scenarios available.",
                    "Aucun scénario alternatif disponible."
                  )}</p>`
                }
            </div>
        `;

    this.modalContent.innerHTML = html;
    this.modal.style.display = "block";

    // Add event listeners to connected events
    const connectedEventLinks =
      this.modalContent.querySelectorAll(".connected-event");
    connectedEventLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const eventId = parseInt(link.getAttribute("data-id"));
        const selectedEvent = getEventById(eventId);

        if (selectedEvent) {
          this.timeline.selectEvent(selectedEvent);
          this.closeEventModal();
        }
      });
    });

    // Add styles to modal content
    this.addModalStyles();
  }

  closeEventModal() {
    this.modal.style.display = "none";
  }

  addModalStyles() {
    // Add these styles dynamically since they're specific to the modal content
    const style = document.createElement("style");
    style.textContent = `
            .event-date {
                font-style: italic;
                color: #666;
                margin-bottom: 1rem;
            }
            
            .event-modal-section {
                margin-bottom: 1.5rem;
            }
            
            .event-modal-columns {
                display: flex;
                flex-wrap: wrap;
                gap: 2rem;
                margin-bottom: 1.5rem;
            }
            
            .event-modal-column {
                flex: 1;
                min-width: 250px;
            }
            
            .connected-events-list {
                list-style-type: none;
                padding: 0;
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
            }
            
            .connected-events-list li {
                background-color: #f0f0f0;
                padding: 0.5rem;
                border-radius: 4px;
            }
            
            .connected-event {
                color: #3498db;
                text-decoration: none;
            }
            
            .connected-event:hover {
                text-decoration: underline;
            }
            
            .alt-scenario {
                background-color: #f9f9f9;
                padding: 1rem;
                border-radius: 4px;
                margin-bottom: 1rem;
                border-left: 4px solid #9b59b6;
            }
            
            .probability {
                font-weight: bold;
                color: #7f8c8d;
            }
            
            .event-details-section {
                margin-top: 1rem;
            }
            
            .view-more-btn {
                margin-top: 1rem;
                width: 100%;
                padding: 0.75rem;
                background-color: #2c3e50;
            }
        `;

    document.head.appendChild(style);
  }

  performSearch() {
    const query = this.searchInput.value.trim();

    if (query.length > 0) {
      const searchResults = searchEvents(query);

      if (searchResults.length > 0) {
        this.timeline.loadEvents(searchResults);

        // If only one result, select it
        if (searchResults.length === 1) {
          this.timeline.selectEvent(searchResults[0]);
        }
      } else {
        // No results found
        alert("No events found matching your search.");
      }
    } else {
      // Reset to current era selection if search is empty
      const selectedEra = this.eraSelector.value;
      const filteredEvents = getEventsByEra(selectedEra);
      this.timeline.loadEvents(filteredEvents);
    }
  }

  showAlternativeScenario(scenario) {
    // Get the title and description in the current language
    const title =
      typeof scenario.title === "object"
        ? getText(scenario.title.en, scenario.title.fr)
        : scenario.title;

    const description =
      typeof scenario.description === "object"
        ? getText(scenario.description.en, scenario.description.fr)
        : scenario.description;

    // Create a floating notification
    const notification = document.createElement("div");
    notification.className = "alt-scenario-notification";
    notification.innerHTML = `
            <h3>${getText(
              "Alternative Scenario",
              "Scénario Alternatif"
            )}: ${title}</h3>
            <p>${description}</p>
        `;

    // Style the notification
    notification.style.position = "absolute";
    notification.style.bottom = "20px";
    notification.style.right = "20px";
    notification.style.width = "300px";
    notification.style.padding = "15px";
    notification.style.backgroundColor = "rgba(155, 89, 182, 0.9)";
    notification.style.color = "white";
    notification.style.borderRadius = "5px";
    notification.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
    notification.style.zIndex = "1000";
    notification.style.animation = "fadeIn 0.5s";

    // Add animation keyframes
    const style = document.createElement("style");
    style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
    document.head.appendChild(style);

    // Add to document
    document.body.appendChild(notification);

    // Remove after 5 seconds
    setTimeout(() => {
      notification.style.animation = "fadeOut 0.5s forwards";

      // Add fadeOut animation
      const fadeOutStyle = document.createElement("style");
      fadeOutStyle.textContent = `
                @keyframes fadeOut {
                    from { opacity: 1; transform: translateY(0); }
                    to { opacity: 0; transform: translateY(20px); }
                }
            `;
      document.head.appendChild(fadeOutStyle);

      setTimeout(() => {
        document.body.removeChild(notification);
      }, 500);
    }, 5000);
  }
}
