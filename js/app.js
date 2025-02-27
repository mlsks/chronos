// Main application initialization is now handled in language-selector.js
// This file now only contains UI enhancement functions

// Add some additional UI enhancements
function enhanceUI() {
    // Add tooltip functionality
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(element => {
        const tooltipText = element.getAttribute('data-tooltip');
        
        element.addEventListener('mouseenter', () => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = tooltipText;
            
            // Position the tooltip
            const rect = element.getBoundingClientRect();
            tooltip.style.position = 'absolute';
            tooltip.style.top = `${rect.bottom + 10}px`;
            tooltip.style.left = `${rect.left + rect.width / 2}px`;
            tooltip.style.transform = 'translateX(-50%)';
            
            // Style the tooltip
            tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            tooltip.style.color = 'white';
            tooltip.style.padding = '5px 10px';
            tooltip.style.borderRadius = '4px';
            tooltip.style.fontSize = '14px';
            tooltip.style.zIndex = '1000';
            
            document.body.appendChild(tooltip);
            element.tooltip = tooltip;
        });
        
        element.addEventListener('mouseleave', () => {
            if (element.tooltip) {
                document.body.removeChild(element.tooltip);
                element.tooltip = null;
            }
        });
    });
}

// Call UI enhancements after a short delay to ensure DOM is fully ready
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(enhanceUI, 1000);
});