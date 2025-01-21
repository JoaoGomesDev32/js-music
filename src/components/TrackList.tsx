import React from 'react';
import { Box, List, ListItem, ListItemText, Button } from '@mui/material';

interface TrackListProps {
  tracks: Track[];
  onAdd: (track: Track) => void;
}

const TrackList: React.FC<TrackListProps> = ({ tracks, onAdd }) => {
  return (
    <Box mt={3}>
      <h2>Resultados da Pesquisa</h2>
      {tracks.length > 0 ? (
        <List>
          {tracks.map((track) => (
            <ListItem key={track.id} divider>
              <ListItemText
                primary={track.title}
                secondary={`${track.artist} | Álbum: ${track.album}`}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => onAdd(track)}
              >
                Adicionar
              </Button>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>Nenhuma música encontrada. Tente uma nova pesquisa!</p>
      )}
    </Box>
  );
};

export default TrackList;
