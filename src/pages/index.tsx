import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Router } from "lucide-react";
import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC in the server" });

  return (
    <Layout>
      <Head>
        <title>{siteConfig.name}</title>
        <meta name="description" content={siteConfig.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            <span className="text-blue-500">Next.js 13</span> starter pack
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-md bg-slate-100 dark:bg-slate-800 p-4 hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">First Steps →</h3>
              <div className="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-md bg-slate-100 dark:bg-slate-800 p-4  hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-md bg-slate-100 dark:bg-slate-800 p-4 hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
              href="https://ui.shadcn.com/"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Shadcn/UI →</h3>
              <div className="text-lg">
                Beautifully designed components{" "}
                <br className="hidden sm:inline" />
                built with Radix UI and Tailwind CSS.
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm">
              <span className="bg-slate-100 dark:bg-slate-800 rounded-l-md pl-4 pr-2 py-2 items-center">
                <Router className="h-4 w-4 mr-2 inline-block" />
                tRPC
              </span>
              <span className="font-mono bg-slate-200 dark:bg-slate-700 rounded-r-md pr-4 pl-2 py-2">
                "{hello.data ? hello.data.greeting : "Loading tRPC query..."}"
              </span>
            </p>
            <AuthShowcase />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
    </div>
  );
};
