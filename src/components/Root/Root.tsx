import { FC, HTMLAttributes, createContext, useState } from "react"
import { Color, ColorSpace } from "../../types/Color"
import React from "react"

export interface YakutRootProps extends HTMLAttributes<HTMLDivElement> {
  value?: Color
  onValueChange?: (c: Color) => void
}

interface YakutContextProps {
  color?: Color
  setColor?: (c: Color) => void
  space?: ColorSpace
  setSpace?: (s: ColorSpace) => void
}

export const YakutContext = createContext<YakutContextProps>({})

const Root: FC<YakutRootProps> = ({
  value = "#ffffff",
  onValueChange = () => {},
  children,
  ...rest
}) => {
  const [color, setColor] = useState<Color>(value)
  const [space, setSpace] = useState<ColorSpace>("HSL")

  return (
    <div
      style={{
        // @ts-ignore
        "--color": value,
      }}
      {...rest}
    >
      <YakutContext.Provider value={{ color, setColor, space, setSpace }}>
        {children}
        AMKKKKK Dont know yettt???
      </YakutContext.Provider>
    </div>
  )
}

Root.displayName = "Root"

export default Root
