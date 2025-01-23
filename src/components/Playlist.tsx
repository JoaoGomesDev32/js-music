import React from 'react';
import './Playlist.css';
// import { Box, List, ListItem, ListItemText, Button } from '@mui/material';

interface PlaylistProps {
  tracks: Track[];
  onRemove: (track: Track) => void;
  onSave: (name: string) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ tracks, onRemove, onSave }) => {
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
                  onClick={() => onRemove(track)}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <button
            className="playlist__save-button"
            onClick={() => onSave('Minha Playlist')}
          >
            Salvar Playlist
          </button>
        </>
      ) : (
        <p className="playlist__empty">Sua playlist está vazia. Adicione algumas músicas!</p>
      )}
    </div>
  );
};

export default Playlist;
