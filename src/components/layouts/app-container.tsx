import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "~/lib/utils";

const containerVariants = cva(
  "container w-screen h-screen mx-auto p-6 text-sm",
  {
    variants: {
      variant: {
        default: "",
        inset: "",
      },
    },
  },
);

type AppContainer = {
  children: React.ReactNode;
  className?: string;
};

const AppContainer = ({
  variant,
  children,
  className,
}: AppContainer & VariantProps<typeof containerVariants>) => {
  return (
    <main className={cn(containerVariants({ variant }), className)}>
      {children}
    </main>
  );
};

export { AppContainer };
