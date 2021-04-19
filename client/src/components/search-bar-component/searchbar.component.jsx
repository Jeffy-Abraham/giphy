import './searchbar.styles.css'
import SearchIcon from '../../assets/SearchBar.png'
export default function SearchBar({ Width,Height,Color }) {
  return (
    <div>
      <input type="text" style={{width:{Width}}} />
      <div className='magnigy-glass' >
        

      </div>
    </div>
  );
}
