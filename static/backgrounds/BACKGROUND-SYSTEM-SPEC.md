# Background System Specification

## Overview
A comprehensive background customization system for Penn Engineering Hugo sites that supports layered backgrounds, textures, and responsive design with full graceful degradation.

## Layer Architecture

### Z-Index Stack (bottom to top)
```
0. Base HTML background
1. Body background color
2. Body background image
3. Body texture overlay
4. Main content area
5. Header background color
6. Header background image  
7. Header texture overlay
8. Header element backgrounds (logo, title, toolbar)
9. Header content (text, icons)
```

### Layer Control
Users can control the z-order of texture overlays:
- `textureLayer: "foreground"` - Texture on top of image (default)
- `textureLayer: "background"` - Texture behind image
- `textureLayer: "between"` - Texture between color and image

## Configuration Schema

### Header Background System
```yaml
headerStyle:
  # Dimensions
  height: "150px"                    # Desktop height (default: 80px)
  heightMobile: "100px"               # Mobile height (default: auto)
  
  # Background Image
  image: "backgrounds/campus.jpg"    # Path to image
  imagePosition: "center 40%"        # CSS background-position
  imagePositionMobile: "center 50%"  # Mobile image position
  imageOpacity: 0.7                  # Image opacity (0-1)
  imageSize: "cover"                 # cover|contain|auto|100%
  
  # Texture Overlay
  textureImage: "backgrounds/line_texture_white_bg-3_small.png"
  textureOpacity: 0.15              # Texture opacity (0-1)
  textureLayer: "foreground"        # foreground|background|between
  textureBlendMode: "multiply"      # CSS blend mode
  
  # Dark Mode Adjustments
  darkModeImageInvert: false        # Invert image in dark mode
  darkModeImageOpacity: 0.5         # Override opacity in dark mode
  darkModeTextureInvert: true       # Invert texture (default: true)
  darkModeTextureOpacity: 0.1       # Override texture opacity
  
  # Element Backgrounds
  logo:
    background: "rgba(255,255,255,0.9)"  # Can use CSS variables
    color: "var(--penn-blue)"            # Text/icon color
    padding: "10px"                      # Optional padding
    borderRadius: "4px"                  # Optional rounding
    
  title:
    background: "var(--penn-blue-dark)"
    color: "var(--penn-white)"
    opacity: 0.85
    
  toolbar:
    background: "transparent"
    color: "var(--penn-blue)"
    darkModeColor: "var(--penn-white)"  # Override for dark mode
```

### Body Background System
```yaml
bodyBackgroundStyle:
  # Base Color
  color: "var(--penn-gray-50)"      # Background color
  
  # Background Image
  image: "backgrounds/pattern.jpg"   # Path to image
  imagePosition: "center top"        # CSS background-position
  imageSize: "cover"                 # cover|contain|auto|[width]
  imageAttachment: "fixed"           # fixed|scroll|local
  imageRepeat: "no-repeat"          # repeat|repeat-x|repeat-y|no-repeat
  imageOpacity: 0.3                 # Image opacity (0-1)
  
  # Texture Overlay
  textureImage: "backgrounds/texture.png"
  textureOpacity: 0.1
  textureRepeat: "repeat"           # Useful for tiling patterns
  textureSize: "auto"                # Size of texture pattern
  textureLayer: "foreground"
  
  # Dark Mode
  darkModeColor: "var(--penn-gray-900)"
  darkModeImageOpacity: 0.2
  darkModeTextureInvert: true
```

## CSS Variable Mapping

All color values can reference CSS variables:
- Penn theme variables: `var(--penn-blue)`, `var(--penn-white)`
- Course accent variables: `var(--course-accent-primary)`
- Custom variables: `var(--custom-header-bg)`

## Implementation Details

