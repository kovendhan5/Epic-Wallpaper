import React, { useState } from 'react';
import '../styles/WallpaperGrid.css';

const wallpapers = [
  {
    id: 1,
    mobileUrl: '/assets/wallpaper-mobile-1.jpg',
    laptopUrl: '/Asserts/wallpaperflare.com_wallpaper (1).jpg',
    title: 'Wallpaper 1',
  },
  {
    id: 2,
    mobileUrl: '/assets/wallpaper-mobile-2.jpg',
    laptopUrl: '/Asserts/wallpaperflare.com_wallpaper (1).jpg',
    title: 'Wallpaper 2',
  },
  {
    id: 3,
    mobileUrl: '/assets/wallpaper-mobile-2.jpg',
    laptopUrl: '/Asserts/wallpaperflare.com_wallpaper (2).jpg',
    title: 'Wallpaper 3',
  },
  {
    id: 3,
    mobileUrl: '/assets/wallpaper-mobile-2.jpg',
    laptopUrl: '/Asserts/wallpaperflare.com_wallpaper (2).jpg',
    title: 'Wallpaper 3',
  },
  {
    id: 3,
    mobileUrl: '/assets/wallpaper-mobile-2.jpg',
    laptopUrl: '/Asserts/wallpaperflare.com_wallpaper (2).jpg',
    title: 'Wallpaper 3',
  },
  {
    id: 3,
    mobileUrl: '/assets/wallpaper-mobile-2.jpg',
    laptopUrl: '/Asserts/wallpaperflare.com_wallpaper (2).jpg',
    title: 'Wallpaper 3',
  },
  {
    id: 3,
    mobileUrl: '/assets/wallpaper-mobile-2.jpg',
    laptopUrl: '/Asserts/wallpaperflare.com_wallpaper (2).jpg',
    title: 'Wallpaper 3',
  },
  {
    id: 3,
    mobileUrl: '/assets/wallpaper-mobile-2.jpg',
    laptopUrl: '/Asserts/wallpaperflare.com_wallpaper (2).jpg',
    title: 'Wallpaper 3',
  },
  // ...existing code...
];

const WallpaperGrid = () => {
  const [device, setDevice] = useState('laptop');
  const [likes, setLikes] = useState({});

  const handleDeviceChange = (e) => {
    setDevice(e.target.value);
  };

  const handleLike = (id) => {
    setLikes(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      <div className="device-selector">
        <label>Select Device Size: </label>
        <select onChange={handleDeviceChange}>
          <option value="laptop">Laptop</option>
          <option value="mobile">Mobile</option>
        </select>
      </div>

      <div className="wallpaper-grid">
        {wallpapers.map((wallpaper) => {
          const imgUrl = device === 'laptop' ? wallpaper.laptopUrl : wallpaper.mobileUrl;
          const isLiked = likes[wallpaper.id] || false;
          return (
            <div key={wallpaper.id} className="wallpaper-item">
              <div className="wallpaper-img-container">
                <img src={imgUrl} alt={wallpaper.title} />
              </div>
              <h3>{wallpaper.title}</h3>
              <div className="wallpaper-actions">
                <button onClick={() => handleLike(wallpaper.id)}>
                  {isLiked ? '❤️ Liked' : '🤍 Like'}
                </button>
                <a
                  className="download-btn"
                  href={imgUrl}
                  download
                >
                  Download
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WallpaperGrid;