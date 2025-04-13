interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const getOptimizedImageProps = (image: ImageProps): ImageProps & { loading: "lazy" | "eager" } => {
  return {
    ...image,
    loading: "lazy",
    width: image.width || 800,
    height: image.height || 600,
  };
};

export const generateAltText = (imageName: string): string => {
  // Convert file name to readable text
  return imageName
    .replace(/[-_]/g, ' ') // Replace hyphens and underscores with spaces
    .replace(/\.[^/.]+$/, '') // Remove file extension
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

export const getImageMetadata = (path: string) => {
  const imageCategories = {
    'team': 'Team member photo of',
    'services': 'Service illustration for',
    'projects': 'Project showcase of',
    'blog': 'Blog post image about',
  };

  const category = Object.entries(imageCategories).find(([key]) => path.includes(key));
  const baseName = path.split('/').pop()?.split('.')[0] || '';
  
  return {
    alt: category ? `${category[1]} ${generateAltText(baseName)}` : generateAltText(baseName),
    title: generateAltText(baseName)
  };
}; 