### CSS Structure
```css
/* Layered backgrounds using pseudo-elements */
.gdoc-header {
  position: relative;
  background: var(--header-bg-color, transparent);
}

.gdoc-header::before {
  /* Background image layer */
  content: "";
  position: absolute;
  inset: 0;
  background-image: var(--header-bg-image);
  opacity: var(--header-bg-image-opacity, 1);
  z-index: var(--header-image-z, 1);
}

.gdoc-header::after {
  /* Texture overlay layer */
  content: "";
  position: absolute;
  inset: 0;
  background-image: var(--header-texture-image);
  opacity: var(--header-texture-opacity, 1);
  mix-blend-mode: var(--header-texture-blend, normal);
  z-index: var(--header-texture-z, 2);
}
```

### Dark Mode Handling
```css
@media (prefers-color-scheme: dark) {
  .gdoc-header::before {
    opacity: var(--header-bg-image-opacity-dark, var(--header-bg-image-opacity));
    filter: var(--header-image-filter-dark, none);
  }
  
  .gdoc-header::after {
    filter: var(--header-texture-filter-dark, invert(1));
    opacity: var(--header-texture-opacity-dark, var(--header-texture-opacity));
  }
}
```

### Print Styles
```css
@media print {
  /* Remove all decorative backgrounds */
  .gdoc-header::before,
  .gdoc-header::after,
  body::before,
  body::after {
    display: none !important;
  }
  
  /* Ensure readable contrast */
  .gdoc-header,
  body {
    background: white !important;
    color: black !important;
  }
}
```

## Accessibility Considerations

### Contrast Maintenance
- Monitor WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text)
- Provide `prefers-contrast: high` alternatives:
  ```css
  @media (prefers-contrast: high) {
    /* Increase opacity of element backgrounds */
    --header-logo-bg-opacity: 0.95;
    --header-title-bg-opacity: 0.95;
    /* Reduce decorative image opacity */
    --header-bg-image-opacity: 0.2;
  }
  ```

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  /* Disable fixed backgrounds for better performance */
  body {
    background-attachment: scroll !important;
  }
}
```

### Screen Reader Considerations
- All backgrounds are decorative - no semantic content
- Ensure focus indicators remain visible over any background

## Graceful Degradation Path

1. **No configuration** → Current default appearance
2. **Color only** → Solid background colors
3. **Add image** → Image appears with specified opacity
4. **Add texture** → Texture layers over/under image
5. **Invalid paths** → Fallback to previous valid state
6. **CSS variables undefined** → Fallback to defaults

## Performance Optimizations

1. **Lazy Loading**: Background images load after critical content
2. **Image Formats**: Support WebP with fallbacks
3. **Texture Optimization**: Keep textures under 50KB
4. **Mobile**: Simpler backgrounds on small screens
5. **Caching**: Set appropriate cache headers for background assets

## Example Configurations

### Subtle Professional
```yaml
headerStyle:
  height: "100px"
  textureImage: "backgrounds/line_texture_white_bg-3_small.png"
  textureOpacity: 0.05
  title:
    background: "var(--penn-blue)"
    color: "var(--penn-white)"
```

### Bold Department Header
```yaml
headerStyle:
  height: "200px"
  image: "backgrounds/robotics-lab.jpg"
  imageOpacity: 0.4
  imagePosition: "center 60%"
  title:
    background: "rgba(1,31,91,0.8)"
    color: "var(--penn-white)"
```

### Textured Body
```yaml
bodyBackgroundStyle:
  color: "var(--penn-gray-50)"
  textureImage: "backgrounds/line_texture_white_bg-3_small.png"
  textureOpacity: 0.03
  textureRepeat: "repeat"
```

## Testing Checklist

- [ ] No configuration - site looks identical to current
- [ ] Partial configuration - only specified elements change
- [ ] Invalid image paths - graceful fallback
- [ ] Dark mode - appropriate inversions/adjustments
- [ ] Mobile responsive - appropriate image positioning
- [ ] Print view - clean, readable output
- [ ] High contrast mode - maintains accessibility
- [ ] Reduced motion - respects user preference
- [ ] Performance - images don't block rendering
- [ ] Cross-browser - works in Chrome, Firefox, Safari, Edge