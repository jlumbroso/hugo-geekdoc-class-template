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
     * Both top and header by default
     * @param {number} delay - Optional delay in milliseconds before flash
     */
    flash: function(delay = 0) {
      this.flashBoth(delay);
    },

    /**
     * Trigger only the top flash animation
     * @param {number} delay - Optional delay in milliseconds before flash
     */
    flashTop: function(delay = 0) {
      setTimeout(() => {
        document.body.classList.remove('penn-gradient-pulse-top', 'penn-gradient-expand-top');
        document.body.classList.add('penn-gradient-flash-top');
        
        // Remove class after animation completes
        setTimeout(() => {
          document.body.classList.remove('penn-gradient-flash-top');
        }, 2000);
      }, delay);
    },

    /**
     * Trigger only the header border flash animation
     * @param {number} delay - Optional delay in milliseconds before flash
     */
    flashHeader: function(delay = 0) {
      setTimeout(() => {
        document.body.classList.add('penn-gradient-flash-header');
        
        // Remove class after animation completes
        setTimeout(() => {
          document.body.classList.remove('penn-gradient-flash-header');
        }, 2000);
      }, delay);
    },

    /**
     * Trigger both flashes with cascading effect
     * @param {number} delay - Optional delay in milliseconds before flash
     * @param {number} cascade - Delay between top and header (default 250ms)
     */
    flashBoth: function(delay = 0, cascade = 250) {
      this.flashTop(delay);
      this.flashHeader(delay + cascade);  // Header follows after cascade delay
    },
    
    /**
     * Trigger both flashes simultaneously (no cascade)
     * @param {number} delay - Optional delay in milliseconds before flash
     */
    flashSimultaneous: function(delay = 0) {
      this.flashTop(delay);
      this.flashHeader(delay);
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
    },

    /**
     * Enable AI button effects globally
     */
    enableButtons: function() {
      document.body.classList.add('penn-ai-buttons-enabled');
      console.log('🎨 Penn AI button effects enabled');
    },

    /**
     * Disable AI button effects globally
     */
    disableButtons: function() {
      document.body.classList.remove('penn-ai-buttons-enabled');
      console.log('Penn AI button effects disabled');
    },

    /**
     * Toggle AI button effects
     */
    toggleButtons: function() {
      if (document.body.classList.contains('penn-ai-buttons-enabled')) {
        this.disableButtons();
      } else {
        this.enableButtons();
      }
    },

    /**
     * Add AI effect to specific button(s)
     * @param {string|HTMLElement|NodeList} selector - Button selector or element(s)
     */
    addToButton: function(selector) {
      const elements = typeof selector === 'string' 
        ? document.querySelectorAll(selector)
        : selector instanceof NodeList 
        ? selector 
        : [selector];
      
      elements.forEach(el => {
        el.classList.add('penn-ai-button');
        el.classList.remove('penn-ai-inactive');
      });
    },

    /**
     * Remove AI effect from specific button(s)
     * @param {string|HTMLElement|NodeList} selector - Button selector or element(s)
     */
    removeFromButton: function(selector) {
      const elements = typeof selector === 'string' 
        ? document.querySelectorAll(selector)
        : selector instanceof NodeList 
        ? selector 
        : [selector];
      
      elements.forEach(el => {
        el.classList.add('penn-ai-inactive');
      });
    },

    /**
     * Enable AI input/text field effects globally
     */
    enableInputs: function() {
      document.body.classList.add('penn-ai-inputs-enabled');
      console.log('🎨 Penn AI input effects enabled');
    },

    /**
     * Disable AI input effects globally
     */
    disableInputs: function() {
      document.body.classList.remove('penn-ai-inputs-enabled');
      console.log('Penn AI input effects disabled');
    },

    /**
     * Toggle AI input effects
     */
    toggleInputs: function() {
      if (document.body.classList.contains('penn-ai-inputs-enabled')) {
        this.disableInputs();
      } else {
        this.enableInputs();
      }
    },

    /**
     * Add AI effect to specific input(s) - wraps them if needed
     * @param {string|HTMLElement|NodeList} selector - Input selector or element(s)
     */
    addToInput: function(selector) {
      const elements = typeof selector === 'string' 
        ? document.querySelectorAll(selector)
        : selector instanceof NodeList 
        ? selector 
        : [selector];
      
      elements.forEach(input => {
        // For search input, use the existing parent
        if (input.id === 'gdoc-search-input' || input.classList.contains('gdoc-search__input')) {
          // Use existing parent container
          const parent = input.parentElement;
          parent.classList.add('penn-ai-input-wrapper');
          input.classList.add('penn-ai-input');
          parent.classList.remove('penn-ai-inactive');
        } else {
          // For other inputs, wrap them
          if (!input.parentElement.classList.contains('penn-ai-input-wrapper')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'penn-ai-input-wrapper';
            input.parentNode.insertBefore(wrapper, input);
            wrapper.appendChild(input);
          }
          input.classList.add('penn-ai-input');
          input.parentElement.classList.remove('penn-ai-inactive');
        }
      });
    },

    /**
     * Remove AI effect from specific input(s)
     * @param {string|HTMLElement|NodeList} selector - Input selector or element(s)
     */
    removeFromInput: function(selector) {
      const elements = typeof selector === 'string' 
        ? document.querySelectorAll(selector)
        : selector instanceof NodeList 
        ? selector 
        : [selector];
      
      elements.forEach(input => {
        if (input.parentElement.classList.contains('penn-ai-input-wrapper')) {
          input.parentElement.classList.add('penn-ai-inactive');
        }
      });
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
        PennAI.flashBoth();
      }
    });

    // Add console message for developers
    console.log(
      '%c🎨 Penn AI Mode Ready!',
      'color: #011F5B; font-weight: bold; font-size: 14px;'
    );
    console.log(
      'Commands:\n' +
      '  === Flash Effects ===\n' +
      '  PennAI.flash()             - Cascading flash (top → header)\n' +
      '  PennAI.flashTop()          - Top gradient flash only\n' +
      '  PennAI.flashHeader()       - Header border flash only\n' +
      '  PennAI.flashBoth()         - Cascading flash (customizable delay)\n' +
      '  PennAI.flashSimultaneous() - Both flashes at once\n' +
      '  \n' +
      '  === Input/Text Field AI Effects ===\n' +
      '  PennAI.enableInputs()      - Enable AI effect on all inputs\n' +
      '  PennAI.disableInputs()     - Disable AI effect on all inputs\n' +
      '  PennAI.toggleInputs()      - Toggle input AI effects\n' +
      '  PennAI.addToInput("#search") - Add AI effect to search field\n' +
      '  PennAI.removeFromInput(s)  - Remove AI effect from input(s)\n' +
      '  \n' +
      '  === Button AI Effects ===\n' +
      '  PennAI.enableButtons()     - Enable AI effect on all buttons\n' +
      '  PennAI.disableButtons()    - Disable AI effect on all buttons\n' +
      '  PennAI.toggleButtons()     - Toggle button AI effects\n' +
      '  PennAI.addToButton(sel)    - Add AI effect to specific button(s)\n' +
      '  PennAI.removeFromButton(s) - Remove AI effect from button(s)\n' +
      '  \n' +
      '  === Other Effects ===\n' +
      '  PennAI.expand()            - iOS-style expansion\n' +
      '  PennAI.startRotation()     - Continuous rotation\n' +
      '  PennAI.stop()              - Stop all animations\n' +
      '  \n' +
      '  Keyboard: Ctrl/Cmd+Shift+G - Cascading flash'
    );
    
    // Quick start examples
    console.log(
      '%cQuick Start Examples:',
      'color: #019CDE; font-weight: bold;',
      '\n' +
      '1. Test on search field:\n' +
      '   PennAI.enableInputs()\n' + 
      '   PennAI.addToInput("#search")\n' +
      '\n' +
      '2. Test on button:\n' +
      '   PennAI.enableButtons()\n' +
      '   PennAI.addToButton(".gdoc-button")\n'
    );
  });

  // Expose API for use in other scripts
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.PennAI;
  }
})();