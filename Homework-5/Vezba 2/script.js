// Landscape Or Portrait

function landscapeOrPortrait(width, height) {
  if (width > height) {
    return 'The dimensions are for a Landscape.';
  } else {
    return 'The dimensions are for a Portrait.';
  }
};

console.log(landscapeOrPortrait(400, 320));