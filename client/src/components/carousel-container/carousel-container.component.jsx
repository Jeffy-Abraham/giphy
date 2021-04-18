/*Component responssible for rendering Carousel Album  Homepage component use this component
it accepts trending gis as the props  */
import CarouselImage from "../carousel-image/carousel-image.component";
import Loader from "react-loader-spinner";
import "./carousel-container.style.css";
export default function CarouselAlbum({ data }) {
  return (
    <div>
      {data.length === 0 ? (
        <div style={{ width: "30%", margin: "auto" }}>
          {" "}
          <Loader
            type="Puff"
            color="#00BFFF"
            height={50}
            width={50}
            timeout={3000}
          />
        </div>
      ) : (
        <div className="flex-carousel-container">
          {data.map((x) => {
            console.log(x);
            return (
              <div key={x.id}>
                <CarouselImage
                  id={x.id}
                  imageLink={x.images.fixed_height.url}
                  height="150px"
                  title={x.title}
                  user={x.user}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
