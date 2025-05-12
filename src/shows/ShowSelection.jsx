import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ tvShows, setSelectedShow }) {
  return (
    <nav className="shows">
      <ul>
        {tvShows.map((show) => (
          <li key={show.name}>
            <a href="#" className="show" onClick={() => setSelectedShow(show)}>
              {show.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
