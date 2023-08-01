import React, { useState } from "react";
import Store from "./Store";
import { Address, Restaurant } from "./model/dataListType";
import { BestMenu } from "./BestMenu";

let data: Restaurant = {
  name: "레스토랑1",
  category: "western",
  address: {
    city: "incheoi",
    detail: "somewhere",
    zipCode: 21354654,
  },
  menu: [
    {
      name: "rose pasta",
      price: 20000,
      category: "PASTA",
    },
    {
      name: "garlic steak",
      price: 40000,
      category: "STEAK",
    },
  ],
};

// React.FC : 함수 컴포넌트 타입 지정
const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
  };
  const showBestMenu = (name: string) => {
    return name;
  };

  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress} />
      <BestMenu name="불고기피자" category="피자" showBestMenu={showBestMenu} />
    </div>
  );
};

export default App;
