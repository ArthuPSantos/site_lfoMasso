import { WHATSAPP_LINK, INSTAGRAM_LINK, FACEBOOK_LINK } from "./whatsapp";

export function FloatingSocial() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2.5 sm:bottom-5 sm:right-5 sm:gap-3">
      <a
        href={INSTAGRAM_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-lg transition-transform hover:-translate-y-0.5 sm:h-12 sm:w-12"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      </a>
      <a
        href={FACEBOOK_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
        className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-lg transition-transform hover:-translate-y-0.5 sm:h-12 sm:w-12"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.2c0-.9.3-1.5 1.6-1.5H16V5.1c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H7.7v3h2.4v7h3.4z" />
        </svg>
      </a>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="group flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl sm:px-5"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.157 5.335 5.492 0 12.05 0a11.82 11.82 0 018.413 3.488 11.821 11.821 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
        <span className="text-xs font-medium uppercase tracking-wider">Agendar</span>
      </a>
    </div>
  );
}