class Color {
  private _r: number
  private _g: number
  private _b: number

  constructor(r: number, g: number, b: number) {
    this._r = this.clamp(r, 0, 255)
    this._g = this.clamp(g, 0, 255)
    this._b = this.clamp(b, 0, 255)
  }

  // Getters for individual RGB channels
  get r(): number {
    return this._r
  }

  get g(): number {
    return this._g
  }

  get b(): number {
    return this._b
  }

  // Convert RGB to HSL
  toHSL(): [number, number, number] {
    const r = this._r / 255
    const g = this._g / 255
    const b = this._b / 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h,
      s,
      l = (max + min) / 2

    if (max === min) {
      h = s = 0 // achromatic
    } else {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0)
          break
        case g:
          h = (b - r) / d + 2
          break
        case b:
          h = (r - g) / d + 4
          break
      }
      h! /= 6
    }

    return [h!, s, l]
  }

  // Clamp a value between a minimum and maximum
  private clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max)
  }

  // Convert the color to string representation
  toString(): string {
    return `rgb(${this._r}, ${this._g}, ${this._b})`
  }
}

export default Color
