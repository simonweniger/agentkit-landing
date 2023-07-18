import { useId } from 'react'

export function Logo(props) {
  let id = useId()

  return (
    <h1 className='inline-block text-white text-xl sm:text-2xl font-extrabold tracking-tight w-auto h-7 relative'>Superagent Swift</h1>
  )
}
