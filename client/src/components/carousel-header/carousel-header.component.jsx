/*for custom headers with images */

import "./carousel-header.style.css";

export default function CarouselHeader({ title, icon }) {
  return (
    <div className="carousel-title-container">
      <div>
        <img src={icon} width="26px" height="26px" alt='s'/>
      </div>
      <div style={{ marginLeft: "10px", color: "white" }}>{title}</div>
    </div>
  );
}
