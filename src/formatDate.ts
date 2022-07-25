export interface FormatDateOptions {
    data: any;
    $locale: any;
    $t: any;
}

export function formatDate(options: FormatDateOptions) {
  const date = new Date(options.data);
  return date
    .toLocaleString(options.$locale, {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(",", options.$t("index.at"));
}

