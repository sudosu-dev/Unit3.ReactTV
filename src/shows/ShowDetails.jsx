import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList.jsx";
import EpisodeDetails from "../episodes/EpisodeDetails.jsx";
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ selectedShow }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!selectedShow) {
    return <p>Please select a show to learn more.</p>;
  }

  return (
    <div className="show-details">
      {/* <h2>{selectedShow.name}</h2> */}
      <EpisodeList
        name={selectedShow.name}
        episodes={selectedShow.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
