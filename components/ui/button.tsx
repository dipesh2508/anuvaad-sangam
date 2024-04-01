import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-primary-5 text-light-1 hover:bg-primary-3",
        secondary:
          "bg-secondary-2 border-2 border-secondary-2 text-light-1 hover:text-secondary-2 hover:bg-transparent",
        outline:
          "bg-light-3 border-2 border-primary-2 text-primary-6 hover:bg-primary-2",
        cta: "bg-secondary-4 border-2 border-secondary-4 text-light-1 hover:text-secondary-4 font-primary  px-6 font-primary hover:bg-transparent",
        logout:
          "bg-primary-5 text-light-1 hover:bg-transparent hover:text-primary-5 border-2 border-primary-5",
        warning:
        "bg-red-500 border-2 border-red-500 text-light-1 hover:text-red-500 hover:bg-transparent",
      },
      size: {
        default: "h-10 px-4 py-4",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        logout: "h-10 p-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
