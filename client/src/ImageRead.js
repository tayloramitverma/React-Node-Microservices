import React from "react";
import { useEffect } from "react";

export default function ImageRead() {
  useEffect(() => {
    const imageUrl = "https://www.gstatic.com/webp/gallery/4.sm.jpg";
    const img = new Image();
    img.onload = function () {
      const width = img.width;
      const height = img.height;
      console.log(`The image size is ${width} x ${height}`);

      console.log("img", img)
    };
    img.src = imageUrl;
  }, []);

  return <div>ImageRead</div>;
}
