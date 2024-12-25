import React from 'react';
import '../styles/Gallery.css';

const categories = [
  { id: 1, name: 'Cars', src: './Asserts/car.jpg' },
  { id: 2, name: 'Buildings', src: './Asserts/building.jpg' },
  { id: 3, name: 'Space', src: './Asserts/space.jpg' },
  { id: 4, name: 'Nature', src: './Asserts/nature.jpg' },
  { id: 5, name: 'Music', src: './Asserts/music.jpg' },
  { id: 6, name: 'Cartoon', src: './Asserts/cartoon.jpg' },
];

const wallpapers = [
  { id: 1, src: './Asserts/img.jpg' },
  { id: 2, src: './Asserts/img.jpg' },
  { id: 3, src: './Asserts/img.jpg' },
  { id: 4, src: './Asserts/img.jpg' },
  { id: 5, src: './Asserts/img.jpg' },
  { id: 6, src: './Asserts/img.jpg' },
];

function Gallery() {
  return (
    <div className="gallery-page" id='gallery'>
      <header className="gallery-header">
        {/* <h1 className="gallery-title">Gallery</h1> */}
        <nav className="gallery-nav">
          <a href="#toplist">TOPLIST</a>
          <a href="#newest">NEWEST</a>
        </nav>
      </header>

      <section className="categories-section">
        <h2 className="categories-title">Choose A Category</h2>
        <div className="categories-container">
          {categories.map((category) => (
            <div key={category.id} className="category-item">
              <img src={category.src} alt={category.name} className="category-image" />
              <div className="category-hover">{category.name}</div>
            </div>
          ))}
        </div>
      </section>

      <hr />

      <section className="wallpapers-section">
        <div className="wallpapers-grid">
          {wallpapers.map((wallpaper) => (
            <div key={wallpaper.id} className="wallpaper-item">
              <img
                src={wallpaper.src}
                alt="Wallpaper"
                className="wallpaper-image"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery;
