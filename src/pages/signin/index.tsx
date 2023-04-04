import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { UserAuthForm } from "@/components/user-auth-form"
import { siteConfig } from "@/config/site"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Sign in",
  description: "Sign in to get started.",
}

export default function SignInPage() {
  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:px-0">
      <Link href="/" className="absolute top-4 left-4 md:top-8 md:left-8">
        <Button variant="ghost">
          <ChevronLeft className="mr-1 h-4 w-4" /> Home
        </Button>
      </Link>
      <div className="p-4 lg:p-8 rounded-md bg-slate-100 dark:bg-slate-950 shadow-md">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Icons.logo className="mx-auto h-6 w-6" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Nice to see you
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Enter your email below to access {siteConfig.shortName}
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-slate-500 dark:text-slate-400">
            By signing in, you agree to our{" "}
            <Link
              href="/terms"
              className="hover:text-brand underline underline-offset-4"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="hover:text-brand underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
