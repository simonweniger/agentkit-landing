import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'

import { Layout } from '@/components/Layout'
import * as mdxComponents from '@/components/mdx'

import '@/styles/tailwind.css'
import 'focus-visible'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AgentKit - Powerful Toolkit To Build, Deploy & Manage AI Agents for Apps</title>
        <meta
          name="description"
          content="AgentKit - Powerful Toolkit To Build, Deploy & Manage AI Agents for Apps"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://agentkit.io" />
        <meta property="og:title" content="AgentKit" />
        <meta property="og:description" content="AgentKit - Powerful Toolkit To Build, Deploy & Manage AI Agents for Apps" />
        <meta property="og:image" content="/create-agent.jpeg" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="AgentKit - Powerful Toolkit To Build, Deploy & Manage AI Agents for Apps" />
        <meta name="twitter:url" content="https://agentkit.io" />
        <meta name="twitter:title" content="AgentKit" />
        <meta name="twitter:description" content="AgentKit - Powerful Toolkit To Build, Deploy & Manage AI Agents for Apps" />
        <meta name="twitter:image" content="/create-agent.jpeg" />
      </Head>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <MDXProvider components={mdxComponents}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </ThemeProvider>
    </>
  )
}
