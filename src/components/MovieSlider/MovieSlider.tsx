import React, { useState, useRef } from "react";
import MovieSliderItem from "./MovieSliderItem";

const MovieSlider: React.FC<MovieSliderProps> = ({
  updateSelectedMovieSliderId,
  selectedMovieSliderId,
  datas,
}) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX!;
    sliderRef.current!.scrollLeft = scrollLeft - deltaX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  return (
    <div
      className="absolute bottom-4 w-64 hover:cursor-grab right-0 flex flex-nowrap overflow-hidden whitespace-nowrap gap-4 p-4 z-[99]"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {datas.map((data, index) => (
        <MovieSliderItem
          key={data.id}
          index={index}
          movie={data}
          selectedMovieSliderId={selectedMovieSliderId}
          updateSelectedMovieSliderId={updateSelectedMovieSliderId}
        />
      ))}
    </div>
  );
};

export default MovieSlider;
