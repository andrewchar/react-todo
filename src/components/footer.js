import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    padding: 15px 20px;
    font-size: 0.8em;
    background-color: #fff;
`

const Footer = ({ activeTasks }) => {    
    if (!activeTasks) return null;

    return (
        <Div>
            Tasks Left: { activeTasks }
        </Div>
    )
}

export default Footer;