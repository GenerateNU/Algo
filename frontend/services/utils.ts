export const prettifyMoney = (amount: number) => {
  const numberAmount = parseFloat(String(amount));
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    numberAmount
  );
};