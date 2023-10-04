interface MovieSliderProps {
  updateSelectedMovieSliderId: React.Dispatch<React.SetStateAction<number>>;
  selectedMovieSliderId: number;
  datas: Movie[];
}
