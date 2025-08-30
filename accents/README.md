# Course Accent Color System

This directory contains a modular accent color system that allows courses to have distinct visual identities while maintaining Penn Engineering branding.

## FIXME

Currently, I find the mechanism to pick colors to be good, but what is chosen as accents (in `base-accent.css`) could be improved for better use of the highlights.

## How It Works

The accent system consists of two parts:
1. **base-accent.css** - Defines which UI elements receive accent colors
2. **[color].css** - Individual color theme files that set the accent color variables

## Available Accent Themes

- **evergreen** - Penn Evergreen (#00553F) - Environmental/sustainability courses
- **teal** - Penn Teal (#007E7A) - Bioengineering/health courses  
- **warwick** - Penn Warwick Blue (#1E407C) - Computer science/tech courses
- **violet** - Penn Violet (#4B2E83) - Creative/design courses
- **orange** - Penn Orange (#CC6500) - Energy/mechanical engineering courses
- **red** - Penn Red (#990000) - Critical/important courses or alerts

## Configuration

To enable an accent color for your course, add the following to your `config/_default/params.yaml`:

```yaml
# Course accent color
courseAccent: "teal"  # Choose from: evergreen, teal, warwick, violet, orange, red
```

Leave empty or comment out to use the default Penn blue.

## What Gets Accented

When an accent color is active, it affects:
- Section headers (H2) with colored left border
- Active navigation items
- Table of contents active item
- Content links (underline and hover)
- Code blocks (left border)
- Blockquotes (left border and background)
- Module cards (top border)
- Tags on hover
- Progress bars
- Callout boxes
- Search result highlights
- And more...

## Creating Custom Accents

To create a new accent color:

1. Copy any existing accent file (e.g., `teal.css`)
2. Rename it to your color name
3. Update the CSS variables:
   - `--course-accent-primary` - Main accent color
   - `--course-accent-secondary` - Darker variant
   - `--course-accent-light` - Lighter variant
   - `--course-accent-bg` - Very light background (use low opacity)
   - `--course-accent-hover` - Hover state color

Example:
```css
:root {
  --course-accent-primary: #YourColor;
  --course-accent-secondary: #DarkerVariant;
  --course-accent-light: #LighterVariant;
  --course-accent-bg: rgba(R, G, B, 0.05);
  --course-accent-hover: #HoverColor;
}
```

## Design Principles

- Accents should complement, not compete with Penn Engineering branding
- Use Penn's official secondary colors when possible
- Maintain sufficient contrast for accessibility
- Keep accent usage subtle and professional
- Test with both light and dark modes if applicable