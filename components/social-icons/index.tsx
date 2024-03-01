import {
  Mail,
  Github,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  X,
  Mastodon,
  Whatsapp,
  Telegram,
  Threads,
} from './icons'
import siteMetadata from '@/data/siteMetadata'

// Twitter icon replaced with "X" brand. If you prefer the blue bird icon, replace the X with "twitter" instead

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: X,
  mastodon: Mastodon,
  whatsapp: Whatsapp,
  telegram: Telegram,
  threads: Threads,
}

type SocialIconProps = {
  kind: keyof typeof components
  href?: string | undefined
  size?: number
}

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  const SocialSvg = components[kind]

  return (
    <>
      {kind === 'mail' && !href && siteMetadata.formspree === true ? (
        <>
          <span className="sr-only">{kind}</span>
          <SocialSvg
            className={`cursor-pointer fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
          />
        </>
      ) : (
        <a
          className="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          href={href}
        >
          <span className="sr-only">{kind}</span>
          <SocialSvg
            className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
          />
        </a>
      )}
    </>
  )
}

export default SocialIcon
