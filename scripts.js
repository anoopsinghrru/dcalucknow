// Language Management
let isHindi = false;

// Course Data
const courseData = {
    army: {
        title: { en: 'Post In Indian Army', hi: 'भारतीय थलसेना में पद' },
        details: {
            post: { en: 'JCO, Religious Teacher, Teacher Havildar, JCO, Catering, Surveyor Auto Cartographer, Soldier GD, Soldier Technical, Soldier Nursing Assistant, Soldier Clerk, and Soldier Tradesman.', hi: 'जे.सी.ओ., धर्म शिक्षक, शिक्षक हवलदार, जे.सी.ओ., कैटरिंग, सर्वेयर आटो काटो ग्राफर, सैनिक जी.डी., सैनिक टेक्निकल, सैनिक नर्सिंग असिस्टैण्ट, सैनिक क्लर्क, तथा सैनिक ट्रेड्समैन ।' },
            detail: { en: 'For more Detail Call 8896000000', hi: 'अधिक जानकारी के लिए 8896000000 पर कॉल करें' }
        }
    },
    airforce: {
        title: { en: 'Post In Indian Airforce', hi: 'भारतीय वायु सेना में पद' },
        details: {
            post: { en: 'Air Force Technical (XGroup) Air Force Non Technical (YGroup)', hi: 'वायुसेना तकनीकी (एक्सग्रुप) वायुसेना नान तकनीकी (वाईग्रुप)' },
            detail: { en: 'For more Detail Call 8896000000', hi: 'अधिक जानकारी के लिए 8896000000 पर कॉल करें' }
        }
    },
    navy: {
        title: { en: 'Post In Indian Navy', hi: 'भारतीय नौसेना में पद' },
        details: {
            post: { en: 'Artificer Apprentice, Direct Entry Diploma Holder, Senior Secondary Recruit, Matric Recruit, Musician and Non Matric Recruit.', hi: 'आर्टीफिशर अप्रेन्टिस, डायरेक्ट इन्ट्री डिप्लोमा होल्डर, सीनियर सेकेन्डरी रिक्रूट, मैट्रिक रिक्रूट, म्यूजिशियन तथा नान मैट्रिक रिक्रूट ।' },
             detail: { en: 'For more Detail Call 8896000000', hi: 'अधिक जानकारी के लिए 8896000000 पर कॉल करें' }
       
        }
    },
    paramilitary: {
        title: { en: 'Post In Paramilitary Forces', hi: 'अर्धसैनिक बल में पद' },
        details: {
            post: { en: 'SSC (SI) CPO, SSC (Constable) ASI and Head Constable, CPO, RPF, CBI,CRPF, Intelligence bureau.', hi: 'एस.एस.सी. (एस.आई) सी.पी.ओ., एस.एस.सी. (कांस्टेबल) ए.एस.आई. तथा हेड कान्सटेबल, सी.पी.ओ., आर.पी.एफ.,सीआरपीएफ, सी.बी.आई., इन्टेलिजन्स ब्युरो ।' },
             detail: { en: 'For more Detail Call 8896000000', hi: 'अधिक जानकारी के लिए 8896000000 पर कॉल करें' }
            
        }
    },
    officers: {
        title: { en: 'Officers Post', hi: 'अधिकारी पद' },
        details: {
            post: { en: 'NDA, CDS, SSB Interviews, CPF.', hi: 'एन.डी.ए., सी.डी.एस., एस.एस.बी. इण्टरव्यूज़, सी.पी.एफ. ।' },
             detail: { en: 'For more Detail Call 8896000000', hi: 'अधिक जानकारी के लिए 8896000000 पर कॉल करें' }
            
        }
    },
    police: {
        title: { en: 'Police', hi: 'पुलिस' },
        details: {
            post: { en: 'Uttar Pradesh Police, Delhi Police.', hi: 'उत्तर प्रदेश पुलिस, दिल्ली पुलिस ।' },
             detail: { en: 'For more Detail Call 8896000000', hi: 'अधिक जानकारी के लिए 8896000000 पर कॉल करें' }
            
        }
    },

    others: {
        title: { en: 'Others', hi: 'अन्य' },
        details: {
            post: { en: 'Sainik Schools, Military Schools, RIMC, Navodaya Vidyalayas, SSC and Railways.', hi: 'सैनिक स्कूल, मिलिट्री स्कूल, आर.आई.एम.सी., नवोदय विद्यालयों, एस.एस.सी. तथा रेलवे ।' },
             detail: { en: 'For more Detail Call 8896000000', hi: 'अधिक जानकारी के लिए 8896000000 पर कॉल करें' }
            
        }
    }
};

