export interface FormatDateOptions {
  data: string | Date | number;
  $locale?: string;
  $t?: (arg: string) => string;
  key?: string;
}

export function formatDate({
  data,
  $locale = 'fr',
  $t = (x: string) => ($locale === 'fr' ? 'à' : 'at'),
  key = 'index.at',
}: FormatDateOptions) {
  const date = new Date(data);
  return date
    .toLocaleString($locale, {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
    .replace(/(-|,|\s)/g, ` ${$t(key)} `);
}
