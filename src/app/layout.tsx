import type { Metadata } from "next"

import "~/styles/globals.css"

import { siteConfig } from "~/config/site"
import { fontBody, fontHeading } from "~/lib/fonts"
import { cn } from "~/lib/utils"
import Dock from "~/components/dock"
import { ThemeProvider } from "~/components/theme-provider"

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "pb-10 font-body antialiased selection:bg-[#fff9a8] selection:text-black",
          fontBody.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <div className="fixed bottom-0 left-1/2 z-30 mx-auto mb-4 max-w-fit -translate-x-1/2">
            <Dock />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
