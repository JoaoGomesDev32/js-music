interface Track {
    id: string;
    title: string;
    artist: string;
    album: string;
  }
  
  interface DeezerTrack {
    id: string;
    title: string;
    artist: {
      name: string;
    };
    album: {
      title: string;
    };
  }
  