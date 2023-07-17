import { useId } from 'react'

export function Logo(props) {
  let id = useId()

  return (
    <h1 className='font-bold text-lg text-white'>Superagent Swift SDK</h1>
  )
}
