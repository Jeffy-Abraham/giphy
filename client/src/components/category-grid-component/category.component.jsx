import "./category.style.css";

import {connect} from 'react-redux'
import GifGallery from "../gif-gallery.component/gifsgallery.component";

 function CategoryGallery({imageArray}) {
   
  return (
  <GifGallery images={imageArray}/>
  );
}

const mapStateToProps = ({category:{imageArray}}) => ({
    imageArray
    
  });
  
  export default connect(mapStateToProps, null)(CategoryGallery);