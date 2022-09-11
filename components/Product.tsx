import { PlusIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from 'react';
import { urlFor } from "../sanity";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/basketSlice";
import toast from "react-hot-toast";


interface Props{
    product: Product;
}

function Product({ product }: Props) {
  

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket(product));

    toast.success(`${product.title} is now in cart`, {
      style: {
        border: '1px solid black',
        padding: '16px',
        color: '#00223E',
      },
      iconTheme: {
        primary: '#6cd452',
        secondary: '#effbec',
      },
      position: "bottom-center",
    });
  };

  return <div className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10">
    <div className="relative h-64 w-full md:h-72">
        <Image
          src={urlFor(product.image[0]).url()}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-white md:text-xl">
          <p className="title bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] bg-clip-text text-transparent cursor-default">{product.title}</p>
          <p className="bg-gradient-to-r from-[#005AA7] to-[#FFFDE4] bg-clip-text text-transparent">From ${product.price}</p>
          {/* <p className="title bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">Check History</p> */}
        </div>
        <div
          className="flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#ff9966] to-[#ff5e62] md:h-[70px] md:w-[70px]" onClick={addItemToBasket}>
          <PlusIcon className="h-10 w-10 text-white" />
        </div>

      </div>
  </div>;
}

export default Product;