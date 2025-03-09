// Variables
let currentPage = 'home';
let currentLanguage = 'en';

// Translations
const translations = {
    en: {
        // Header
        siteLogo: "Company Name",
        home: "Home",
        about: "About",
        services: "Services",
        contact: "Contact",
        
        // Footer
        footerAbout: "About Us",
        footerAboutText: "We are dedicated to providing exceptional services and solutions.",
        footerLinks: "Quick Links",
        footerHomeLink: "Home",
        footerAboutLink: "About",
        footerServicesLink: "Services",
        footerContactLink: "Contact",
        footerContact: "Contact",
        footerAddress: "123 Main Street, Bangkok",
        footerPhone: "+66 2 123 4567",
        footerEmail: "info@example.com",
        footerCopyright: "© 2025 Company Name. All Rights Reserved."
    },
    th: {
        // Header
        siteLogo: "ชื่อบริษัท",
        home: "หน้าแรก",
        about: "เกี่ยวกับเรา",
        services: "บริการ",
        contact: "ติดต่อเรา",
        
        // Footer
        footerAbout: "เกี่ยวกับเรา",
        footerAboutText: "เรามุ่งมั่นที่จะให้บริการและโซลูชันที่ยอดเยี่ยม",
        footerLinks: "ลิงก์ด่วน",
        footerHomeLink: "หน้าแรก",
        footerAboutLink: "เกี่ยวกับเรา",
        footerServicesLink: "บริการ",
        footerContactLink: "ติดต่อเรา",
        footerContact: "ติดต่อ",
        footerAddress: "123 ถนนหลัก, กรุงเทพฯ",
        footerPhone: "+66 2 123 4567",
        footerEmail: "info@example.com",
        footerCopyright: "© 2025 ชื่อบริษัท สงวนลิขสิทธิ์ทั้งหมด"
    }
};

// Hide all content
function hideAllContent() {
    document.querySelectorAll('.content').forEach(content => {
        content.classList.add('hidden');
    });
}

// Show specific page content
function showPageContent(page) {
    currentPage = page;
    hideAllContent();
    
    const contentId = `content-${page}-${currentLanguage}`;
    const element = document.getElementById(contentId);
    
    if (element) {
        element.classList.remove('hidden');
    } else {
        // Fallback to English if specific language content is not available
        document.getElementById(`content-${page}-en`).classList.remove('hidden');
    }
}

// Update header text
function updateHeaderText(lang) {
    document.getElementById('site-logo').textContent = translations[lang].siteLogo;
    document.getElementById('home-link').textContent = translations[lang].home;
    document.getElementById('about-link').textContent = translations[lang].about;
    document.getElementById('services-link').textContent = translations[lang].services;
    document.getElementById('contact-link').textContent = translations[lang].contact;
}

// Update footer text
function updateFooterText(lang) {
    // About section
    document.getElementById('footer-about').textContent = translations[lang].footerAbout;
    document.getElementById('footer-about-text').textContent = translations[lang].footerAboutText;
    
    // Quick links section
    document.getElementById('footer-links').textContent = translations[lang].footerLinks;
    document.getElementById('footer-home-link').textContent = translations[lang].footerHomeLink;
    document.getElementById('footer-about-link').textContent = translations[lang].footerAboutLink;
    document.getElementById('footer-services-link').textContent = translations[lang].footerServicesLink;
    document.getElementById('footer-contact-link').textContent = translations[lang].footerContactLink;
    
    // Contact section
    document.getElementById('footer-contact').textContent = translations[lang].footerContact;
    document.getElementById('footer-address').textContent = translations[lang].footerAddress;
    document.getElementById('footer-phone').textContent = translations[lang].footerPhone;
    document.getElementById('footer-email').textContent = translations[lang].footerEmail;
    
    // Copyright
    document.getElementById('footer-copyright').textContent = translations[lang].footerCopyright;
}

// Toggle language between EN and TH
function toggleLanguage() {
    const toggle = document.getElementById('language-toggle');
    currentLanguage = toggle.checked ? 'th' : 'en';
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Update header text
    updateHeaderText(currentLanguage);
    
    // Update footer text
    updateFooterText(currentLanguage);
    
    // Update content based on current page
    showPageContent(currentPage);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set up navigation links
    document.getElementById('home-link').addEventListener('click', function(e) {
        e.preventDefault();
        showPageContent('home');
    });
    
    document.getElementById('about-link').addEventListener('click', function(e) {
        e.preventDefault();
        showPageContent('about');
    });
    
    document.getElementById('services-link').addEventListener('click', function(e) {
        e.preventDefault();
        showPageContent('services');
    });
    
    document.getElementById('contact-link').addEventListener('click', function(e) {
        e.preventDefault();
        showPageContent('contact');
    });
    
    // Set up footer navigation links
    document.getElementById('footer-home-link').addEventListener('click', function(e) {
        e.preventDefault();
        showPageContent('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.getElementById('footer-about-link').addEventListener('click', function(e) {
        e.preventDefault();
        showPageContent('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.getElementById('footer-services-link').addEventListener('click', function(e) {
        e.preventDefault();
        showPageContent('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.getElementById('footer-contact-link').addEventListener('click', function(e) {
        e.preventDefault();
        showPageContent('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Initialize with English
    currentLanguage = 'en';
    document.getElementById('language-toggle').checked = false;
    updateHeaderText(currentLanguage);
    updateFooterText(currentLanguage);
    showPageContent('home');
});
