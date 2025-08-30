/**
 * Penn AI Mode Effect
 * Recreates Google's AI Mode rainbow effect with Penn colors
 */

(function() {
  'use strict';

  // Penn AI Mode API
  window.PennAI = {
    /**
     * Trigger the AI flash animation (like Google's AI Mode)
     * @param {number} delay - Optional delay in milliseconds before flash
     */
    flash: function(delay = 0) {
      setTimeout(() => {
        document.body.classList.remove('penn-gradient-pulse', 'penn-gradient-expand');
        document.body.classList.add('penn-gradient-flash');
        
        // Remove class after animation completes
        setTimeout(() => {
          document.body.classList.remove('penn-gradient-flash');
        }, 2000);
      }, delay);
    },

    /**
     * Trigger expand animation (iOS-style)
     */
    expand: function() {
      document.body.classList.remove('penn-gradient-flash', 'penn-gradient-pulse');
      document.body.classList.add('penn-gradient-expand');
      
      setTimeout(() => {
        document.body.classList.remove('penn-gradient-expand');
      }, 1800);
    },

    /**
     * Start continuous rotation (ambient AI mode)
     */
    startRotation: function() {
      document.body.classList.remove('penn-gradient-flash', 'penn-gradient-expand');
      document.body.classList.add('penn-gradient-pulse');
    },

    /**
     * Stop all animations
     */
    stop: function() {
      document.body.classList.remove('penn-gradient-flash', 'penn-gradient-pulse', 'penn-gradient-expand');
    },

    /**
     * Flash on specific element with action sweep effect
     * @param {HTMLElement|string} element - Element or selector
     */
    flashElement: function(element) {
      const el = typeof element === 'string' 
        ? document.querySelector(element) 
        : element;
      
      if (el) {
        el.classList.add('penn-action-flash');
        
        // Remove class after animation
        setTimeout(() => {
          el.classList.remove('penn-action-flash');
        }, 800);
      }
    }
  };

  // Set up backward compatibility immediately
  window.PennGradient = window.PennAI;

  // Auto-flash on certain events (optional)
  document.addEventListener('DOMContentLoaded', function() {
    // Flash on page load (subtle welcome effect)
    if (window.location.pathname.includes('/posts/') || 
        window.location.pathname.includes('/staffers/')) {
      PennAI.flash(300);
    }

    // Flash on successful form submissions
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', function(e) {
        // Only flash if form validates
        if (form.checkValidity()) {
          PennAI.flash();
        }
      });
    });

    // Flash on edit button clicks
    document.querySelectorAll('.edit-link a').forEach(link => {
      link.addEventListener('click', function(e) {
        PennAI.flash();
      });
    });

    // Keyboard shortcut for manual trigger (Ctrl/Cmd + Shift + G)
    document.addEventListener('keydown', function(e) {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'G') {
        e.preventDefault();
        PennAI.flash();
      }
    });

    // Add console message for developers
    console.log(
      '%c🎨 Penn AI Mode Ready!',
      'color: #011F5B; font-weight: bold; font-size: 14px;'
    );
    console.log(
      'Commands:\n' +
      '  PennAI.flash()        - Google-style AI flash\n' +
      '  PennAI.expand()       - iOS-style expansion\n' +
      '  PennAI.startRotation() - Continuous rotation\n' +
      '  PennAI.stop()         - Stop all animations\n' +
      '  Keyboard: Ctrl/Cmd+Shift+G - Manual flash'
    );
  });

  // Expose API for use in other scripts
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.PennAI;
  }
})();