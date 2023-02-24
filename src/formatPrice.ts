export interface FormatPrice {
  amount: string | number;
  currency?: Boolean;
  device?: string;
}

export function formatPrice({
  amount,
  currency = true,
  device = 'F CFA',
}: FormatPrice) {
  if (amount || +amount === 0) {
    const curr = currency ? ' ' + device : '';
    amount = String(amount)
      .replace(/\D/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return `${amount}${curr}`;
  }
  return '';
}
