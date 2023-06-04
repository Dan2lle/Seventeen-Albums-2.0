import styled from "styled-components";

export const ListButton = styled.button`
    background-color: #8EACD0;
    border: none;
    color: white;
    padding: 10px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 3px;
    transition-duration: 0.5s;
    cursor: pointer;
    min-width: 110px;

    border-radius: 15px;
    box-shadow: 0 9px #999;

    &:hover {
        background-color: #ecccd5;
        color: white;
    }

    &:active {
        background-color: #ecccd5;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
`