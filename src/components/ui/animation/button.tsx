import * as React from "react"
import { GlassButton } from "@/components/apple-tahoe-liquid-glass-button";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <GlassButton
        ref={ref}
        className={className}
        {...props}
      >
        {children}
      </GlassButton>
    )
  },
)
Button.displayName = "Button"

export { Button }
