import React from 'react';


const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className='carousel-img '>
        <img alt="img" src={image} className="w-80 h-48  rounded-xl" />
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-20  bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle btn-sm mr-20">❮</a>
        <a href={`#slide${next}`} className="btn btn-circle btn-sm">❯</a>
      </div>
    </div>
  );
};

export default BannerItem;