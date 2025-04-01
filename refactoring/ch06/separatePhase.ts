type Product = {
  basePrice: number;
  discountRate: number;
  discountThreshold: number;
};

type ShippingMethod = {
  discountThreshold: number;
  discountFee: number;
  feePerCase: number;
};

function priceOrder(
  product: Product,
  quantity: number,
  shippingMethod: ShippingMethod
): number {
  const basePrice = product.basePrice * quantity;
  const disccount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;

  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountFee
      : shippingMethod.feePerCase;

  const shippingCost = quantity * shippingPerCase;
  const price = basePrice - disccount + shippingCost;
  return price;
}
