const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Images that need cropping to remove excess black borders
const imagesToCrop = [
  {
    path: 'public/assets/images/home/mockups/oman-oil/oil.webp',
    cropPercent: 10 // Remove 10% from each edge
  },
  {
    path: 'public/assets/images/home/mockups/oman-oil/oman-oil-sm.webp',
    cropPercent: 10
  },
  {
    path: 'public/assets/images/home/mockups/oman-oil/oman-oil-back.webp',
    cropPercent: 10
  },
  {
    path: 'public/assets/images/home/mockups/alyusr/al-yusr.webp',
    cropPercent: 10
  },
  {
    path: 'public/assets/images/home/mockups/alyusr/al-yusr-sm.webp',
    cropPercent: 10
  },
  {
    path: 'public/assets/images/home/mockups/ifit/ifit.webp',
    cropPercent: 10
  },
  {
    path: 'public/assets/images/home/mockups/ifit/ifit-sm.webp',
    cropPercent: 10
  },
  {
    path: 'public/assets/images/home/mockups/tamluk/tamluk.webp',
    cropPercent: 10
  },
  {
    path: 'public/assets/images/home/mockups/tamluk/tamluk-sm.webp',
    cropPercent: 10
  },
];

async function cropImage(imageConfig) {
  try {
    const fullPath = path.join(__dirname, '..', imageConfig.path);

    // Create backup if it doesn't exist
    const backupPath = fullPath.replace(/\.(webp|jpg|jpeg)$/i, '.original.$1');
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(fullPath, backupPath);
      console.log(`Backup created: ${backupPath}`);
    }

    // Get image metadata
    const image = sharp(fullPath);
    const metadata = await image.metadata();

    // Calculate crop dimensions (remove cropPercent from each edge)
    const cropAmount = imageConfig.cropPercent / 100;
    const cropX = Math.floor(metadata.width * cropAmount);
    const cropY = Math.floor(metadata.height * cropAmount);

    const newWidth = metadata.width - (cropX * 2);
    const newHeight = metadata.height - (cropY * 2);

    console.log(`Processing: ${imageConfig.path}`);
    console.log(`  Original: ${metadata.width}x${metadata.height}`);
    console.log(`  Cropping: ${cropX}px from left/right, ${cropY}px from top/bottom`);
    console.log(`  New size: ${newWidth}x${newHeight}`);

    // Crop and save
    await sharp(fullPath)
      .extract({
        left: cropX,
        top: cropY,
        width: newWidth,
        height: newHeight
      })
      .toFile(fullPath + '.tmp');

    // Replace original with cropped version
    fs.renameSync(fullPath + '.tmp', fullPath);

    console.log(`✓ Cropped: ${imageConfig.path}\n`);
  } catch (error) {
    console.error(`✗ Error processing ${imageConfig.path}:`, error.message);
  }
}

async function processAll() {
  console.log('Starting image cropping to remove excess black borders...\n');

  for (const imageConfig of imagesToCrop) {
    await cropImage(imageConfig);
  }

  console.log('Cropping complete!');
  console.log('\nTo restore originals, rename .original.webp files back to .webp');
}

processAll();
