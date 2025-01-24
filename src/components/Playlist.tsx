import React, { useEffect } from "react";
import "./Playlist.css";

interface PlaylistProps {
  tracks: Track[];
  onRemove: (track: Track) => void;
  onAddFromStorage: (track: Track) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ tracks, onRemove, onAddFromStorage }) => {
  useEffect(() => {
    const storedPlaylist = localStorage.getItem("playlist");
    if (storedPlaylist) {
      try {
        const storedTracks: Track[] = JSON.parse(storedPlaylist);
        if (Array.isArray(storedTracks)) {
          const uniqueTracks = storedTracks.filter(
            (track) => !tracks.find((t) => t.id === track.id)
          );
          uniqueTracks.forEach((track) => {
            onAddFromStorage(track);
          });
        } else {
          console.error("Stored playlist is not an array");
        }
      } catch (error) {
        console.error("Error parsing stored playlist", error);
      }
    }
  }, [onAddFromStorage, tracks]);

  const savePlaylist = () => {
    localStorage.setItem("playlist", JSON.stringify(tracks));
    alert("Playlist salva com sucesso!");
  };

  const handleRemove = (track: Track) => {
    onRemove(track);
    const updatedTracks = tracks.filter((t) => t.id !== track.id);
    localStorage.setItem("playlist", JSON.stringify(updatedTracks));
  };

  return (
    <div className="playlist">
      <h2 className="playlist__title">Sua Playlist</h2>
      {tracks.length > 0 ? (
        <>
          <ul className="playlist__tracks">
            {tracks.map((track) => (
              <li key={track.id} className="playlist__track">
                <div className="playlist__track-info">
                  <h3 className="playlist__track-title">{track.title}</h3>
                  <p className="playlist__track-details">{`${track.artist} | Álbum: ${track.album}`}</p>
                </div>
                <button
                  className="playlist__remove-button"
                  onClick={() => handleRemove(track)}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <div className="playlist__actions">
            <button className="playlist__save-button" onClick={savePlaylist}>
              Salvar Playlist
            </button>
          </div>
        </>
      ) : (
        <p className="playlist__empty">Sua playlist está vazia. Adicione algumas músicas!</p>
      )}
    </div>
  );
};

export default Playlist;