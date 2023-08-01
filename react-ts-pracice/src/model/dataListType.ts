// 보통 타입은 Modal 폴더에 따로 만들어서 모아둔다.

// let data = {
//   name: "레스토랑1",
//   category: "western",
//   address: {
//     city: "incheoi",
//     detail: "somewhere",
//     zipCode: 21354654,
//   },
//   menu: [
//     {
//       name: "rose pasta",
//       price: 20000,
//       category: "PASTA",
//     },
//     {
//       name: "garlic steak",
//       price: 40000,
//       category: "STEAK",
//     }
//   ]
// };

export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[]; // 이렇게 생긴 객체의 배열 타입이다.
};

export type Address = {
  city: string;
  detail: string;
  zipCode: number;
};

// 속성 빼기 가능
export type AddressWithoutZip = Omit<Address, "zipCode">;
// Omit<타입이름, "뺄 속성의 key">

// 속성 하나만 선택해서 가져오고 싶다
export type OnlyCategor = Pick<Restaurant, "category">;

// ? 사용해서도 사용 가능 -> 속성 사용에 강제성이 없어서 주의해서 사용

export type Menu = {
  name: string;
  price: number;
  category: string;
};

// api
export type ApiResponse<T> = {
  data: T[];
  totalPage: number;
  page: number;
};

export type ResturantRes = ApiResponse<Restaurant>;
export type MenuRes = ApiResponse<Menu>;