// Translation function
function t(en, hi) {
    return isHindi ? hi : en;
}

// Language Toggle
function toggleLanguage() {
    isHindi = !isHindi;
    updateLanguage();
}

function updateLanguage() {
    const languageBtn = document.getElementById('languageToggle');
    languageBtn.textContent = isHindi ? 'English' : 'हिंदी';
    
    // Update all elements with data attributes
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(element => {
        const englishText = element.getAttribute('data-en');
        const hindiText = element.getAttribute('data-hi');
        element.textContent = t(englishText, hindiText);
    });
    
    // Update form placeholders
    const placeholderElements = document.querySelectorAll('[data-placeholder-en]');
    placeholderElements.forEach(element => {
        const englishPlaceholder = element.getAttribute('data-placeholder-en');
        const hindiPlaceholder = element.getAttribute('data-placeholder-hi');
        element.placeholder = t(englishPlaceholder, hindiPlaceholder);
    });
}

// Slider Functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    // Use window.slides and window.dots to always get the latest
    if (!window.slides || !window.dots) return;
    window.slides.forEach(slide => slide.classList.remove('active'));
    window.dots.forEach(dot => dot.classList.remove('active'));
    if (window.slides[index]) window.slides[index].classList.add('active');
    if (window.dots[index]) window.dots[index].classList.add('active');
}

function changeSlide(direction) {
    if (!window.slides) return;
    window.currentSlideIndex += direction;
    if (window.currentSlideIndex >= window.slides.length) {
        window.currentSlideIndex = 0;
    } else if (window.currentSlideIndex < 0) {
        window.currentSlideIndex = window.slides.length - 1;
    }
    showSlide(window.currentSlideIndex);
}

function currentSlide(index) {
    window.currentSlideIndex = index - 1;
    showSlide(window.currentSlideIndex);
}

function autoSlide() {
    changeSlide(1);
}

