import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import TrackList from "./components/TrackList";
import Playlist from "./components/Playlist";
import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";

const App: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [playlist, setPlaylist] = useState<Track[]>([]);

  const handleSearch = async (searchTerm: string) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/search?q=${encodeURIComponent(searchTerm)}`
      );
      const data = await response.json();

      const fetchedTracks = data.data.map((item: DeezerTrack) => ({
        id: item.id,
        title: item.title,
        artist: item.artist.name,
        album: item.album.title,
      }));
      setTracks(fetchedTracks);
    } catch (error) {
      console.error("Erro ao buscar músicas:", error);
    }
  };

  const handleAddToPlaylist = (track: Track) => {
    if (!playlist.find((t) => t.id === track.id)) {
      setPlaylist((prev) => [...prev, track]);
    }
  };

  const handleRemoveFromPlaylist = (track: Track) => {
    setPlaylist((prev) => prev.filter((t) => t.id !== track.id));
  };

  const handleAddFromStorage = (track: Track) => {
    if (!playlist.find((t) => t.id === track.id)) {
      setPlaylist((prev) => [...prev, track]);
    }
  };

  return (
    <div className="container mt-4">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <Card title="Resultados da Pesquisa">
        {tracks.length > 0 ? (
          <TrackList tracks={tracks} onAdd={handleAddToPlaylist} />
        ) : (
          "Nenhuma música encontrada. Tente uma nova pesquisa!"
        )}
      </Card>
      <Card title="Sua Playlist">
        {playlist.length > 0 ? (
          <Playlist
            tracks={playlist}
            onRemove={handleRemoveFromPlaylist}
            onAddFromStorage={handleAddFromStorage}
          />
        ) : (
          "Sua playlist está vazia. Adicione algumas músicas!"
        )}
      </Card>
    </div>
  );
};

export default App;