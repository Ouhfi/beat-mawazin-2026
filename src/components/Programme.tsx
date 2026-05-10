import data from '../data/data.ts'; 
import
export function ArtistsList() { 
  return (
    <div className="main-app">
      <h1 style={{ textAlign: 'center' }}>Programme Mawazine 2026</h1>
      
      <div className="card-container">
        {data.map((artist) => (
          <div key={artist.id} className="artist-card">
            <img src={artist.image} alt={artist.name} className="artist-img" />
            <div className="info">
              <h3>{artist.name}</h3>
              <p><strong>Genre:</strong> {artist.genre}</p>
              <p><strong>Scène:</strong> {artist.stage}</p>
              <p><strong>Heure:</strong> {artist.time}</p>
              <button className="detail-btn">Voir détail</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}