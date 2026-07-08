// Neutral placeholder shown if a remote/random photo fails to load.
// Swap real photos in src/data/wedding.ts later — this just avoids broken-image frames.
const PLACEHOLDER =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#3c4a31"/>
          <stop offset="100%" stop-color="#232b1d"/>
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="url(#g)"/>
      <text x="50%" y="50%" fill="#efe9dc" font-family="Georgia, serif"
        font-size="34" text-anchor="middle" dominant-baseline="middle"
        opacity="0.7">Your photo</text>
    </svg>`,
  )

export function onImgError(e: Event) {
  const img = e.target as HTMLImageElement
  if (img.src !== PLACEHOLDER) img.src = PLACEHOLDER
}
