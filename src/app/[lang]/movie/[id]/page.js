import MovieDetails from "@/components/MovieDetails";

const MovieDetailsPage = async ({ params: { id }, lang }) => {
  return <MovieDetails id={id} lang={lang} />;
};
export default MovieDetailsPage;
