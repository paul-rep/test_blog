import styled from "styled-components";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const FooterContainer = styled.footer`
    display: flex;
    padding-bottom: 20px; 
    justify-items: center;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;  
    @media (max-width: 1024px) {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 99;   
    }
`;

const LeftIconContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    position: absolute;
    left: 50px;
    @media (max-width: 1024px) {
        /* margin-left: 50px; */
    }
`;
const RightIconContainer = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: 50px;
    cursor: pointer;
    @media (max-width: 1024px) {
        /* margin-right: 50px; */
    }
`;

const Footer = ({handlePagination}) => {
    return (
        <FooterContainer>
            <LeftIconContainer onClick={() => handlePagination("left")}>
                <ArrowBackIosIcon/> Previous
            </LeftIconContainer>
            <RightIconContainer onClick={() => handlePagination("right")}>
                Next  <ArrowForwardIosIcon/>
            </RightIconContainer>
        </FooterContainer>
    )
}

export default Footer;
