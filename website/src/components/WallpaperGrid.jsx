import React from "react";
import './WallpaperGrid.css';

const wallpapers = [
    { id: 1, url: "https://via.placeholder.com/300", title: "Wallpaper 1" },
    { id: 2, url: "https://via.placeholder.com/300", title: "Wallpaper 2" },
    { id: 3, url: "https://via.placeholder.com/300", title: "Wallpaper 3" },
];

const WallpaperGrid = () => {
    return (
        <div className="wallpaper-grid">
            {wallpapers.map((wallpaper) => (
                <div className="wallpaper-item" key={wallpaper.id}>
                    <img src={wallpaper.url} alt={wallpaper.title} />
                </div>
            ))}
        </div>
    );
};

export default WallpaperGrid;
