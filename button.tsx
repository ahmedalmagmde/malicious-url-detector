import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);

Button.displayName = "Button";

export { Button };