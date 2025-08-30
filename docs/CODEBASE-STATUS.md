# Hugo Geekdoc Class Template - Codebase Analysis

## Overview
This is a comprehensive Hugo-based course website template built on the Geekdoc theme, designed specifically for academic courses. It provides a complete solution for creating course websites with features tailored for educational content delivery.

**Last Updated**: August 2025 - Major enhancements and innovations added

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
│   │   ├── head/       # Head customizations
│   │   ├── staffers/   # Staff-specific partials
│   │   ├── functions/  # Helper functions
│   │   └── utils/      # Utility partials
│   ├── shortcodes/     # Custom Hugo shortcodes
│   ├── posts/          # Blog post templates
│   └── staffers/       # Staff list/single templates
├── static/             # Static assets
│   ├── custom.css      # Main custom CSS
│   └── themes/         # Additional color themes
└── themes/hugo-geekdoc/ # Geekdoc theme (submodule)
```

## Recent Major Enhancements (2025)

### Advanced Template System Improvements

#### 1. Sophisticated Edit Link System
- **Location**: `layouts/partials/utils/edit-link.html`
- **Features**:
  - Cascading configuration (site → section → page level)
  - Multiple edit types ('page' vs 'item')
  - Configurable display options (icon/text visibility)
  - Smart repository path handling
  - Context-aware edit URLs for different content types
  - Integration points in announcements, modules, and staffers

#### 2. Enhanced Page Header System
- **Location**: `layouts/partials/page-header.html`
- **Features**:
  - Unified header with integrated breadcrumb navigation
  - Schema.org markup for SEO
  - Flexible edit link integration
  - Responsive design with mobile optimization
  - Accessibility improvements (`id="main-content" tabindex="-1"`)
  - Consistent styling across all content types

#### 3. Advanced Background Configuration
- **Location**: `layouts/partials/head/background-config.html`
- **Features**:
  - Preset-based configuration system
  - Header, body, and footer background control
  - Image/texture layering system
  - Dark mode support with separate opacity/invert settings
  - CSS custom properties for dynamic theming
  - Override capability at page level

#### 4. Penn Engineering Integration
- **Locations**: 
  - `layouts/shortcodes/penn-gradient.html`
  - `static/js/penn-gradient-flash.js`
  - `assets/css/penn-ai-mode.css`
- **Features**:
  - Penn gradient effects with configurable animations
  - AI mode styling (Google AI-style with Penn colors)
  - Cascading gradient animations
  - Button and input field enhancements
  - Header flash effects
  - Dark mode compatibility

#### 5. Professional Favicon Management
- **Location**: `layouts/partials/head/favicons.html`
- **Features**:
  - Configurable favicon paths
  - Multi-format support (ICO, PNG, SVG)
  - Platform-specific icons (Apple Touch, Android, Safari)
  - Web manifest integration
  - Progressive enhancement with file existence checks

#### 6. Enhanced Site Footer
- **Location**: `layouts/partials/site-footer.html`
- **Features**:
  - Claude AI attribution with theme-aware logos
  - Footer tagline support
  - Comprehensive legal/privacy links
  - Enhanced accessibility
  - Penn Engineering styling integration

#### 7. Course Accent Color System
- **Location**: `layouts/partials/head/course-accent.html`
- **Features**:
  - Modular accent color system
  - Base accent framework
  - Switchable color themes
  - Clean separation of concerns

#### 8. Semantic Content Support
- **Location**: `assets/css/semantic-content.css`
- **Features**:
  - Improved content structure
  - Better typography handling
  - Container and main-content optimization

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
  - Support for instructor field (added 2025)
  - Time-based positioning
  - Color-coded event types
- **`label`**: Colored labels for categorizing content
- **`sprites`**: SVG icon sprite integration
- **`resourceLink`**: Link formatting helper
- **`hugo-encrypt`**: Content encryption support
- **`penn-gradient`**: Penn Engineering gradient effects (new 2025)

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
2. `config/_default/params.yaml` - Theme settings (including pennGradient, edit links)
3. `data/class_schedule.yaml` - Course schedule
4. `content/en/` - All course content
5. `static/custom.css` - Visual customizations
6. `layouts/partials/head/custom.html` - Advanced customizations and integrations
7. `layouts/partials/head/background-config.html` - Background theming
8. `assets/css/` - SCSS/CSS customizations

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

## Technical Entry Points for LLMs

### Configuration Cascade
1. **Site-wide settings**: `config/_default/params.yaml`
2. **Page frontmatter**: Override any site setting at page level
3. **Partial parameters**: Pass context and parameters to partials

### Key Integration Points

#### Edit Link System
```yaml
# In params.yaml or page frontmatter
editURL:
  enable: true
  base: "https://github.com/user/repo/edit/main"
  text: "Edit this page"
  icon: true
  showText: true
```

#### Penn Gradient Configuration
```yaml
# In params.yaml or page frontmatter
pennGradient:
  enabled: true
  headerFlash: true
  buttons: true
  inputs: true
  cascading: true
```

#### Background Configuration
```yaml
# In params.yaml
backgroundPreset: "dots"  # or custom settings
backgroundSettings:
  header:
    image: "/path/to/image"
    opacity: 0.1
  body:
    texture: "dots"
    darkInvert: true
```

### Content Type Templates
- **Announcements**: `layouts/announcements/list.html`
- **Modules**: `layouts/modules/[list|single].html`
- **Staffers**: `layouts/staffers/[list|single].html`
- **Posts**: `layouts/posts/[list|single].html`
- **Schedule**: `layouts/shortcodes/schedule.html`

### Styling Hierarchy
1. **Theme base**: `themes/hugo-geekdoc/`
2. **Custom overrides**: `static/custom.css`
3. **SCSS extensions**: `assets/custom/`
4. **Component styles**: `assets/css/[component].css`
5. **Theme variants**: `static/themes/`

### JavaScript Integration
- **Penn Gradient**: `static/js/penn-gradient-flash.js`
- **Custom scripts**: Added via `layouts/partials/head/custom.html`

## Summary
This is a highly evolved, education-focused Hugo template that has significantly advanced beyond its initial implementation. The 2025 enhancements have transformed it from a basic course website template into a sophisticated, highly configurable system with professional-grade theming, accessibility features, and extensive customization options. The template successfully combines the Geekdoc theme's documentation capabilities with academic course management features, Penn Engineering branding, and modern web development best practices.