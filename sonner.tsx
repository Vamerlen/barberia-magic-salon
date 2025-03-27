
import { useTheme } from "next-themes"
import { Toaster as SonnerToaster } from "sonner"

import { cn } from "@/lib/utils"

// Define props type for our Toaster component
interface CustomToasterProps {
  theme?: "light" | "dark" | "system"
  className?: string
  [key: string]: any
}

const Toaster = ({ ...props }: CustomToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <SonnerToaster
      theme={theme as "light" | "dark" | "system"}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
