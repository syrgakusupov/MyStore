import React, {useContext} from 'react';
import '../../../Styles/Search.scss'
import {ModalContext} from "../../../utils/Context";
const Search: React.FC = () => {
    const {searchProducts} = useContext(ModalContext)


     const handleSearch = (query: string) => {
        searchProducts(query)
     }

    return (
        <div className='search'>
            <input
                type="search"
                placeholder='Search . . .'
                onChange={(e) => handleSearch(e.target.value)}
            />

        </div>
    );
};

export default Search;