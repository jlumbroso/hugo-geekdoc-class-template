# Penn Engineering Favicon Assets

## Source

The favicon assets in this directory are generated from the official Penn Engineering simplified shield logo.

- **Source Page**: [Penn Logos and Branding](https://branding.web-resources.upenn.edu/logos-and-branding/download-penn-logos)
- **Direct Source**: [simplified-shield.ico](https://branding.web-resources.upenn.edu/themes/custom/penn_global/assets/img/simplified-shield.ico)
- **Downloaded**: August 2025

## Files

- `simplified-shield.ico` - Original high-resolution source file from Penn branding
- `reprocess.sh` - Script to regenerate all favicon sizes from the source
- Generated files:
  - `favicon.ico` - Standard favicon
  - `favicon-16x16.png` - 16px favicon
  - `favicon-32x32.png` - 32px favicon
  - `favicon-192x192.png` - Android Chrome icon
  - `favicon-512x512.png` - PWA icon
  - `apple-touch-icon.png` - 180px Apple Touch icon
  - `site.webmanifest` - Web app manifest

## Regenerating Assets

To regenerate all favicon sizes from the source, run:

```bash
./reprocess.sh
```

This script requires ImageMagick (`convert` command) to be installed.