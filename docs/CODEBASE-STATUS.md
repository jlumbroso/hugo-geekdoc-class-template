# Hugo Geekdoc Class Template - Codebase Analysis

## Overview
This is a comprehensive Hugo-based course website template built on the Geekdoc theme, designed specifically for academic courses. It provides a complete solution for creating course websites with features tailored for educational content delivery.

## Core Architecture

### Framework & Theme
- **Static Site Generator**: Hugo (v0.132.0)
- **Base Theme**: hugo-geekdoc (as a Git submodule in `themes/`)
- **Inspiration**: Just-the-Class Jekyll template (with backported SCSS styles)
- **Deployment**: GitHub Pages via GitHub Actions

### Project Structure
```
hugo-geekdoc-class-template/
├── assets/               # SCSS customizations
│   ├── custom/          # Just-the-Class styling extensions
│   └── sprites/         # SVG icon sprites
├── config/_default/     # Hugo configuration (YAML)
│   ├── config.yaml     # Main config (baseURL, theme, markup)
│   ├── languages.yaml  # Language settings
│   └── params.yaml     # Theme parameters
├── content/en/         # English content root
│   ├── announcements/  # Course announcements
│   ├── modules/        # Weekly course modules
│   ├── posts/          # Blog-style posts
│   ├── schedule/       # Course schedule page
│   └── staffers/       # Teaching staff profiles
├── data/               # Structured data files
│   ├── class_schedule.yaml  # Schedule timeline data
│   └── menu/               # Navigation menus
├── layouts/            # Custom template overrides
│   ├── announcements/  # Announcement list/single templates
│   ├── modules/        # Module list/single templates
│   ├── partials/       # Reusable template parts
│   ├── shortcodes/     # Custom Hugo shortcodes
│   └── staffers/       # Staff list/single templates
├── static/             # Static assets
│   ├── custom.css      # Main custom CSS
│   └── themes/         # Additional color themes
└── themes/hugo-geekdoc/ # Geekdoc theme (submodule)
```

## Key Features

### 1. Course-Specific Content Types

#### Announcements
- Custom shortcode: `{{< announcement >}}` for homepage announcements
- Auto-calculated reading time
- Date formatting support
- Rendered with custom styling

#### Course Modules
- Weekly module pages with schedule-like content
- Support for labels (Section, Lab, HW due, etc.)
- Definition list formatting for date-based content
- Hidden from main navigation (`geekdocHidden: true`)

#### Schedule
- Dynamic schedule grid generated from YAML data
- Visual timeline with events positioned by time
- Color-coded event types (lecture, office-hours, section)
- Responsive design for mobile/desktop

#### Staff Profiles
- Individual staff member pages with photos
- Support for metadata (pronouns, email, languages, office hours)
- Grid layout for team display
- Custom styling for staff cards

### 2. Custom Shortcodes

- **`announcement`**: Styled announcement blocks with title, date, and content
- **`schedule`**: Dynamic schedule grid from YAML data
- **`label`**: Colored labels for categorizing content
- **`sprites`**: SVG icon sprite integration
- **`resourceLink`**: Link formatting helper
- **`hugo-encrypt`**: Content encryption support

### 3. Styling System

#### Base Styles
- Custom CSS in `static/custom.css`
- SCSS extensions from Just-the-Class in `assets/custom/`
- Multiple color themes in `static/themes/`:
  - evergreen-harmony
  - geekdocs-green
  - granny-lime-bliss
  - greenest
  - vibrant-meadow

#### Design Features
- Green-based color scheme (header: #088024)
- Purple links (#9d37b7) with orange visited (#dd721f)
- Responsive layout with mobile-first approach
- Custom module styling removing default separators
- Small-caps for metadata labels

### 4. Configuration Highlights

#### Hugo Settings
- **Syntax Highlighting**: Pygments with classes
- **Git Info**: Enabled for last modified dates
- **Markdown**: Goldmark with unsafe HTML, definition lists
- **Table of Contents**: Levels 1-9, configurable per page
- **Security**: Allows asciidoctor and git execution

#### Theme Parameters
- **Search**: FlexSearch enabled with parent folder display
- **Navigation**: Breadcrumbs, next/prev links
- **Edit Links**: GitHub integration for "Edit page" feature
- **Dark Mode**: Toggle with dimming and code theme options
- **Menu**: Data-driven or file-based options

### 5. Build & Deployment

#### GitHub Actions Workflow
1. Checkout with submodules
2. Install Hugo Extended (v0.132.0)
3. Install Asciidoctor for document processing
4. Build Geekdoc theme with npm
5. Generate static files with minification
6. Optional content encryption
7. Deploy to GitHub Pages branch

#### Offline Generation
Special build mode for USB/offline distribution:
- Relative URLs instead of absolute
- Ugly URLs (.html files) for direct file access
- Self-contained bundle with all assets

## Content Organization

### Navigation Structure
- Main menu from content structure or `data/menu/main.yaml`
- Extra menu items in `data/menu/extra.yaml`
- "More" dropdown in `data/menu/more.yaml`
- Tag-based navigation auto-generated

### Content Sections
1. **Homepage**: Announcement showcase with Lorem ipsum demo
2. **Modules**: Weekly course content with readings and assignments
3. **Schedule**: Visual weekly schedule grid
4. **Staff**: Teaching team directory with profiles
5. **Posts**: Blog/news section for updates
6. **Tree Navigation**: Collapsible content hierarchy demos

## Technical Capabilities

### Supported Formats
- Markdown with Hugo processing
- HTML partials and includes
- YAML data files
- SCSS/CSS styling
- SVG sprites
- Images (with lazy loading)

### Performance Features
- Static site generation
- Minified output
- Lazy image loading
- Efficient search indexing
- Clean, semantic HTML

### Extensibility
- Custom layouts override theme defaults
- Partial templates for reusable components
- Shortcode system for content enhancement
- Data-driven content generation
- Theme color customization

## Development Notes

### Key Files to Modify
1. `config/_default/config.yaml` - Site URL and title
2. `config/_default/params.yaml` - Theme settings
3. `data/class_schedule.yaml` - Course schedule
4. `content/en/` - All course content
5. `static/custom.css` - Visual customizations

### Best Practices
- Use front matter for page-specific settings
- Leverage shortcodes for repeated patterns
- Keep content in Markdown for portability
- Use data files for structured information
- Override layouts selectively

### Deployment Considerations
- Update `baseURL` in config for production
- Configure CNAME for custom domains
- Test offline generation for distribution
- Monitor GitHub Actions for build status
- Keep theme submodule updated

## Summary
This is a well-architected, education-focused Hugo template that successfully combines the Geekdoc theme's documentation capabilities with academic course management features. The codebase is clean, modular, and extensively customizable, making it an excellent foundation for course websites. The integration of Just-the-Class styling elements provides familiar academic website aesthetics while maintaining Hugo's performance advantages.