import React from 'react';
import '../styles/WallpaperGrid.css';

const wallpapers = [
  { id: 1, url: 'path/to/wallpaper1.jpg', title: 'Wallpaper 1' },
  { id: 2, url: 'path/to/wallpaper2.jpg', title: 'Wallpaper 2' },
  // Add more wallpapers here
];

const WallpaperGrid = () => {
  return (
    <div className="wallpaper-grid">
      {wallpapers.map(wallpaper => (
        <div key={wallpaper.id}>
          <img src={wallpaper.url} alt={wallpaper.title} />
          <h3>{wallpaper.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default WallpaperGrid;
