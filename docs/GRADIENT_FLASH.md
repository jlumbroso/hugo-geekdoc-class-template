# Penn Gradient Flash Animation

A Google AI-inspired gradient animation using Penn's signature colors (blue, electric blue, and red).

## Features

### 1. **Staffers Page Improvements**
- ✅ Removed distracting vertical hover movement
- ✅ Kept subtle gradient bar animation at top
- ✅ Maintained subtle shadow on hover
- ✅ Removed image border color changes

### 2. **Gradient Flash Animation**
The divider line between header and content can now flash with Penn's colors, similar to Google's AI mode.

## How to Use

### JavaScript API

Open the browser console and use these commands:

```javascript
// Single flash animation
PennGradient.flash()

// Flash with delay (milliseconds)
PennGradient.flash(1000)

// Start continuous pulsing
PennGradient.startPulse()

// Stop pulsing
PennGradient.stopPulse()

// Flash a specific element
PennGradient.flashElement('.gdoc-post__title')
```

### Keyboard Shortcut

Press **Ctrl+Shift+G** (or **Cmd+Shift+G** on Mac) to trigger a flash manually.

### Automatic Triggers

The gradient flash automatically triggers on:
- Posts and staffers page loads (subtle welcome effect)
- Form submissions
- Edit button clicks

## CSS Classes

You can also trigger animations by adding CSS classes:

```javascript
// Add flash animation
document.body.classList.add('penn-gradient-flash')

// Add continuous pulse
document.body.classList.add('penn-gradient-pulse')

// Add action sweep to element
element.classList.add('penn-action-flash')
```

## Customization

Edit `/assets/css/staffers-and-gradient.css` to:
- Adjust animation timing
- Change gradient colors
- Modify animation intensity

## Visual Effects

1. **Flash**: Quick 1.5s gradient sweep across the divider
2. **Pulse**: Continuous 3s breathing effect
3. **Action Sweep**: Element-specific highlight effect

The gradient uses Penn's brand colors:
- Penn Blue (#011F5B)
- Penn Electric Blue (#019CDE)
- Penn Red (#990000)