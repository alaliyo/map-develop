import { Link } from 'react-router-dom';
import styled from 'styled-components';

type ChackProps = {
    loginChack: boolean;
}

function Header({loginChack}: ChackProps) {

    return (
        <LinksBox>
            <LinkBox>
                <Link to={'/'}>MAP</Link>
            </LinkBox>
            <LinkBox>
                <Link to={'/planpage'}>여행 설계</Link>
                <Link to={'/community'}>커뮤니티</Link>
            </LinkBox>
            <LinkBox>
                {loginChack ? (
                    <>
                        <Link to={'/mypage'}>MyPage</Link>
                        <Link to={'/loginpage'}>Logout</Link>
                    </>
                ) : (
                    <Link to={'/loginpage'}>Login</Link>
                )
                }
                
            </LinkBox>
        </LinksBox>
    );
}

export default Header;

const LinksBox = styled.header`
    background-color: #a29bfe;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 128;
    @media screen and (max-width: 768px) {
        padding: 5px
    }
`

const LinkBox = styled.div`
    display: flex;
    a{
        font-size: 20px;
        font-weight: 900;
        color: white;
        margin-right: 10px;
        display: block;
        text-decoration: none;
        &:hover {
            color: #e3a8ff;
            text-shadow: -2px 0 #000, 0 2px #000, 2px 0 #000, 0 -2px #000;
            transition: .3s;
        }
    }
`