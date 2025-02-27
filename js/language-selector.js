// Language Selection Overlay
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const languageSelectionOverlay = document.getElementById('language-selection-overlay');
    const appContent = document.getElementById('app-content');
    const languageOptions = document.querySelectorAll('.language-option');
    
    // Function to show language selection overlay
    function showLanguageSelection() {
        // Show language selection overlay
        languageSelectionOverlay.style.display = 'flex';
        appContent.style.display = 'none';
    }
    
    // Function to handle language selection
    function selectLanguage(language) {
        // Get previous language
        const previousLanguage = localStorage.getItem('selectedLanguage');
        
        // Store selected language permanently
        localStorage.setItem('selectedLanguage', language);
        
        // Check if this is a language change after F5
        const isF5Change = languageSelectionOverlay.style.display === 'flex' && previousLanguage && previousLanguage !== language;
        
        // Hide the language selection overlay
        languageSelectionOverlay.style.display = 'none';
        
        // Show the app content
        appContent.style.display = 'block';
        
        // If this is a language change after F5, force a hard reload
        if (isF5Change) {
            // Add a parameter to the URL to force a complete reload
            window.location.href = window.location.pathname + '?lang=' + language + '&t=' + new Date().getTime();
            return;
        }
        
        // Set the language in the app
        if (window.setLanguage) {
            window.setLanguage(language);
        }
        
        // Initialize the app if it hasn't been initialized yet
        if (!window.timeline) {
            initializeApp();
        }
    }
    
    // Add click event listeners to language options
    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const language = option.getAttribute('data-language');
            selectLanguage(language);
        });
    });
    
    // Listen for F5 key press to show language selection again
    document.addEventListener('keydown', (event) => {
        if (event.key === 'F5') {
            // Prevent the default refresh behavior
            event.preventDefault();
            
            // Show language selection overlay
            showLanguageSelection();
        }
    });
    
    // Check if user has previously selected a language
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        // If language was previously selected, use it directly without showing the selection screen
        selectLanguage(savedLanguage);
    }
    // Otherwise, the language selection overlay remains visible
});

// Function to initialize the app after language selection
function initializeApp() {
    // Initialize the timeline visualization
    const timeline = new TimelineVisualization('timeline-canvas');
    window.timeline = timeline;
    
    // Initialize interactions handler
    const interactions = new TimelineInteractions(timeline);
    window.timelineInteractions = interactions;
    
    // Load all events initially
    timeline.loadEvents(historicalEvents);
    
    // Add some initial animations to make the timeline more engaging
    animateTimelineEntry(timeline);
}

// This function is moved from app.js
function animateTimelineEntry(timeline) {
    // Save original event positions
    const originalEvents = timeline.events.map(event => ({
        ...event,
        originalX: event.coordinates.x,
        originalY: event.coordinates.y
    }));
    
    // Set all events to start from center
    timeline.events.forEach(event => {
        event.coordinates = { x: 0.5, y: 0.5 };
    });
    
    // Render initial state
    timeline.render();
    
    // Animate to final positions
    let progress = 0;
    const duration = 1500; // ms
    const startTime = performance.now();
    
    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        progress = Math.min(elapsed / duration, 1);
        
        // Use easing function for smoother animation
        const easedProgress = easeOutCubic(progress);
        
        // Update positions
        timeline.events.forEach((event, index) => {
            const original = originalEvents[index];
            event.coordinates = {
                x: 0.5 + (original.originalX - 0.5) * easedProgress,
                y: 0.5 + (original.originalY - 0.5) * easedProgress
            };
        });
        
        // Render current state
        timeline.render();
        
        // Continue animation if not complete
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}

// Easing function for smoother animation
function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
}