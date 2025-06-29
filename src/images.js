export const getRandomImages = () => {
  const indexesSet = new Set();

  // Keep generating until we have 8 unique indexes
  while (indexesSet.size < 8) {
    const randomIndex = Math.floor(Math.random() * 35) + 1; // Random index from 1 to 35
    // Ensure the index is unique
    // If the index is already in the set, it will not be added again
    indexesSet.add(randomIndex);
  }

  // Convert the set to an array and map to image paths
  return Array.from(indexesSet).map(index =>
    "assets/images/IMG_" + index.toString().padStart(2, '0') + ".jpg"
  );
};
