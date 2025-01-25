import React from 'react';
import './TrackList.css';

interface TrackListProps {
  tracks: Track[];
  onAdd: (track: Track) => void;
}

const TrackList: React.FC<TrackListProps> = ({ tracks, onAdd }) => {
  return (
    <div className="track-list">
      {tracks.length > 0 ? (
        <ul className="track-list__items">
          {tracks.map((track) => (
            <li key={track.id} className="track-list__item">
              <div className="track-list__info">
                <h3 className="track-list__title">{track.title}</h3>
                <p className="track-list__details">{`${track.artist} | Álbum: ${track.album}`}</p>
              </div>
              <button
                className="track-list__button"
                onClick={() => onAdd(track)}
              >
                Adicionar
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="track-list__empty">Nenhuma música encontrada. Tente uma nova pesquisa!</p>
      )}
    </div>
  );
};

export default TrackList;