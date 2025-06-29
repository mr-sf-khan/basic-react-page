import React from "react";

const Main = () => {
  return (
    <div className="container flex justify-center items-center">
      <div className=" container-2 flex justify-between align-middle items-center ">
      <div className="upper">
        <h1 className="tag">YOUR FEET DESERVE THE BEST</h1>
        <p className="p-tag w-100 line ">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="main-button">
        <button className="btn-1">Shop Now</button>
        <button className=" btn-2 bg-transparent border-2 border-black">Category</button>
        </div>
        <p className="last">Also Available on</p>
        <div className="tickers">
          <img src="\src\assets\amazon.png" alt="" />
        <img src="\src\assets\flipkart.png" alt="" /> 
        </div>
      </div>
      <div className="shoe">
        <img src="\src\assets\shoe_image.png" alt="" />
      </div>   
    </div>
    </div>
  );
};

export default Main;
