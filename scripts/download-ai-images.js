const fs = require('fs');
const path = require('path');
const https = require('https');

// Create directories if they don't exist
const teamDir = path.join(__dirname, '../public/images/team');
if (!fs.existsSync(teamDir)) {
  fs.mkdirSync(teamDir, { recursive: true });
}

// Placeholder AI-generated images from a free service
const images = [
  {
    url: 'https://thispersondoesnotexist.com/image',
    filename: 'ceo-ai.jpg'
  },
  {
    url: 'https://thispersondoesnotexist.com/image',
    filename: 'cto-ai.jpg'
  },
  {
    url: 'https://thispersondoesnotexist.com/image',
    filename: 'cpo-ai.jpg'
  },
  {
    url: 'https://thispersondoesnotexist.com/image',
    filename: 'designer-ai.jpg'
  }
];

// Download images
images.forEach(image => {
  const filePath = path.join(teamDir, image.filename);
  
  https.get(image.url, (response) => {
    const fileStream = fs.createWriteStream(filePath);
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded ${image.filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${image.filename}: ${err.message}`);
  });
});

console.log('Downloading AI-generated images for team members...'); 