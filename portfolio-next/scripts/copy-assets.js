const fs = require('fs');
const path = require('path');

async function copyDir(srcDir, destDir) {
  await fs.promises.mkdir(destDir, { recursive: true });
  const entries = await fs.promises.readdir(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.avif'].includes(ext)) {
        await fs.promises.copyFile(srcPath, destPath);
        console.log('Copied', srcPath, '->', destPath);
      }
    }
  }
}

const src = path.resolve(__dirname, '../../src/assets/img');
const dest = path.resolve(__dirname, '../public/img');

copyDir(src, dest)
  .then(() => console.log('Assets copied successfully.'))
  .catch((err) => {
    console.error('Error copying assets:', err.message || err);
    process.exit(1);
  });
