import React from "react";
import Image from "next/image";

export default function Product() {
  return (
    <>
      <div className="store-item">
        <div className="product-info">
          <h2>Minimal Phone Wallpapers</h2>
          <p >A collection of minimal, high quality phone wallpapers. Give your lock screen or wallpaper a clean, fresh look. 13 colours inspired by natural tones are included in the pack.</p>
          <a
            className="gumroad-button"
            href="https://developerstephen.gumroad.com/l/uopiuw"
          >
            Buy on
          </a>
        </div>
        
      </div>
    </>
  );
}
