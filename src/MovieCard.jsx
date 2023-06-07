import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { name, image, language, genres, runtime, rating } = movie.show;
  console.log(movie);
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image.medium} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold mx-auto">{name}</h2>
        <div className="text-xl">
          <p>
            <span className="font-bold">Language:</span> {language}
          </p>
          <p>
            <span className="font-bold"> Genre:</span> {genres[0]}, {genres[1]}
          </p>
          {runtime && (
            <p>
              <span className="font-bold">Run Time:</span> {runtime} Min.
            </p>
          )}
          {rating.average && (
            <p>
              <span className="font-bold">Ratings:</span> {rating.average}
            </p>
          )}
        </div>
        <div className="card-actions justify-center">
          <Link to={`details/${movie.id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
