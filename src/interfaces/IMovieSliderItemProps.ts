interface MovieSliderItemProps {
  updateSelectedMovieSliderId: React.Dispatch<React.SetStateAction<number>>;
  selectedMovieSliderId: number;
  index: number;
  movie: Movie;
}
