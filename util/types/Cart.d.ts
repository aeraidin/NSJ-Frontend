/** @format */

interface CartDetail {
  sanslist: CartItems[];
  packagelist: packCartItems[];
  totalPrice: number;
  totalDiscount: number;
}
interface sansCartItems {
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

interface packCartItems {
  id: number;
  serviceName: string;
  location: string;
  price: number;
  priceAfterDiscount: number;
  discountPresentage: number;
  sportComplex: { id: number; name: string };
  start: string;
  end: string;
  type: number;
  service: {
    id: number;
    name: string;
  };
  hasDiscount: false;
  count: number;
  //   clientType: 1 | 0;
  //   date: string;
  //   startTime: string;
  //   endTime: string;
}
