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

type PriceData = {
  basePrice: number;
  quantity: number;
  discount: number;
};

function priceOrder(
  product: Product,
  quantity: number,
  shippingMethod: ShippingMethod
): number {
  const priceData = calcPriceData(product, quantity);
  return applyShipping(priceData, shippingMethod);
}

function calcPriceData(product: Product, quantity: number): PriceData {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;

  return { basePrice, quantity, discount };
}

function applyShipping(
  priceData: PriceData,
  shippingMethod: ShippingMethod
): number {
  const shippingPerCase =
    priceData.basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountFee
      : shippingMethod.feePerCase;

  const shippingCost = priceData.quantity * shippingPerCase;
  return priceData.basePrice - priceData.discount + shippingCost;
}
