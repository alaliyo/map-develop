import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { authService } from '../firebase';

type ChackProps = {
    loggedIn: boolean;
}

function Header({loggedIn}: ChackProps) {

    // 로그아웃 기능
    const onLogOutClick = () => {
        authService.signOut();
        alert("로그아웃 되었습니다.")
        window.location.href="/"
    }

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
                {loggedIn ? (
                    <>
                        <Link to={'/mypage'}>MyPage</Link>
                        <Link to={'/'} onClick={onLogOutClick}>Logout</Link>
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
    a {
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