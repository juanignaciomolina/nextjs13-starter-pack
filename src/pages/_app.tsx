import { Inter as FontSans } from "@next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { type Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes"
import { type AppType } from "next/app"
import { api } from "~/utils/api"
import "~/styles/globals.css"
import { BreakpointIndicator } from "@/components/breakpoint-indicator"
import { Toaster } from "@/components/ui/toaster"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <SessionProvider session={session}>
        <style jsx global>{`
          :root {
            --font-sans: ${fontSans.style.fontFamily};
          }
        `}</style>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Component {...pageProps} />
          <Toaster />
        </ThemeProvider>
        <BreakpointIndicator />
      </SessionProvider>
      <Analytics />
    </>
  )
}

export default api.withTRPC(MyApp)
