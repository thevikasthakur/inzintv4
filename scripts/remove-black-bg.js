const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Images that need black background removal
const imagesToProcess = [
  'public/assets/images/home/mockups/oman-oil/oil.webp',
  'public/assets/images/home/mockups/oman-oil/oman-oil-sm.webp',
  'public/assets/images/home/mockups/oman-oil/oman-oil-back.webp',
  'public/assets/images/home/mockups/alyusr/al-yusr.webp',
  'public/assets/images/home/mockups/alyusr/al-yusr-sm.webp',
  'public/assets/images/home/mockups/ifit/ifit.webp',
  'public/assets/images/home/mockups/ifit/ifit-sm.webp',
  'public/assets/images/home/mockups/tamluk/tamluk.webp',
  'public/assets/images/home/mockups/tamluk/tamluk-sm.webp',
];

async function removeBlackBackground(inputPath) {
  try {
    const fullPath = path.join(__dirname, '..', inputPath);

    // Create backup
    const backupPath = fullPath.replace(/\.(webp|jpg|jpeg)$/i, '.backup.$1');
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(fullPath, backupPath);
      console.log(`Backup created: ${backupPath}`);
    }

    // Read the image
    const image = sharp(fullPath);
    const metadata = await image.metadata();

    // Convert to PNG with transparency, removing black background
    // This works by making dark pixels (close to black) transparent
    await image
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true })
      .then(({ data, info }) => {
        // Process pixels to remove black background
        const threshold = 30; // Adjust this value if needed (0-255)

        for (let i = 0; i < data.length; i += info.channels) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // If pixel is very dark (close to black), make it transparent
          if (r < threshold && g < threshold && b < threshold) {
            data[i + 3] = 0; // Set alpha to 0 (transparent)
          }
        }

        return sharp(data, {
          raw: {
            width: info.width,
            height: info.height,
            channels: info.channels
          }
        })
        .png()
        .toFile(fullPath.replace(/\.(webp|jpg|jpeg)$/i, '.png'));
      });

    console.log(`✓ Processed: ${inputPath} -> ${inputPath.replace(/\.(webp|jpg|jpeg)$/i, '.png')}`);
  } catch (error) {
    console.error(`✗ Error processing ${inputPath}:`, error.message);
  }
}

async function processAll() {
  console.log('Starting black background removal...\n');

  for (const imagePath of imagesToProcess) {
    await removeBlackBackground(imagePath);
  }

  console.log('\nProcessing complete!');
}

processAll();