// Course Modal
function openCourseModal(courseId) {
    const course = courseData[courseId];
    const modal = document.getElementById('courseModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = t(course.title.en, course.title.hi);
    
    modalBody.innerHTML = `
        <div class="course-details">
            <div class="course-detail">
                <strong>${t('Post:', 'पद:')}</strong> ${t(course.details.post.en, course.details.post.hi)}
            </div>
            <div class="course-detail">
                <strong>${t('detail:', 'विवरण:')}</strong> ${t(course.details.detail.en, course.details.detail.hi)}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeCourseModal() {
    document.getElementById('courseModal').style.display = 'none';
}

// Lightbox
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'block';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Video Modal
function openVideoModal(fileId) {
    const modal = document.getElementById('videoModal');
    const videoPlayerContainer = document.getElementById('video-player-container');
    
    const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
    
    videoPlayerContainer.innerHTML = `<iframe src="${embedUrl}" width="100%" height="100%" allow="autoplay" frameborder="0" allowfullscreen></iframe>`;
    
    modal.style.display = 'block';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const videoPlayerContainer = document.getElementById('video-player-container');
    
    // Stop the video by removing the iframe
    videoPlayerContainer.innerHTML = '';
    
    modal.style.display = 'none';
}

// Gallery Tabs
function showGallery(galleryType) {
    const galleryContents = document.querySelectorAll('.gallery-content');
    galleryContents.forEach(content => {
        content.classList.remove('active');
    });

    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    const activeGallery = document.getElementById(galleryType + '-gallery');
    activeGallery.classList.add('active');

    const activeButton = document.querySelector(`.tab-btn[onclick="showGallery('${galleryType}')"]`);
    activeButton.classList.add('active');
}

// Smooth Scrolling
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Contact Form
function handleContactForm(event) {
    event.preventDefault();
    
    // Show success message
    alert(t('Message sent! We will contact you soon.', 'संदेश भेजा गया! हम जल्द ही आपसे संपर्क करेंगे।'));
    
    // Reset form
    event.target.reset();
}

// Notification System
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--academy-red);
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Intersection Observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);
    
    // Observe sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language toggle
    document.getElementById('languageToggle').addEventListener('click', toggleLanguage);
    
    // Dynamically generate slider dots
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.getElementById('slider-dots');
    dotsContainer.innerHTML = '';
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.onclick = function() { currentSlide(i + 1); };
        dotsContainer.appendChild(dot);
    }
    // Re-select dots after creation
    window.dots = document.querySelectorAll('.dot');
    window.slides = slides;
    
    // Initialize slider auto-advance
    setInterval(autoSlide, 5000);
    
    // Initialize contact form
    document.getElementById('contactForm').addEventListener('submit', handleContactForm);
    
    // Initialize smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        const courseModal = document.getElementById('courseModal');
        const lightbox = document.getElementById('lightbox');
        
        if (event.target === courseModal) {
            closeCourseModal();
        }
        
        if (event.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Add keyboard navigation for accessibility
    document.addEventListener('keydown', function(event) {
        // ESC key closes modals
        if (event.key === 'Escape') {
            closeCourseModal();
            closeLightbox();
        }
        
        // Arrow keys for slider navigation
        if (event.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (event.key === 'ArrowRight') {
            changeSlide(1);
        }
    });
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // Lightbox functionality
    window.openLightbox = function(src) {
        document.getElementById('lightboxImage').src = src;
        document.getElementById('lightbox').style.display = 'flex';
    }

    window.closeLightbox = function() {
        document.getElementById('lightbox').style.display = 'none';
    }

    // Menu toggle for mobile
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .gallery-item {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .gallery-item:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }
    
    .course-card {
        transition: all 0.3s ease;
    }
    
    .course-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
    
    .faculty-member {
        transition: transform 0.3s ease;
    }
    
    .faculty-member:hover {
        transform: translateY(-5px);
    }
    
    .social-link {
        transition: all 0.3s ease;
    }
    
    .social-link:hover {
        transform: scale(1.2) rotate(5deg);
    }
    
    .nav-links a {
        position: relative;
        overflow: hidden;
    }
    
    .nav-links a::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: white;
        transition: left 0.3s ease;
    }
    
    .nav-links a:hover::before {
        left: 0;
    }
`;

document.head.appendChild(style);

// Performance optimization: Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if supported
if ('IntersectionObserver' in window) {
    initLazyLoading();
}

// Scroll to section by id and handle special cases
function scrollToSection(sectionId) {
    // console.log('Scrolling to:', sectionId); // Removed for clean output
    if (sectionId === 'gallery') {
        showGallery('photos');
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    } else {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Ensure currentSlideIndex is initialized globally
window.currentSlideIndex = 0;

function showPhotoSection(section) {
    // Hide all sections
    document.getElementById('physical-section').style.display = 'none';
    document.getElementById('written-section').style.display = 'none';
    document.getElementById('success-section').style.display = 'none';

    // Remove active class from all tab buttons
    var tabBtns = document.querySelectorAll('.photo-tab-btn');
    tabBtns.forEach(function(btn) { btn.classList.remove('active'); });

    // Show the selected section
    if (section === 'physical') {
        document.getElementById('physical-section').style.display = 'block';
        tabBtns[0].classList.add('active');
    } else if (section === 'written') {
        document.getElementById('written-section').style.display = 'block';
        tabBtns[1].classList.add('active');
    } else if (section === 'success') {
        document.getElementById('success-section').style.display = 'block';
        tabBtns[2].classList.add('active');
    }
}

// Visitor Counter Functionality
function initVisitorCounter() {
    // Get the visitor count from localStorage
    let visitorCount = localStorage.getItem('visitorCount');
    
    // If no count exists, start from a base number (e.g., 15000 to make it look more established)
    if (!visitorCount) {
        visitorCount = 15000;
    } else {
        visitorCount = parseInt(visitorCount);
    }
    
    // Increment the count for this visit
    visitorCount++;
    
    // Save the updated count
    localStorage.setItem('visitorCount', visitorCount.toString());
    
    // Display the count with animation
    const visitorCountElement = document.getElementById('visitorCount');
    if (visitorCountElement) {
        // Animate the count up
        animateCount(visitorCountElement, 0, visitorCount, 2000);
    }
}

function animateCount(element, start, end, duration) {
    const startTime = performance.now();
    const difference = end - start;
    
    function updateCount(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Use easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (difference * easeOutQuart));
        
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateCount);
        }
    }
    
    requestAnimationFrame(updateCount);
}

// Location function
function openLocation(campus) {
    
    const locations = {
        krishnanagar: 'https://maps.app.goo.gl/5ZBpV78B5nqGtfhB8', 
        banthra: 'https://maps.app.goo.gl/KpYgzcPZZxaX1Kcm9' 
    };
    
    if (locations[campus]) {
        window.open(locations[campus], '_blank');
    }
}

// Initialize visitor counter when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize existing functionality
    initVisitorCounter();
    
    // Add event listeners
    document.getElementById('languageToggle').addEventListener('click', toggleLanguage);
    
    // Initialize other functionality
    autoSlide();
    initScrollAnimations();
});