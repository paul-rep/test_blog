import styled from "styled-components";

import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { searchUsers } from '../redux/appSlice';

const SearchContainer = styled.div`
    height: auto;
    max-width: 240px;
    color: #EEEEEE;
`;

const Iput = styled.input`
    height: 100%;
    border: none;
    font-size: 18px;
    background: #333348;
    border-radius: 40px;
    padding: 20px 35px;
    outline: none;
    color: #EEEEEE;
    &::placeholder {
        color: #EEEEEE;
    }
`;

const Search = () => {
    const dispatch = useAppDispatch();
    const searchQuery = useAppSelector(state => state.app.searchQuery);

    const onChange = (e) =>{
        dispatch(searchUsers(e.target.value));
    }

    return (
        <div>
            <SearchContainer>
                <Iput value={searchQuery} onChange={onChange} type="text" placeholder="Search" />
            </SearchContainer>
        </div>
    )
}

export default Search;
