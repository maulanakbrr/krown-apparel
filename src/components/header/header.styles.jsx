import styled from 'styled-components';
import { Link } from 'react-router-dom';

// make css into const
// import {css} first from styled-component
// const OptionContainerStyles = css`
    // *your style here
    // *your style here
    // *your style here
// `;

// style selector html tag
export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

// style custom components
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;

// you can pass variable contains stle to styled component
// export const OptionDiv = styled.div`
//     ${OptionContainerStyles}
// `;