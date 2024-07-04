import { Button } from '@/components/Button'

export function SignUpForm() {

  return (
    <form action="https://askaiden.us12.list-manage.com/subscribe/post?u=68c5a6adcfb61da33924f800c&amp;id=b1e1ca7850&amp;f_id=000941e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"  target="_blank" className="relative isolate mt-8 flex items-center pr-1">
      <label htmlFor="mce-EMAIL" className="sr-only">
        Email address
      </label>
      <input
        required
        type="email"
        name="EMAIL" 
        id="mce-EMAIL"
        autoComplete="email"
        placeholder="Email address"
        className="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6"
      />
      <Button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" arrow>
        Get updates
      </Button>
      <p></p>
      <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-purple-300/15" />
      <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-purple-300" />
      <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
                    <label htmlFor="b_name">Name: </label>
                    <input type="text" name="b_name" tabIndex="-1" value="" placeholder="Freddie" id="b_name"/>
                </div>
    </form>
  )
}
