export interface FormatPrice {
  amount: any;
  currency: Boolean;
  device: string;
}
export function formatPrice(params: FormatPrice) {
  if (params.amount) {
    const curr = params.currency ? " " + params.device : "";
    params.amount = String(params.amount)
      .replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return `${params.amount}${curr}`;
  }
  return "";
}
