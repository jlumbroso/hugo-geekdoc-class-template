#!/bin/bash

# Penn Engineering Favicon Generation Script
# Generates all required favicon sizes from the high-resolution source

set -e

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "Error: ImageMagick is required but not installed."
    echo "Install it with: brew install imagemagick"
    exit 1
fi

# Check if sips is available (macOS)
if ! command -v sips &> /dev/null; then
    echo "Warning: sips not found, will use ImageMagick only"
    USE_SIPS=false
else
    USE_SIPS=true
fi

SOURCE_FILE="simplified-shield.ico"

# Check if source file exists
if [ ! -f "$SOURCE_FILE" ]; then
    echo "Error: Source file $SOURCE_FILE not found!"
    echo "Please download it from: https://branding.web-resources.upenn.edu/themes/custom/penn_global/assets/img/simplified-shield.ico"
    exit 1
fi

echo "Generating favicon assets from $SOURCE_FILE..."

# Extract the highest quality image from the ICO file
echo "Extracting high-quality PNG from ICO..."
convert "$SOURCE_FILE[0]" -background transparent "favicon-source.png"

# Generate different sizes
echo "Generating favicon-16x16.png..."
convert "favicon-source.png" -resize 16x16 "favicon-16x16.png"

echo "Generating favicon-32x32.png..."
convert "favicon-source.png" -resize 32x32 "favicon-32x32.png"

echo "Generating favicon-192x192.png..."
convert "favicon-source.png" -resize 192x192 "favicon-192x192.png"

echo "Generating favicon-512x512.png..."
convert "favicon-source.png" -resize 512x512 "favicon-512x512.png"

echo "Generating apple-touch-icon.png (180x180)..."
convert "favicon-source.png" -resize 180x180 "apple-touch-icon.png"

# Create multi-resolution ICO file
echo "Creating favicon.ico with multiple resolutions..."
convert "favicon-source.png" \
    \( -clone 0 -resize 16x16 \) \
    \( -clone 0 -resize 32x32 \) \
    \( -clone 0 -resize 48x48 \) \
    -delete 0 "favicon.ico"

# Create web manifest
echo "Creating site.webmanifest..."
cat > site.webmanifest << 'EOF'
{
  "name": "Penn Engineering",
  "short_name": "Penn Eng",
  "icons": [
    {
      "src": "/favicons/penn-engineering/favicon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/favicons/penn-engineering/favicon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#011F5B",
  "background_color": "#ffffff",
  "display": "standalone"
}
EOF

# Clean up temporary file
rm -f "favicon-source.png"

echo "✅ All favicon assets generated successfully!"
echo ""
echo "Generated files:"
echo "  - favicon.ico (16x16, 32x32, 48x48)"
echo "  - favicon-16x16.png"
echo "  - favicon-32x32.png"
echo "  - favicon-192x192.png"
echo "  - favicon-512x512.png"
echo "  - apple-touch-icon.png (180x180)"
echo "  - site.webmanifest"