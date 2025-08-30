# Edit Link System

This site implements a flexible edit link system with pencil icons and configurable visibility.

## Features

- **Page Edit Buttons**: Traditional edit buttons in page headers (breadcrumb area)
- **Item Edit Pencils**: Small pencil icons next to list item titles
- **Cascading Configuration**: Three levels of control with proper override hierarchy

## Configuration

### Site-Level Defaults (config/_default/params.yaml)

```yaml
# Show edit buttons in page headers
geekdocShowPageEdit: true

# Show edit pencil icons next to list items  
geekdocShowItemEdit: true
```

### Section-Level Overrides (_index.md frontmatter)

```yaml
---
title: "My Section"
# Hide page edit buttons for this entire section
geekdocShowPageEdit: false
# Hide item edit pencils for all items in this section
geekdocShowItemEdit: false
---
```

### Individual Page Overrides (page frontmatter)

```yaml
---
title: "My Page"
# Override to show/hide edit features for this specific page
geekdocShowPageEdit: true
geekdocShowItemEdit: false
---
```

## Priority Order (highest to lowest)

1. **Individual page frontmatter** - highest priority
2. **Section _index.md frontmatter** - affects all children in section
3. **Site configuration** - global default

## Implementation

The system uses a reusable partial at `layouts/partials/utils/edit-link.html` that:

- Handles all cascading logic
- Supports different contexts ("page" vs "item")
- Returns nothing if edit should not be shown
- Provides consistent styling and accessibility

## Usage in Templates

```go
{{/* Page header edit button */}}
{{ partial "utils/edit-link.html" (dict "page" . "type" "page" "class" "editpage") }}

{{/* List item pencil icon */}}
{{ partial "utils/edit-link.html" (dict "page" . "type" "item" "class" "item-edit") }}
```

## CSS Classes

The system includes responsive CSS that:
- Provides hover effects
- Scales appropriately for different contexts
- Hides on very small screens (< 480px)
- Maintains accessibility standards