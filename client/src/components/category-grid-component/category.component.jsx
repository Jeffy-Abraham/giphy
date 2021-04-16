import "./category.style.css";
import CarouselImage from "../carousel-image/carousel-image.component";
import {connect} from 'react-redux'

 function CategoryGallery({imageArray}) {
   
  return (
     
    <div className="category-grid">
      {imageArray.map((subArray) => {
          
        return (<div className='flex-category-grid'>{subArray.map(({ link }) => {
            return <CarouselImage imageLink={link} Width='100%'/>;
          })}</div>)
      })}
    </div>
  );
}

const mapStateToProps = ({category:{imageArray}}) => ({
    imageArray
    
  });
  
  export default connect(mapStateToProps, null)(CategoryGallery);