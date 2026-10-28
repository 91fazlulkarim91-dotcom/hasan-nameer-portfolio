const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function Svg({ size = 20, children, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      {...base}
      {...props}
    >
      {children}
    </svg>
  )
}

export const GithubIcon = (p) => (
  <Svg {...p}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </Svg>
)

export const LinkedinIcon = (p) => (
  <Svg {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </Svg>
)

export const TwitterIcon = (p) => (
  <Svg {...p}>
    <path d="M4 4l7.2 9.3L4.4 20h2.4l5.6-5.6L16.8 20H20l-7.5-9.7L19.4 4h-2.4l-5.1 5.1L8.2 4H4z" />
  </Svg>
)

export const DribbbleIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8.6 2.8c4.3 5 6.8 10.3 7.5 18.1M21.6 9.4c-6.6 1.3-11.7.7-17.5-2.1M2.7 15.4c5.2-2.9 11.1-3 18.7-.4" />
  </Svg>
)

export const MailIcon = (p) => (
  <Svg {...p}>
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="m3 7 9 6 9-6" />
  </Svg>
)

export const PinIcon = (p) => (
  <Svg {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </Svg>
)

export const ArrowUpRightIcon = (p) => (
  <Svg {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Svg>
)

export const ArrowUpIcon = (p) => (
  <Svg {...p}>
    <path d="M12 20V4M5 11l7-7 7 7" />
  </Svg>
)

export const SunIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </Svg>
)

export const MoonIcon = (p) => (
  <Svg {...p}>
    <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </Svg>
)

export const MenuIcon = (p) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Svg>
)

export const CloseIcon = (p) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
)

export const CopyIcon = (p) => (
  <Svg {...p}>
    <rect x="9" y="9" width="12" height="12" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </Svg>
)

export const CheckIcon = (p) => (
  <Svg {...p}>
    <path d="m4 12 5 5L20 6" />
  </Svg>
)

export const DownloadIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3v12M7 10l5 5 5-5M4 21h16" />
  </Svg>
)

export const CodeIcon = (p) => (
  <Svg {...p}>
    <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
  </Svg>
)

export const ServerIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="3" width="18" height="7" rx="2" />
    <rect x="3" y="14" width="18" height="7" rx="2" />
    <path d="M7 6.5h.01M7 17.5h.01" />
  </Svg>
)

export const SparklesIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3zM19 15l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9L19 15z" />
  </Svg>
)

export const ChevronLeftIcon = (p) => (
  <Svg {...p}>
    <path d="m15 18-6-6 6-6" />
  </Svg>
)

export const ChevronRightIcon = (p) => (
  <Svg {...p}>
    <path d="m9 18 6-6-6-6" />
  </Svg>
)

export const ExternalIcon = (p) => (
  <Svg {...p}>
    <path d="M15 3h6v6M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
  </Svg>
)

export const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  dribbble: DribbbleIcon,
  mail: MailIcon,
  pin: PinIcon,
  code: CodeIcon,
  server: ServerIcon,
  sparkles: SparklesIcon,
}
