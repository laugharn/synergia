# Synergia

Your favorite Holistic Disruption Paradigm Mesh™.

## Up and Running

- `pnpm install`
- Create HTTPS certificates in /certificates
- `turbo dev`
- Visit https://localhost:3125

## About This Project

This is a website that attempts to quickly demonstrate vast swaths of the Vercel ecosystem. It was developed in roughly four phases, with each phase leveraging either a Vercel service, or features of Next.js. The outline went something like this:

### I. Ideation

I knew I wanted to stand up a marketing page, but I didn't really have a product/brand/etc. So I went to the Vercel AI SDK playground and got ChatGPT-4o to generate a product/brand/copy for me based on a pretty simple landing page outline. [Here were the prompts](https://sdk.vercel.ai/s/xCxQ9K9lBhip) that generated the lion's share of the copy. For the images of our CTO testimonials, I went to the AI page in the Vercel dashboard and used SDXL.

I had most of the raw materials, I just needed to build the actual website.

**Vercel in Use:** AI

### II. Setup

Now that I had the idea, I needed to setup my dev environment. I decided to use the 15 RC of Create Next App so I could take advantage of the --empty flag, which is great because I have spent a lot of time clearing out CNA defaults when spinning up a quick prototype. I then went ahead and did a lot of my customization/OCD that I have baked into my personal CNA template, like alphabetizing stuff, Prettier, etc. I also set up Next's --experimental-https flag, because development is easier when you can take the consistent protocol for granted.

With that in place, I went ahead and added some dependencies and tweaked some others:

* Turbo, because we are obsessed with shipping.
* Switched Tailwind 3 for Tailwind 4, which has some quirks and things that I miss about 3 (a better handling of hover styling, for one) but I like the variable-driven approach.
* Added React Compiler because why not.

At this point, we're setup and ready to build.

**Vercel in Use:** Turbo

**Next.js in Use:** Create Next App, --experimental-https

### III. Development

This is not the most sophisticated Next.js website that has ever been built, but I think that's actually one of the core strengths of Next.js. It's the best tool in the business for getting something spun up quickly that is also the best tool in the business for building something big and complex and rich.

I wanted to build some relatively simple UI components: a hero, some value props, testimonials, and a contact form. I wanted to showcase how powerful vanilla CSS has gotten, demonstrate simple Server Actions for forms, and use the new `unstable_after()` feature to demonstrate what it would look like to give instant feedback to the user while awaiting a long round trip API call.

Satisfied with a couple of hours of work, I pushed my code to main and enabled a Vercel project. I then pointed https://synergia.laugharn.dev at the project, and since laugharn.dev was already running on Vercel DNS, it more or less instantly was ready to go as an MVP.

But we can probably have a little bit more fun.

**Vercel in Use:** Deployments, DNS, Geist, GitHub Integration

**Next.js in Use:** App Router, Server Actions, `unstable_after()`

### IV. Refinement

One of the initiatives at my day job I'm the most proud of is our server-side A/B experimentation platform. This got even better when Vercel rolled out Flags. I wanted to demonstrate that with two simple experiments, changing the brand color from aquamarine to lightpink, and updating the h1 copy. I also went ahead and added a Vercel Analytics event to our form, which would work nicely with Flags in the Analytics dashboard.

I also added a basic icon and open graph image, leveraging App Router's intelligent parsing of those files.

**Vercel in Use:** Flags, Analytics, Toolbar

**Next.js in Use:** Flags, Middleware, image files

## What's Next

If this project were to be real and or get bigger, here would be some of the next steps to take in development (assuming we had time to not work on the Holistic Disruption Paradigm Mesh™):

* More content, which means probably some kind of CMS and fetch/revalidation patterns
* More robust forms, actually wired to store somewhere
* A11y updates
* Automated E2E tests with Playwright
* More markup: JSON schema, feeds, dynamic Open Graph
