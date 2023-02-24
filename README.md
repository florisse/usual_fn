# **usual_fn**

Commonly used functions

## **Features**

- **formatDate**: Format the date in the local format of your choice
- **formatPhone** : Format the phone number with/without prefix
- **formatPrice** : Format the amount in human readable format

## **Installation**

```bash
npm i usual_fn
```

## **formatDate**

Format the date in the local format of your choice

**formatDate(options: FormatDateOptions): string**

```ts
interface FormatDateOptions {
  data: string | Date | number;
  $locale?: string;
  $t?: (arg: string) => string;
  key?: string;
}
```

```ts
// Example

import { formatDate } from "usual_fn";

const formattedDate = formatDate({
  data: new Date(),
});

const formattedNow = formatDate({
  data: Date.now(),
});

console.log(formattedDate);
console.log(formattedNow);
```

## **formatPhone**

Format the phone number with/without prefix

**formatPhoneWithPrefixe(params: FormatPhone): string**

**formatPhone(params: FormatPhone): string**

```ts
interface FormatPhone {
  data: string;
}
```

```ts
// Example

import { formatPhone, formatPhoneWithPrefixe } from "usual_fn";

const formattedPhoneWithPrefix = formatPhoneWithPrefixe({
  data: "22997000000",
});
const formattedPhone = formatPhone({
  data: "97000000",
});

console.log(formatedPhoneWithPrefix);
console.log(formatedPhone);
```

## **formatPrice**

Format the amount in human readable format

**formatPrice(params: FormatPrice): string**

```ts
interface FormatPrice {
  amount: string | number;
  currency?: Boolean;
  device?: string;
}
```

```ts
// Example

import { formatPrice } from "usual_fn";

const amount = formatPrice({
  amount: 10000000,
  currency: true,
  device: "F CFA",
});

console.log(amount);
```
