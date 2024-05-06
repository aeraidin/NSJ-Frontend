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
enum Contact {
  Address = 0,
  Phone = 1,
  PostalCode = 2,
  Map = 3,
}
interface contacts {
  id: number;
  type: Contact;
  value: string;
}
interface SingleProductPage {
  id: number;
  filePathes: string[];
  conditions: [];
  contacts: contacts[];
  description: string;
  name: string;
  rate: number;
  location: string;
  categoryName: string;
  service: {
    id: number;
    name: string;
  };
  price: number;
  discount: number;
  priceAfterDiscount: number;
  discountPresentage: number;
  hasDiscount: boolean;
  workHours: {
    fromDayOfWeak: number;
    toDayOfWeak: number;
    start: string;
    end: string;
  };
}
