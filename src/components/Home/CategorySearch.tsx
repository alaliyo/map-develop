import styled from 'styled-components';

function CategorySearch() {

    return(
        <SearchBox>
            <form>
                <input type="text" />
                <input type="button" value="검색" />
            </form>
        </SearchBox>
    )
}

export default CategorySearch;

const SearchBox = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
`;