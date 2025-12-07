/*
 * Custom Scroll-Spy for Jekyll Chirpy Theme (Optimized for Sidebar Navigation)
 */

$(document).ready(function() {
    // 1. Target the main content container for scrolling
    var $scrollArea = $('body'); 

    // 2. Target all links in the sidebar that contain a '#' (internal links)
    // Chirpy's TOC is often auto-generated and placed in the sidebar.
    var $navLinks = $('#sidebar a[href^="#"]'); 

    // 3. Initialize the Bootstrap Scrollspy plugin on the body
    $scrollArea.scrollspy({ 
        target: '#sidebar', // The container that holds the nav links (where we want to apply 'active')
        offset: 80 // Offset for the fixed elements (header/sidebar)
    });

    // Optional: Smooth scrolling for internal navigation links
    $navLinks.on('click', function(e) {
        var href = $(this).attr('href');
        
        // Only trigger for internal links (starting with #, but not just #)
        if (href && href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            
            // Scroll the body (the main scroll container)
            $('html, body').animate({
                scrollTop: $(href).offset().top - 70 // Scroll to element position minus padding/header height
            }, 600);
        }
    });

    // *************************************************************************
    // IMPORTANT: To make this work, the sidebar must contain links with IDs like #home-focus
    // Chirpy's TOC is usually disabled on pages with toc: false (like your index.md).
    // You MUST ensure your sidebar has these links! 
    // If they aren't auto-generated, you must create them in the sidebar's HTML.
    // *************************************************************************
});