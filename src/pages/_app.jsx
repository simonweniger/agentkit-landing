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
        <title>AgentKit - Build, Deploy & Manage AI Agents in Apple Platform Apps</title>
        <meta
          name="description"
          content="Build, deploy, and manage LLM-powered agents on  platforms"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://agentkit.io" />
        <meta property="og:title" content="AgentKit" />
        <meta property="og:description" content="Build, deploy, and manage LLM-powered agents on  platforms" />
        <meta property="og:image" content="/create-agent.jpeg" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="Build, deploy, and manage LLM-powered agents on  platforms" />
        <meta name="twitter:url" content="https://agentkit.io" />
        <meta name="twitter:title" content="AgentKit" />
        <meta name="twitter:description" content="Build, deploy, and manage LLM-powered agents on  platforms" />
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
