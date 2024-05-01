/** @format */

interface ProductCard {
  id: number;
  filePath: string;
  serviceName: string;
  rate: number;
  location: string;

  price: number;
  service: { id: number; name: string };
  priceAfterDiscount: number;
  discountPresentage: number;
  hasDiscount: boolean;
}
