// JavaScript to add functionality or tracking to the navigation and hyperlinks
document.addEventListener('DOMContentLoaded', () => {
    const readMoreButton = document.getElementById('readMoreBtn');

    if (readMoreButton) {
        readMoreButton.addEventListener('click', (event) => {
            // Logs activity when navigating out of the main index page
            console.log("Navigating to Violet's extended guide...");
        });
    }
    
    // Quick search simulation bar action
    const searchInput = document.querySelector('.search-bar input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            if(searchInput.value.trim() !== "") {
                alert(`Searching Incrediblog for: ${searchInput.value}`);
            }
        });
    }
});

// Dynamic interaction adjustments for playlist block elements
document.addEventListener('DOMContentLoaded', () => {
    const trackButtons = document.querySelectorAll('.track-btn');
    
    trackButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove selection state from other buttons
            trackButtons.forEach(btn => btn.style.backgroundColor = '#faecef');
            
            // Highlight current active track selection
            button.style.backgroundColor = '#e3cbd2';
            
            console.log(`Now playing preview: ${button.innerText.replace('\n', ' - ')}`);
        });
    });
});

// Adds hover layout adjustments dynamically to style components
document.addEventListener('DOMContentLoaded', () => {
    const styleCards = document.querySelectorAll('.style-card img, .showcase-frame img');

    styleCards.forEach(img => {
        img.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";
        
        img.addEventListener('mouseenter', () => {
            img.style.transform = "scale(1.03)";
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = "scale(1)";
        });
    });
});