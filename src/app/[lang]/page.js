import MovieCard from "@/components/MovieCard";


export default async function Home() {
  const response = await fetch(`http://localhost:3000/api/movies`)
  const movies = await response.json()
  

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
