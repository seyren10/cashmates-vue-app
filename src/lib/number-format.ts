export const formatToPhp = (value: number) =>
  value.toLocaleString('en-PH', { style: 'currency', currency: 'PHP', minimumFractionDigits: 0 })
