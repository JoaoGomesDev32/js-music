import React from 'react';
import { Box, List, ListItem, ListItemText, Button } from '@mui/material';

interface PlaylistProps {
  tracks: Track[];
  onRemove: (track: Track) => void;
  onSave: (name: string) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ tracks, onRemove, onSave }) => {
  return (
    <Box mt={3}>
      <h2>Sua Playlist</h2>
      {tracks.length > 0 ? (
        <>
          <List>
            {tracks.map((track) => (
              <ListItem key={track.id} divider>
                <ListItemText
                  primary={track.title}
                  secondary={`${track.artist} | Álbum: ${track.album}`}
                />
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => onRemove(track)}
                >
                  Remover
                </Button>
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onSave('Minha Playlist')}
          >
            Salvar Playlist
          </Button>
        </>
      ) : (
        <p>Sua playlist está vazia. Adicione algumas músicas!</p>
      )}
    </Box>
  );
};

export default Playlist;
