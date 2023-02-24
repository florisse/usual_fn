export interface FormatPhone {
  data: string;
}

export function formatPhoneWithPrefixe(params: FormatPhone) {
  if (params.data) {
    const phoneNumberLength = params.data.length;
    let cute = params.data.substring(3, phoneNumberLength);
    cute = cute.replace(/\D/g, '').replace(/\B(?=(\d{2})+(?!\d))/g, ' ');
    return `(${params.data.substring(0, 3)}) ${cute} `;
  }
  return '';
}

export function formatPhone(params: FormatPhone) {
  if (params.data) {
    return params.data.replace(/\D/g, '').replace(/\B(?=(\d{2})+(?!\d))/g, ' ');
  }
  return '';
}
