import { Fragment, type ReactNode } from "react";

/** Texto com *palavras em itálico*. */
export function Em({ text }: { text: string }) {
  return (
    <>
      {text.split("*").map((parte, i) => (i % 2 ? <em key={i}>{parte}</em> : <Fragment key={i}>{parte}</Fragment>))}
    </>
  );
}

type IconProps = { className?: string };

export const IconWhatsApp = ({ className = "size-[1.15em]" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M3.2 20.8l1.3-4.6A8.7 8.7 0 1 1 7.9 19.6z" />
    <path d="M9 8.4c.2-.5.6-.5.9-.4.2.4.5 1.2.6 1.4.1.3 0 .5-.2.7l-.5.6c.8 1.5 1.9 2.4 3.3 3l.7-.8c.2-.2.4-.2.7-.1l1.5.8c.3.2.2.6.1.9-.4 1-1.6 1.4-2.5 1.2-2.7-.6-4.8-2.6-5.7-5.2-.2-.7.1-1.5.4-2.1z" fill="currentColor" stroke="none" />
  </svg>
);

export const IconMail = ({ className = "size-[1.15em]" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <path d="M3.5 7l8.5 6 8.5-6" />
  </svg>
);

export const IconPlay = ({ className = "size-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M8 5.5v13a1 1 0 0 0 1.5.9l10.2-6.5a1 1 0 0 0 0-1.8L9.5 4.6A1 1 0 0 0 8 5.5z" />
  </svg>
);

export const IconClose = ({ className = "size-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className={className} aria-hidden="true">
    <path d="M5 5l14 14M19 5L5 19" />
  </svg>
);

export const IconArrow = ({ className = "size-[1.1em]" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

type WaProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
  icon?: boolean;
  className?: string;
};

/** Botão único de contato: abre o WhatsApp em nova aba. */
export function WhatsAppButton({ href, children, variant = "primary", icon = true, className = "" }: WaProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-magnetic
      className={`btn ${variant === "primary" ? "btn-primary" : variant === "light" ? "btn-light" : "btn-outline"} ${className}`}
    >
      {icon && <IconWhatsApp />}
      <span>{children}</span>
      <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
    </a>
  );
}
