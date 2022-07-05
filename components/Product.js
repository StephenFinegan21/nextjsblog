import React from "react";
import Image from "next/image";

export default function Product() {
  return (
    <>
      <div className="store-item">
        <div className="product-info">
          <h2>Funky Desktop Wallpapers</h2>
          <p>
            10 different wallpapers which come in different colour gradients. With these wallpapers, you will be able
            to show off your unique taste to your friends, family, and
            colleagues.
          </p>
          <a
            class="gumroad-button"
            href="https://developerstephen.gumroad.com/l/idadp"
          >
            View on Gumroad
          </a>
        </div>
      </div>
      <div className="store-item">
        <div className="product-info">
          <h2>Minimal Phone Wallpapers</h2>
          <p>
            A collection of minimal, high quality phone wallpapers. Give your
            lock screen or wallpaper a clean, fresh look. 13 colours inspired by
            natural tones are included in the pack.
          </p>
          <a
            className="gumroad-button"
            href="https://developerstephen.gumroad.com/l/uopiuw"
          >
            View on Gumroad
          </a>
        </div>
      </div>
    </>
  );
}
