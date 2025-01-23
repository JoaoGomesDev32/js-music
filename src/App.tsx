import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';
import Playlist from './components/Playlist';
import './App.css';


const App: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [playlist, setPlaylist] = useState<Track[]>([]);

  const handleSearch = async (searchTerm: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/search?q=${encodeURIComponent(searchTerm)}`);
      const data = await response.json();

      const fetchedTracks = data.data.map((item: DeezerTrack) => ({
        id: item.id,
        title: item.title,
        artist: item.artist.name,
        album: item.album.title,
      }));
      setTracks(fetchedTracks);
    } catch (error) {
      console.error('Erro ao buscar músicas:', error);
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

  const savePlaylist = async (name: string) => {
    try {
      const token = 'SEU_TOKEN_DE_AUTENTICAÇÃO_DEEZER';
      const trackIds = playlist.map((track) => track.id).join(',');

      const response = await fetch('https://api.deezer.com/user/me/playlists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: name,
          songs: trackIds,
        }),
      });

      if (response.ok) {
        console.log('Playlist salva com sucesso!');
      } else {
        console.error('Erro ao salvar a playlist:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao salvar a playlist:', error);
    }
  };

  return (
    <div className="container mt-4">
      <header className="text-center mb-4">
        <h1 className="display-4">JS Music</h1>
      </header>
      <div className="row">
        {/* Search Bar */}
        <div className="col-12 col-md-4 mb-4">
          <div className="p-3 shadow bg-white rounded">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
        {/* Track List */}
        <div className="col-12 col-md-4 mb-4">
          <div className="p-3 shadow bg-white rounded">
            <TrackList tracks={tracks} onAdd={handleAddToPlaylist} />
          </div>
        </div>
        {/* Playlist */}
        <div className="col-12 col-md-4 mb-4">
          <div className="p-3 shadow bg-white rounded">
            <Playlist tracks={playlist} onRemove={handleRemoveFromPlaylist} onSave={savePlaylist} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
