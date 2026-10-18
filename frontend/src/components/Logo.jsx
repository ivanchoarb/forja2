// Forja's isotype (anvil and sparks), drawn in the accent colour at the current font size.
export default function Logo() {
  return (
    <svg viewBox="0 0 100 100" width="1.4em" height="1.4em" fill="currentColor" aria-hidden="true">
      <g transform="translate(3 0)">
        <path d="M8 44 H86 V54 H70 C63 54 61 60 61 66 V70 H73 V80 H27 V70 H39 V66 C39 60 37 54 30 54 H26 C17 54 11 50 8 44 Z" />
        <g stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none">
          <path d="M58 33 L62 20" /><path d="M68 36 L79 27" /><path d="M48 34 L44 23" />
        </g>
      </g>
    </svg>
  )
}
