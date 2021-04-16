import CategoryGallery from '../../components/category-grid-component/category.component'
import DisplayPic from '../../components/displaypic-component/displaypic.component'
import SearchBar from '../../components/search-bar-component/searchbar.component'
import './category.styles.css'
export default function CategoryPage() {
  return (
    <div className='category-container'>
      <div className="category-logo-container">
       <DisplayPic/>
        <div style={{color:'lightgray', marginTop:'20px'}}>
        Get the latest GIFs from movies, TV, music, celebrities.
        </div>
        <div style={{marginTop:'90px'}}>
        <SearchBar Width='60%' Height='40px' />
        </div>
      </div>
      <div style={{marginLeft:'60px'}}>

      <div ><h1 style={{color:'white'}}>Entertainment Gifs</h1>

      <small style={{color:'gray',fontWeight:'600',fontSize:'16px'}}>@entertainment</small></div>
      <CategoryGallery/>
      </div>
    </div>
  );
}
