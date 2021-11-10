import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        //z-index:-100;
        box-sizing:border-box;
        scroll-behavior: smooth;
    }
    *, input, button{
        font-family: 'Roboto', sans-serif;
    }
    body{
        background-color: #1A1824;
    }
`;
