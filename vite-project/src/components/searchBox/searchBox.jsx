import css from "./searchBox.module.css";

const SearchBox = ({values, onChange })=>{
    return(
        <div className={css.searchBox}>
            <label>   
            <p>Find contacts by name</p>
            <input
                className={css.searchField}
                type="text" 
                placeholder="Search..." 
                value={values} 
                onChange={onChange} />
            </label> 
        </div>
    )
}

export default SearchBox; 