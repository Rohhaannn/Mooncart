import React, { useState } from 'react'
import { IoCartOutline, IoHeartOutline } from 'react-icons/io5'
import { Badges } from '../common/CustomComponent'
import { useSelector } from 'react-redux'
import { selectTotalQuantity } from '../../redux/slice/cartSlice'



const ModelCart = () => {

const totalQuantity = useSelector(selectTotalQuantity);
const [isOpen, setIsOpen] = useState(false);
const [isClosing, setIsClosing] = useState(false);
const [activeTab, setActiveTab] = useState("cart");


const openModel = () => {
  setIsOpen(true);
  // setIsClosing(true);
  document.body.style.overflowX = "hidden";
};

const closeModel = () => {
  setIsClosing(true);
  document.body.style.overflowX = "auto";
  setTimeout(() => {
    setIsOpen(false);
    setIsClosing(false);
  }, 300);
};



const handleTabChange = (tab) => {
  setActiveTab(tab);
}

  return (
    <>
      <button className='relative z-20' onClick={openModel}>
        <IoHeartOutline size={23} />
        <div className='absolute -top-2 -right-1.5'>
          <Badges color="bg-green-600">0</Badges>
        </div>
      </button>
      
      <button className='relative z-20' onClick={openModel}>
        <IoCartOutline size={23} />
        <div className='absolute -top-2 -right-1.5'>
          <Badges color="bg-red-600">{totalQuantity}</Badges>
        </div>
      </button>


      {isOpen && (
        <>

          <div className='cartoverlay' onClick={closeModel}>


          </div>

          <div className={`cartmodel p-16 text-primary ${isClosing? "closing" : ""}`}>

            <div className=' flex justify-between gap-5'>
              <button className={`flex item-center gap-2 font-medium ${activeTab === "cart" ? "text-primary" : ""}`} onClick={() => handleTabChange("cart")}
              > 
                Shopping Cart
                <span className='w-7 h-7 text-[13px] font-normal text-white rounded-full grid place-content-center bg-primary'>
                {totalQuantity}
                </span>
              </button>

              <button className={`flex item-center gap-2 font-medium ${activeTab === "cart" ? "text-primary" : ""}`} onClick={() => handleTabChange("cart")}
              > 
                Wishlist
                <span className='w-7 h-7 text-[13px] font-normal text-white rounded-full grid place-content-center bg-primary'>
                  0
                </span>
              </button>
            </div>

            <div className='line-container'>
              <div className={`line ${activeTab === "cart" ? "active" : ""}`}></div>
              <div className={`line ${activeTab === "wishlist" ? "active" : ""}`}></div>
            </div>

            {activeTab == "cart" ? (
              <>
                //show product
              </>
            ) : (
              <>
              
              </>
            )}

          </div>

        </>
      )}
    </>
  )
}

export default ModelCart
