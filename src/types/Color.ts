type HSL = `hsl(${number}, ${number}%, ${number}%)`
type HSLA = `hsla(${number}, ${number}%, ${number}%, ${number})`
type RGB = `rgb(${number}, ${number}, ${number})`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`

export type Color = RGB | RGBA | HEX | HSL | HSLA
export type ColorSpace = "HSL" | "HSV" | "SHV" | "VHS"
export type ColorRepresentation = "HSL" | "RGB"
