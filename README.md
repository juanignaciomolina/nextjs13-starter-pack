# Next.js 13 Starter Pack

A ready to go Next.js 13 template with a bunch of goodies to kickoff your project.

## What's next? How do I make an app with this?

This template is based on the [T3 Stack](https://create.t3.gg/) project and bootstrapped with `create-t3-app`.

In addition to it, it includes [ShadcnUI](https://ui.shadcn.com/) built on top of [RadixUI](https://www.radix-ui.com/)

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [ShadcnUI](https://ui.shadcn.com/)
- [RadixUI](https://www.radix-ui.com/)

## What about the App folder?

This template doesn't support the App folder right now. NextAuth, NextThemes and tRPC are a challenge to port, since they are heavily based on a typical client side architecture and not really built for React Server Components.

Nevertheless, I did manage to port React Themes and NextAuth to RSC. The main blocker was tRPC, as there is no official support yet and the only way to make it work required essentially duplicating the code between the Pages and the App folder, which is very hacky and hardly maintainble in the future.

Ultimate, I think that the App folder and the libraries ecosystem is not mature enough right now. I believe this template to be the most solid way of kicking off a new Next.js project as of early 2023.

Additionally, RSCs are a big deal if you care a lot about SEO (like in E-Commerce or Blog posting), but it may not even be that useful if the app that is being built is client side heavy anyway.

## How do I deploy this?

Like the cool kids:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Cloudlflare](https://www.cloudflare.com/developer-platform-hub/)

Or go classy with:

- [AWS](https://aws.amazon.com/es/)
- [GCP](https://cloud.google.com/)
- [Azure](https://azure.microsoft.com/)

The project comes prepared for 'Magic Links' authentication, but you'll need an SMTP (Email) server for this.
You can use a service for this or change the auth to social logins if you prefer.

- [SendGrid](https://sendgrid.com/)
- [Postmark](https://postmarkapp.com/)
