/**
 * @license BSD-3-Clause
 * Copyright (c) 2025, ッツ Reader Authors
 * All rights reserved.
 */

export enum LocalFont {
  NOTOSANSJP = 'Noto Sans JP',
  NOTOSERIFJP = 'Noto Serif JP',
  SERIF = 'Serif',
  SANSSERIF = 'Sans-Serif'
}

export interface UserFont {
  name: string;
  path: string;
  fileName: string;
}

export const userFontsCacheName = 'ttu-userfonts';

export const reservedFontNames = new Set([
  'Noto Sans JP',
  'Noto Serif JP',
  'Serif',
  'Sans-Serif'
]);

export function isStoredFont(fontName: string, userFonts: UserFont[]) {
  return (
    reservedFontNames.has(fontName) || !!userFonts.find((userFont) => userFont.name === fontName)
  );
}
