/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */

import { useState } from "react";
import { tvShows } from "./shows/data";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";

export default function App() {
  // === State Variables ===
  const [selectedShow, setSelectedShow] = useState(null);
  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection tvShows={tvShows} setSelectedShow={setSelectedShow} />
      </header>
      <main>
        <ShowDetails selectedShow={selectedShow} />
      </main>
    </>
  );
}
