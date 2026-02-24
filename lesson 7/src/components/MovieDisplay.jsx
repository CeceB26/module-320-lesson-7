export default function MovieDisplay({ movie }) {

  const loaded = () => {
    return (
      <>
        <h1>{movie.Title}</h1>
        <h3>{movie.Year}</h3>
        <h4>{movie.Genre}</h4>
        <img src={movie.Poster} alt={movie.Title} />
      </>
    );
  };

  const loading = () => {
    return <h2>No Movie to Display</h2>;
  };

  return movie ? loaded() : loading();
}
