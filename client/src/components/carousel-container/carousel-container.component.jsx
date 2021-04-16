import CarouselImage from "../carousel-image/carousel-image.component";
import "./carousel-container.style.css";
export default function CarouselAlbum() {
  const imageArray = [
    {
      link:
        "https://media1.giphy.com/media/kBezu43YVrgGuZZGL2/giphy.gif?cid=ecf05e47f0c3867359f14e757db72ec51aa53af505cb87c2&rid=giphy.gif&ct=g",
    },
    {
      link: "https://i.giphy.com/media/uqbm7TQHaUbDd9cXc3/giphy.webp",
    },
    {
      link: "https://i.giphy.com/media/O9S4unHvciYuY/giphy.webp",
    },
    {
      link: "https://i.giphy.com/media/VWwiOoSml2tAO4hckT/giphy.webp",
    },
    {
      link: "https://i.giphy.com/media/Wt7WfMnLgsnJlLvohY/giphy.webp",
    },
    {
      link:
        "https://media1.giphy.com/media/kBezu43YVrgGuZZGL2/giphy.gif?cid=ecf05e47f0c3867359f14e757db72ec51aa53af505cb87c2&rid=giphy.gif&ct=g",
    },
    {
      link: "https://i.giphy.com/media/uqbm7TQHaUbDd9cXc3/giphy.webp",
    },
    {
      link: "https://i.giphy.com/media/O9S4unHvciYuY/giphy.webp",
    },
    {
      link: "https://i.giphy.com/media/VWwiOoSml2tAO4hckT/giphy.webp",
    },
    {
      link: "https://i.giphy.com/media/Wt7WfMnLgsnJlLvohY/giphy.webp",
    },
  ];

  return (
    <div className="flex-carousel-container">
      {imageArray.map(({ link }) => {
        return <CarouselImage imageLink={link} height='150px'/>;
      })}
    </div>
  );
}
