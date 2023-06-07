import { useLoaderData } from "react-router-dom";

const SummaryPage = () => {
  const movie = useLoaderData(null);
  console.log(movie.id);
  return (
    <div>
      <h2>{movie.summary}</h2>
    </div>
  );
};

export default SummaryPage;
