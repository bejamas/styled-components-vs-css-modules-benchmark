#!/bin/bash

# Remove Stitches files from bench directory
rm -f bench/change-css-prop/stitches-*.tsx
rm -f bench/change-a-variant/stitches-*.tsx
rm -f bench/create-and-mount-button/stitches-*.tsx
rm -f bench/mount-deep-tree/stitches-*.tsx
rm -f bench/mount-wide-tree/stitches-*.tsx
rm -f bench/sierpinski-triangle/stitches-*.tsx
rm -f bench/utils/stitches-*.ts
rm -f bench/utils/stitches-*.config.ts

# Remove Stitches files from pages directory
rm -f pages/change-css-prop/stitches-*.tsx
rm -f pages/change-a-variant/stitches-*.tsx
rm -f pages/create-and-mount-button/stitches-*.tsx
rm -f pages/create-theme/stitches-*.tsx
rm -f pages/mount-deep-tree/stitches-*.tsx
rm -f pages/full-render-manual-test/stitches-*.tsx

# Remove Stitches dependencies from package.json
sed -i '' '/"@stitches\/core-v025"/d' package.json
sed -i '' '/"@stitches\/core-vc17"/d' package.json
sed -i '' '/"@stitches\/react-v025"/d' package.json
sed -i '' '/"@stitches\/react-vc17"/d' package.json
sed -i '' '/"@stitches\/stringify"/d' package.json

echo "Stitches files removed successfully!" 