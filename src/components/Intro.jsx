import { IconLink } from '@/components/IconLink'
import { SignUpForm } from '@/components/SignUpForm'

function BookIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M7 3.41a1 1 0 0 0-.668-.943L2.275 1.039a.987.987 0 0 0-.877.166c-.25.192-.398.493-.398.812V12.2c0 .454.296.853.725.977l3.948 1.365A1 1 0 0 0 7 13.596V3.41ZM9 13.596a1 1 0 0 0 1.327.946l3.948-1.365c.429-.124.725-.523.725-.977V2.017c0-.32-.147-.62-.398-.812a.987.987 0 0 0-.877-.166L9.668 2.467A1 1 0 0 0 9 3.41v10.186Z" />
    </svg>
  )
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M5.526 13.502c5.032 0 7.784-4.168 7.784-7.783 0-.119 0-.237-.008-.353a5.566 5.566 0 0 0 1.364-1.418 5.46 5.46 0 0 1-1.571.431c.571-.342.998-.88 1.203-1.513a5.483 5.483 0 0 1-1.737.664 2.738 2.738 0 0 0-4.662 2.495 7.767 7.767 0 0 1-5.638-2.858 2.737 2.737 0 0 0 .847 3.651 2.715 2.715 0 0 1-1.242-.341v.035a2.737 2.737 0 0 0 2.195 2.681 2.73 2.73 0 0 1-1.235.047 2.739 2.739 0 0 0 2.556 1.9 5.49 5.49 0 0 1-4.049 1.133A7.744 7.744 0 0 0 5.526 13.5" />
    </svg>
  )
}

function SparkleIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M5.338 9.805c.11.418.439.747.857.857C7.282 10.948 8 11.44 8 12s-.718 1.052-1.805 1.338c-.418.11-.747.439-.857.857C5.052 15.281 4.56 16 4 16s-1.052-.718-1.338-1.805a1.205 1.205 0 0 0-.856-.857C.718 13.052 0 12.56 0 12s.718-1.052 1.806-1.338c.417-.11.746-.439.856-.857C2.948 8.718 3.441 8 4 8c.56 0 1.052.718 1.338 1.805Z"
      />
      <path d="M12.717 2.432c.1.42.43.75.85.852C15.026 3.633 16 4.27 16 5s-.975 1.367-2.432 1.716c-.42.101-.75.432-.851.852C12.367 9.025 11.729 10 11 10c-.729 0-1.367-.975-1.716-2.432-.101-.42-.431-.75-.851-.852C6.975 6.367 6 5.73 6 5c0-.73.975-1.367 2.433-1.717.42-.1.75-.43.85-.85C9.634.974 10.272 0 11 0c.73 0 1.367.975 1.717 2.432Z"
      />
    </svg>
  )
}

export function Intro() {
  return (
    <>
      <h1 className="mt-14 font-display text-4xl/tight font-light text-white">
        Powerful Toolkit To <br /> Build, Deploy, And Manage <br />
        <span className="text-orange-400">AI-Agents for your App.</span>
      </h1>
      <p className="mt-4 text-sm/6 text-gray-300">
        AgentKit is a powerful tool suite that simplifies the creation and deployment of production ready Agentic AI systems or AI Agents. It provides a range of features such as built in memory and document retrieval via vector dbs, powerful tools, webhooks, cron jobs etc.
      </p>
      <SignUpForm />
      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        {/* 
        <IconLink href="https://superagent-swift-docs.vercel.app/" icon={BookIcon} className="flex-none">
          Documentation
        </IconLink>
       
        <IconLink href="https://github.com/simonweniger/agentkit-swift" icon={GitHubIcon} className="flex-none">
          GitHub
        </IconLink>
        <IconLink href="https://agentkit.io" icon={SparkleIcon} className="flex-none">
          AgentKit
        </IconLink>
         */}
      </div>
    </>
  )
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      Brought to you by{' '}
      <IconLink href="https://twitter.com/SimonWeniger" icon={TwitterIcon} compact small>
        Simon Weniger
      </IconLink>
    </p>
  )
}
