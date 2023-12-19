import React from "react";
import { data } from "../Data";
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../Store/cartSlice";

const Home = () => {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.cartState);
  const { add } = cartSlice.actions;
  console.log(globalState);
  return (
    <>
      <p className="text-xl font-bold p-5">NEW IN</p>
      <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full mb-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex border-solid border-2 px-2 m-2 gap-4"
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
                className="h-8 bg-blue-400 px-2 whitespace-nowrap rounded"
                onClick={() => dispatch(add(item))}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
