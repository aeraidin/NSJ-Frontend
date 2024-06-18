interface CartDetail {
 list: CartItems[];
 totalPrice: number;
 totalDiscount: number;
}
interface CartItems {
 id: number;
 filePath: string;
 serviceName: string;
 location: string;
 price: number;
 priceAfterDiscount: number;
 discountPresentage: number;
 sportComplex: { id: number; name: string };

 service: {
  id: number;
  name: string;
 };
 hasDiscount: false;
 count: number;
 clientType: 1 | 0;
 date: string;
 startTime: string;
 endTime: string;
}
