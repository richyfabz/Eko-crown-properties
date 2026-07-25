const rawAsset = (name: string): string => encodeURI(`/raw-assets/${name}`);

export const familyAssets = {
  lounge: rawAsset('family-lounge.jfif'),
  selfie: rawAsset('family-selfie.jfif'),
};
