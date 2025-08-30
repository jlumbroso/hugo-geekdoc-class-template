# Penn Engineering Theme Guide

## Overview

This Hugo template has been beautifully themed with Penn Engineering's official brand guidelines, creating an elegant, sumptuous, and on-brand experience for course websites. The theme implements Penn Engineering's "Reinventing Invention" brand narrative with careful attention to typography, color, and visual design.

## Theme Features

### 🎨 Brand Elements

1. **Official Penn Engineering Colors**
   - Penn Blue (#011F5B) - Primary brand color
   - Penn Red (#990000) - Headlines and emphasis
   - Electric Blue (#63C7FF) - Accents and interactive elements
   - Full grayscale palette for nuanced design

2. **Typography System**
   - **TWK Everett** - Primary typeface for body text, headlines, navigation
   - **Pitch Sans** - Secondary font for:
     - Metadata (dates, GitHub links, footer items)
     - Technical content (code, buttons, search)
     - Annotations and subheadings
     - Module dates and schedule headers
   - Web fonts loaded directly from Penn Engineering CDN

3. **Visual Motifs**
   - Lightning/Spark imagery representing innovation
   - Penn Engineering shield logo in header
   - Gradient effects for depth and elegance
   - Subtle background patterns

### ✨ Design Enhancements

- **Elegant Animations**: Smooth transitions and hover effects
- **Card-based Layouts**: Modern, clean content presentation
- **Responsive Design**: Beautiful on all devices
- **Dark Mode Support**: Carefully crafted dark theme
- **Accessibility**: WCAG AA compliant with focus indicators

## File Structure

```
static/
├── themes/
│   └── penn-engineering.css    # Main Penn Engineering theme
├── custom.css                   # Theme switcher (one line to change themes!)
├── custom-unbranded.css        # Original green theme (fallback)
├── custom-original.css         # Backup of original with Penn colors
├── penn-engineering-logo.png   # Penn Engineering logo (white on transparent)
├── penn-engineering-shield.png # Penn shield for social media
└── ...

assets/custom/
├── penn-engineering-theme.scss  # SCSS variables and mixins
└── ...

config/_default/
├── params.yaml                 # Logo and images configured here
└── ...
```

## Customization Guide

### Quick Theme Switch

**To enable/disable Penn Engineering branding:**

Edit `static/custom.css` (just one line!):

```css
/* Penn Engineering Theme - ENABLED */
@import url("themes/penn-engineering.css");

/* To DISABLE Penn branding, comment the line above and uncomment one below: */
/* @import url("custom-unbranded.css"); */  /* Green theme */
/* @import url("themes/evergreen-harmony.css"); */
/* @import url("themes/geekdocs-green.css"); */
```

**To remove Penn-specific content:**
1. Change the theme import in `custom.css`
2. Update `config/_default/params.yaml`:
   - Remove or comment out `geekdocLogo`
   - Change `images` back to default
3. Update site title in `config/_default/config.yaml`

### Color Customization

Override Penn Engineering colors in `static/custom.css`:

```css
:root {
  /* Override primary colors */
  --penn-blue: #011F5B;     /* Change Penn Blue */
  --penn-red: #990000;      /* Change Penn Red */
  --penn-electric-blue: #63C7FF; /* Change accent */
  
  /* Override specific elements */
  --header-background: var(--penn-blue);
  --link-color: var(--penn-blue);
}
```

### Typography Customization

Adjust fonts and sizes:

```css
:root {
  /* Change font families */
  --penn-font-primary: "TWK Everett", Arial, sans-serif;
  --penn-font-secondary: "Pitch Sans", monospace;
  
  /* Adjust font weights */
  --penn-font-bold: 700;
  --penn-font-regular: 400;
}

/* Custom heading sizes */
h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
```

### Component Styling

#### Announcements
```css
/* Custom announcement style */
.announcement-special {
  background: linear-gradient(135deg, #F5F7FA 0%, #FFFFFF 100%);
  border-left: 4px solid var(--penn-red);
  box-shadow: var(--penn-shadow-lg);
}
```

#### Schedule Events
```css
/* Custom event colors */
.schedule-event.workshop {
  background: linear-gradient(135deg, #7B2D8E 0%, #9B4DAE 100%);
  color: white;
}
```

#### Staff Cards
```css
/* Enhanced staff card hover */
.staffer:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: var(--penn-shadow-xl);
}
```

### Adding Visual Assets

The theme automatically includes:
- Penn Engineering shield logo in header
- Spark of Ingenuity background pattern (subtle)
- Lightning emoji (⚡) for announcements

To add more Penn Engineering visuals:

```css
/* Use Penn Engineering technical illustrations */
.hero-section {
  background-image: url("https://jlumbroso.github.io/penn-engineering-web-assets/visuals/blue/laptop.png");
  background-size: contain;
  background-position: right center;
}
```

### Advanced SCSS Customization

For more control, edit `assets/custom/penn-engineering-theme.scss`:

```scss
// Use Penn mixins
.custom-button {
  @include penn-button($penn-red, $penn-white);
}

.custom-card {
  @include penn-card(true); // true enables hover effect
}

// Responsive design
.custom-element {
  @include penn-responsive('md') {
    font-size: 14px;
  }
}
```

## CSS Variables Reference

### Core Colors
- `--penn-blue`: #011F5B
- `--penn-red`: #990000
- `--penn-electric-blue`: #63C7FF
- `--penn-dark-gray`: #2D2926
- `--penn-light-gray`: #F2F2F2

### Typography
- `--penn-font-primary`: TWK Everett font stack
- `--penn-font-secondary`: Pitch Sans font stack
- `--penn-font-bold`: 700
- `--penn-font-regular`: 400

### Spacing
- `--penn-spacing-xs`: 0.25rem
- `--penn-spacing-sm`: 0.5rem
- `--penn-spacing-md`: 1rem
- `--penn-spacing-lg`: 1.5rem
- `--penn-spacing-xl`: 2rem

### Shadows
- `--penn-shadow-sm`: Small shadow
- `--penn-shadow-md`: Medium shadow
- `--penn-shadow-lg`: Large shadow
- `--penn-shadow-xl`: Extra large shadow

### Transitions
- `--penn-transition-fast`: 150ms
- `--penn-transition-base`: 250ms
- `--penn-transition-slow`: 350ms

## Best Practices

### 1. Maintain Brand Consistency
- Use Penn Blue for primary UI elements
- Use Penn Red for important headlines
- Use Electric Blue for interactive accents
- Keep the Penn Engineering shield visible

### 2. Typography Guidelines
- Use TWK Everett for all body text and headlines
- Use Pitch Sans for technical content, metadata, and annotations
- Maintain proper hierarchy with font weights

### 3. Accessibility
- Ensure color contrast ratios meet WCAG AA standards
- Maintain focus indicators for keyboard navigation
- Use semantic HTML with proper heading structure

### 4. Performance
- The theme uses web fonts from Penn Engineering's CDN
- CSS is optimized and minified
- Animations use GPU-accelerated properties

## Extending the Theme

### Creating New Color Schemes

Create a new file `static/themes/my-department.css`:

```css
@import url("penn-engineering.css");

:root {
  /* Override for specific department */
  --penn-blue: #004785;  /* Different blue */
  --header-background: var(--penn-blue);
}
```

### Adding Department-Specific Elements

```css
/* Computer Science Department */
.cs-branding::before {
  content: "COMPUTER & INFORMATION SCIENCE";
  font-family: var(--penn-font-secondary);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: var(--penn-electric-blue);
}

/* Bioengineering Department */
.bioeng-pattern {
  background-image: url("https://jlumbroso.github.io/penn-engineering-web-assets/visuals/blue/dna-flask.png");
}
```

## Resources

- **Penn Engineering Brand Guidelines**: See `penn-engineering-web-assets/docs/`
- **Brand Assets**: https://jlumbroso.github.io/penn-engineering-web-assets/
- **Font Files**: Automatically loaded from CDN
- **Visual Library**: Blue and red technical illustrations available

## Key Features & Improvements

### Theme Separation
- **Easy Toggle**: Switch between Penn Engineering and unbranded themes with one line
- **Clean Architecture**: All Penn-specific styling isolated in `penn-engineering.css`
- **Universal Styles**: Common customizations preserved across all themes

### Typography Enhancements
- **Complete Font Coverage**: TWK Everett and Pitch Sans applied everywhere
- **Override System Fonts**: Replaced Metropolis with Penn fonts throughout
- **Brand-Compliant Usage**: 
  - Everett for main content and navigation
  - Pitch Sans for metadata, technical elements (per guidelines)
- **Fixed Header Styling**: White text on blue background, proper logo sizing

### Visual Improvements
- **Module Links**: Clear visual feedback with hover effects
- **Placeholder Links**: Grayed out with dashed underline (#)  
- **Active Links**: Blue with dotted underline, electric blue on hover
- **Dark Mode Links**: Properly styled for visibility

### Branding Assets
- **Logo Integration**: Penn Engineering shield properly configured
- **Social Media**: Custom image for link previews
- **Flexible System**: Easy to swap logos via config files

## Support

For questions about the theme:
- Technical issues: Create an issue in the repository
- Brand compliance: Refer to Penn Engineering brand guidelines
- Customization help: See the examples above or extend as needed

---

**Theme Version**: 1.2.0  
**Last Updated**: January 2025  
**Brand Tagline**: "Reinventing Invention"

## Change Log

### Version 1.2.0
- Fixed header title size (now 2rem for proper prominence)
- Restyled tags as small, subtle elements (not buttons)
- Improved metadata display with proper spacing and separators
- Maintained GitHub link at appropriate 0.875rem size

### Version 1.1.0
- Separated Penn branding for easy toggle
- Complete font coverage with brand-compliant usage
- Fixed module link styling

### Version 1.0.0
- Initial Penn Engineering theme implementation