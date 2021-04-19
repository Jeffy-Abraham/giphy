import "./searchbar.styles.css";
import SearchIcon from "../../assets/SearchBar.png";
import { useState } from "react";
import { searchGifs } from "../../redux/search/search-action";
import { connect } from "react-redux";
import { useHistory } from "react-router";
function SearchBar({ searchGifs }) {
  const [formValue, setdata] = useState({
    search: "",
  });

  const handleChange = (e) => {
    setdata({ ...formValue, [e.target.name]: e.target.value });
  };

  let history = useHistory();
  const handleSubmit = () => {
    searchGifs(formValue.search);
    history.push("/search");
  };

  return (
    <div>
      <input
        label="Username or User Id"
        type="text"
        name="search"
        onChange={(e) => handleChange(e)}
        value={formValue.search}
      />
      <div onClick={() => handleSubmit()} className="magnigy-glass">
        <img src={SearchIcon} width="40px" />
      </div>
      <h5 style={{ color: "white" }}>Enter and click search</h5>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  searchGifs: (data) => dispatch(searchGifs(data)),
});
export default connect(null, mapDispatchToProps)(SearchBar);
