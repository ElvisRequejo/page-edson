import portugues from "@/i18n/pt.json";
import spanish from "@/i18n/es.json";

const LANG = {
  PORTUGUES: "pt",
  SPANISH: "es",
};

export const getI18N = ({
  currentLocale = "es",
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === LANG.PORTUGUES) return { ...spanish, ...portugues };
  return spanish;
};
