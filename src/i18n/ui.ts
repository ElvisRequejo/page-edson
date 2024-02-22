import SpainFlag from "@/components/flags/Spain.astro";
import BrazilFlag from "@/components/flags/Brazil.astro";

// Add missing imports
export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof SpainFlag }
> = {
  pt: {
    code: "pt",
    name: "Portugues",
    flag: BrazilFlag,
  },
  es: {
    code: "es",
    name: "Español",
    flag: SpainFlag,
  },
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.inicio": "Inicio",
    "nav.music": "Música",
    "nav.video": "Videos",
    "nav.bio": "Biografía",
    "nav.legal": "Aviso Legal",
    "nav.privacidad": "Privacidad",
    "nav.cookies": "Cookies",
  },
  pt: {
    "nav.inicio": "Home",
    "nav.music": "Música",
    "nav.video": "Vídeos",
    "nav.bio": "Biografia",
    "nav.legal": "Legal Notice",
    "nav.privacidad": "Privacy",
    "nav.cookies": "Cookies",
  },
} as const;

export const routes = {
  es: {
    music: "musica",
    video: "video",
    bio: "bio",
    "aviso-legal": "aviso-legal",
    privacidad: "privacidad",
    cookies: "cookies",
  },
  pt: {
    music: "musica",
    video: "video",
    bio: "bio",
    "aviso-legal": "legal-notice",
    privacidad: "privacy",
    cookies: "cookies",
  },
};
