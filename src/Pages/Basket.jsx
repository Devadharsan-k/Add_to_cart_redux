import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../Store/cartSlice";

const Basket = () => {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.cartState);
  const { remove, reset } = cartSlice.actions;

  useEffect(() => {
    const calculateTotal = () => {
      let totalPrice = 0;
      globalState.forEach((item) => {
        totalPrice += item.price;
      });
      setTotal(totalPrice);
    };

    calculateTotal();
  }, [globalState]);

  return (
    <div className="grid place-content-center">
      {total === 0 ? (
        <p className="m-5 text-2xl">No items in the basket</p>
      ) : (
        <>
          <div className="gap-x-16 grid place-content-center">
            <p className="m-5 text-2xl ">Total $ {total.toFixed(2)}</p>
            {globalState.length > 1 ? (
              <button
                onClick={() => dispatch(reset())}
                className="h-8 bg-red-500 text-white px-2 whitespace-nowrap rounded outline-none mb-5"
              >
                Clear All 💀
              </button>
            ) : (
              ""
            )}
          </div>
          {globalState.map((item, index) => (
            <div
              key={index}
              className="flex border-solid border-2 px-2 m-2 gap-4 w-fit"
            >
              <img
                src={item.image}
                alt="Img"
                className="h-[175px] w-[175px] object-cover p-4"
              />
              <div className="grid place-content-center gap-y-3">
                <p className=" font-medium text-lg">{item.name}</p>
                <p>$ {item.price}</p>
                <button
                  className="h-8 bg-red-500 text-white px-2 whitespace-nowrap rounded outline-none"
                  onClick={() => dispatch(remove(item))}
                >
                  Remove from cart
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Basket;
