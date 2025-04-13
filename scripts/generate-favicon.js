const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create canvas for favicon
const size = 64;
const canvas = createCanvas(size, size);
const ctx = canvas.getContext('2d');

// Create gradient background
const gradient = ctx.createLinearGradient(0, 0, size, size);
gradient.addColorStop(0, '#6366f1');
gradient.addColorStop(1, '#8b5cf6');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, size, size);

// Add text
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 32px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('V', size/2, size/2);

// Save the favicon
const buffer = canvas.toBuffer('image/png');
const iconPath = path.join(__dirname, '../public/icons/favicon.png');

// Ensure the directory exists
if (!fs.existsSync(path.dirname(iconPath))) {
  fs.mkdirSync(path.dirname(iconPath), { recursive: true });
}

fs.writeFileSync(iconPath, buffer); 