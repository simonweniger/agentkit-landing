import { useId } from 'react'

export function Logo(props) {
  let id = useId()

  return (
    <h1 className='inline-block text-white text-lg sm:text-xl font-extrabold tracking-tight w-auto h-7 relative'>AgentKit</h1>
  )
}
