interface BookStackProps {
  className?: string;
}

/**
 * Custom geometric illustration of a stack of books with a circulating arrow,
 * representing books being lent and returned within a community.
 */
export function BookStack({ className }: BookStackProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="A stack of books circulating between readers"
    >
      {/* Backdrop */}
      <circle cx="240" cy="240" r="200" fill="var(--light-accent)" />
      <circle cx="240" cy="240" r="200" stroke="var(--primary)" strokeOpacity="0.12" strokeWidth="2" />

      {/* Orbiting dotted ring */}
      <circle
        cx="240"
        cy="240"
        r="168"
        stroke="var(--primary)"
        strokeOpacity="0.35"
        strokeWidth="2"
        strokeDasharray="2 14"
        strokeLinecap="round"
      />

      {/* Book 1 (bottom) */}
      <g>
        <rect x="120" y="296" width="240" height="40" rx="8" fill="var(--foreground)" />
        <rect x="120" y="296" width="240" height="40" rx="8" fill="white" fillOpacity="0.04" />
        <rect x="136" y="308" width="120" height="6" rx="3" fill="white" fillOpacity="0.5" />
        <rect x="344" y="296" width="16" height="40" rx="6" fill="var(--primary)" />
      </g>

      {/* Book 2 */}
      <g>
        <rect x="104" y="252" width="240" height="40" rx="8" fill="var(--primary)" />
        <rect x="120" y="264" width="110" height="6" rx="3" fill="white" fillOpacity="0.7" />
        <rect x="328" y="252" width="16" height="40" rx="6" fill="var(--foreground)" />
      </g>

      {/* Book 3 */}
      <g>
        <rect x="132" y="208" width="240" height="40" rx="8" fill="white" />
        <rect x="132" y="208" width="240" height="40" rx="8" stroke="var(--border)" strokeWidth="2" />
        <rect x="148" y="220" width="130" height="6" rx="3" fill="var(--muted-foreground)" />
        <rect x="356" y="208" width="16" height="40" rx="6" fill="var(--primary)" />
      </g>

      {/* Open book on top */}
      <g>
        <path
          d="M150 196C150 196 186 176 240 176C240 176 240 196 240 196L240 188C186 188 150 196 150 196Z"
          fill="var(--foreground)"
        />
        <path
          d="M240 176C294 176 330 196 330 196C330 196 294 188 240 188L240 176Z"
          fill="var(--foreground)"
        />
        <path
          d="M152 192C152 192 188 174 240 174V190C188 190 152 192 152 192Z"
          fill="var(--primary)"
        />
        <path
          d="M328 192C328 192 292 174 240 174V190C292 190 328 192 328 192Z"
          fill="var(--light-accent)"
          stroke="var(--primary)"
          strokeWidth="2"
        />
      </g>

      {/* Circulating arrow */}
      <path
        d="M120 150 A 130 130 0 0 1 360 150"
        stroke="var(--primary)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M360 150 L 348 132 L 374 138 Z" fill="var(--primary)" />

      {/* Reader dots */}
      <circle cx="96" cy="150" r="18" fill="white" stroke="var(--primary)" strokeWidth="3" />
      <circle cx="96" cy="143" r="6" fill="var(--primary)" />
      <path d="M86 160 C86 152 106 152 106 160" stroke="var(--primary)" strokeWidth="3" fill="none" />

      <circle cx="384" cy="150" r="18" fill="var(--primary)" />
      <circle cx="384" cy="143" r="6" fill="white" />
      <path d="M374 160 C374 152 394 152 394 160" stroke="white" strokeWidth="3" fill="none" />

      {/* Sparkles */}
      <path d="M340 96 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4 z" fill="var(--primary)" fillOpacity="0.7" />
      <circle cx="132" cy="100" r="6" fill="var(--foreground)" fillOpacity="0.5" />
    </svg>
  );
}