import React from 'react';
import '../styles/WallpaperGrid.css';

const wallpapers = [
  { id: 1, url: '/Asserts/wallpaperflare.com_wallpaper (1).jpg', title: 'Wallpaper 1' },
  { id: 2, url: '/Asserts/wallpaperflare.com_wallpaper (3).jpg', title: 'Wallpaper 2' },
  { id: 3, url: '/Asserts/wallpaperflare.com_wallpaper (2).jpg', title: 'Wallpaper 3' },
  { id: 4, url: '/Asserts/wallpaperflare.com_wallpaper (4).jpg', title: 'Wallpaper 4' },
  { id: 5, url: '/Asserts/wallpaperflare.com_wallpaper (5).jpg', title: 'Wallpaper 5' },
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