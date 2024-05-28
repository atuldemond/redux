import React, { useContext, useState } from "react";


const Products = () => {
  return (
    <div className="w-[80vw] m-auto bg-red-100 h-screen px-[2vw] py-[2vh]">
      <div className="homepage text-5xl">Prodcuts</div>
      {/* {map((value) => { */}
        <div className="main w-[20vw] mt-[2vh] h-[60vh] border-black border-2 bg-white flex flex-col items-center rounded-lg">
          <div className="image">
            <img
              className="w-[18vw] h-[30vh] mt-[1vh] object-contain"
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt=""
            />
          </div>
          <div className="title mt-[1vh]  font-semibold text-center">
            Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor LC49HG90DMNXZA –
            Super Ultrawide Screen QLED
          </div>
          <div className="pric_rating w-[20vw]  mt-[2vh] mb-[1vh] flex justify-around ">
            <div className="rating font-semibold text-lg ">
              3.9 &#9733;&#9733;&#9733;&#9733;
            </div>
            <div className="price font-semibold text-xl"> $32</div>
          </div>
          <div className="2buttons w-[20vw] flex mt-[2vh] mb-[2vh] justify-between px-[1vw]">
            <div className="addtocart">
              <button className=" bg-red-200 font-semibold px-[1vw] py-[1vh] border-black border-2 rounded-lg ">
                Add to Cart
              </button>
            </div>
            <div className="addtoWishlist">
              <button className=" bg-red-200 font-semibold px-[1vw] py-[1vh] border-black border-2 rounded-lg ">
                Add to WishList
              </button>
            </div>
          </div>
        </div>;
      {/* })} */}
    </div>
  );
};

export default Products;
