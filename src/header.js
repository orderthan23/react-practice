import React from 'react'
import styled from "styled-components";

const HeaderWrap = styled.div`
    height : 100px;
    width : 100%;
    background : black;
    display : table;
`;

const LogoImg = styled.img`
    width : 40px;
    height  : 40px;
`;
const LogoText = styled.p`
    font-size :25px;
    color : aqua;
    font-weight : bolder;
`;

const logoZone = {
    verticalAlign: "middle",
    width: "50%",
    display: "inline-block"

}
const Link = styled.a`
     color : orangeRed;
     font-size : 20px;
     text-decoration : none;
     float : right;
     line-height : 100px;
     margin-right : 20px;
`;

const thirdLinkStyle = {
    marginRight: "200px"
}

function Header() {

    const imagePath = "./logo192.png";
    return (
        <div>
            <HeaderWrap>
                <table style={logoZone}>
                    <tr>
                        <td>
                            <LogoImg src={imagePath}/>
                        </td>
                        <td rowSpan={3}>
                            <LogoText> Welcome React!</LogoText>
                        </td>

                    </tr>

                </table>
                <Link style={thirdLinkStyle}>로그인</Link>
                <Link>로그인</Link>
                <Link>로그인</Link>


            </HeaderWrap>
        </div>
    );
}


export default Header;

