import React from "react";
import BannerItem from "./BannerItem";

const HomePageCarousel = () => {
    const bannerData = [
        {
          image: "https://staticg.sportskeeda.com/editor/2023/01/4c824-16736287810378-1920.jpg",
          prev: 6,
          next: 2,
          id: 1
        },
        {
          image: "https://firstavemedicalspa.com/wp-content/uploads/2020/01/Skin-Care-Routine-Tips-for-Men.jpg",
          prev: 1,
          next: 3,
          id: 2
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8n3WQIR4_v6r8945Wv6FJvYJXR8t2MjnXcOQh38nIKEcNnKRSnhxAPnZJbdzcSDcJ9Y&usqp=CAU",
          prev: 2,
          next: 4,
          id: 3
        },
        {
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYk9bxnH1Qm4YSqHR1gZE6PrrBejw43B3GCCfU_Eq8AH8XpWWM4d9QZdR6CA-Lnd0RG0&usqp=CAU",
          prev: 3,
          next: 1,
          id: 4
        }
        
      ]
      

  return (
    <div className="carousel  w-full  py-5 ">
    {
      bannerData.map((slide,i) => <BannerItem key={i} slide={slide} />)
    }
    
  </div>
  )
};

export default HomePageCarousel;
