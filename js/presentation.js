// Presentation control logic
let currentSlide = 0;
let slides = [];
let totalSlides = 0;

// Initialize presentation
function initPresentation() {
    slides = document.querySelectorAll('.slide');
    totalSlides = slides.length;

    // Force reset to slide 1
    currentSlide = 0;

    // Ensure first slide is visible
    if (slides.length > 0) {
        // Hide all slides first
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
        });
        // Show first slide explicitly
        slides[0].classList.add('active');
    }

    updateNavigation();
    updateProgressBar();

    // Update slide counter
    const currentSlideElement = document.getElementById('current-slide');
    if (currentSlideElement) {
        currentSlideElement.textContent = 1;
    }
}

// Navigation functions
function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn && nextBtn) {
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
    }
}

function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        const progress = ((currentSlide + 1) / totalSlides) * 100;
        progressBar.style.width = progress + '%';
    }
}

function showSlide(n) {
    if (slides.length === 0) return;
    
    // Hide current slide
    slides[currentSlide].classList.remove('active');
    
    // Calculate new slide index
    currentSlide = Math.max(0, Math.min(n, totalSlides - 1));
    
    // Show new slide
    slides[currentSlide].classList.add('active');
    
    // Update UI
    document.getElementById('current-slide').textContent = currentSlide + 1;
    updateNavigation();
    updateProgressBar();
    
    // Save state to localStorage
    localStorage.setItem('btc-alaska-current-slide', currentSlide);
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        showSlide(currentSlide + 1);
    }
}

function previousSlide() {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
}

function goToSlide(slideNumber) {
    showSlide(slideNumber - 1);
}

// Fullscreen functionality
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

// Keyboard navigation
function handleKeyPress(e) {
    switch(e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
            e.preventDefault();
            nextSlide();
            break;
        case 'ArrowLeft':
        case 'PageUp':
            e.preventDefault();
            previousSlide();
            break;
        case 'Home':
            e.preventDefault();
            goToSlide(1);
            break;
        case 'End':
            e.preventDefault();
            goToSlide(totalSlides);
            break;
        case 'f':
        case 'F11':
            e.preventDefault();
            toggleFullscreen();
            break;
        case 'Escape':
            if (document.fullscreenElement) {
                document.exitFullscreen();
            }
            break;
    }
}

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            nextSlide();
        } else {
            // Swipe right - previous slide
            previousSlide();
        }
    }
}

// URL hash navigation
function updateURL() {
    const hash = `#slide-${currentSlide + 1}`;
    if (window.location.hash !== hash) {
        window.history.replaceState(null, null, hash);
    }
}

function handleHashChange() {
    const hash = window.location.hash;
    if (hash.startsWith('#slide-')) {
        const slideNumber = parseInt(hash.replace('#slide-', ''));
        if (slideNumber >= 1 && slideNumber <= totalSlides) {
            showSlide(slideNumber - 1);
        }
    }
}

// Auto-save and restore position
function savePosition() {
    localStorage.setItem('btc-alaska-current-slide', currentSlide);
    localStorage.setItem('btc-alaska-timestamp', Date.now());
}

function restorePosition() {
    const saved = localStorage.getItem('btc-alaska-current-slide');
    const timestamp = localStorage.getItem('btc-alaska-timestamp');
    
    // Only restore if saved within last 24 hours
    if (saved && timestamp && (Date.now() - timestamp < 24 * 60 * 60 * 1000)) {
        const slideNumber = parseInt(saved);
        if (slideNumber >= 0 && slideNumber < totalSlides) {
            showSlide(slideNumber);
        }
    }
}

// Print functionality
function printSlides() {
    window.print();
}

// Export functionality
function exportSlides() {
    const content = Array.from(slides).map((slide, index) => {
        const title = slide.querySelector('h1, h2')?.textContent || `Slide ${index + 1}`;
        const content = slide.querySelector('.content-container')?.textContent || '';
        return `## ${title}\n\n${content}\n\n---\n`;
    }).join('\n');
    
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bitcoin-alaska-slides.md';
    a.click();
    URL.revokeObjectURL(url);
}

// Initialize when everything is ready
function setupPresentation() {
    // Force start at slide 1
    currentSlide = 0;

    initPresentation();

    // Don't restore position on initial load - always start at slide 1
    // restorePosition();

    // Set up event listeners (only once)
    if (!window.presentationInitialized) {
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('touchstart', handleTouchStart);
        document.addEventListener('touchend', handleTouchEnd);
        window.addEventListener('hashchange', handleHashChange);

        // Auto-save position periodically
        setInterval(savePosition, 5000);

        window.presentationInitialized = true;
    }

    // Force show slide 1
    showSlide(0);
}

// Listen for slides ready event
document.addEventListener('slidesReady', setupPresentation);

// Fallback initialization
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for slides to load
    setTimeout(() => {
        const slides = document.querySelectorAll('.slide');
        if (slides.length > 0 && !window.presentationInitialized) {
            setupPresentation();
        }
    }, 300);
});

// Handle page unload
window.addEventListener('beforeunload', savePosition);

// Presentation timer
let presentationStartTime = null;
let timerInterval = null;

function startTimer() {
    presentationStartTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (!presentationStartTime) return;
    
    const elapsed = Date.now() - presentationStartTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    
    // You can display this timer somewhere if needed
    console.log(`Presentation time: ${minutes}:${seconds.toString().padStart(2, '0')}`);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// Analytics (if needed)
function trackSlideView(slideNumber) {
    // Add analytics tracking here if needed
    // Example: gtag('event', 'slide_view', { slide_number: slideNumber });
}

// Override showSlide to include tracking
const originalShowSlide = showSlide;
showSlide = function(n) {
    originalShowSlide(n);
    trackSlideView(currentSlide + 1);
    updateURL();
};
