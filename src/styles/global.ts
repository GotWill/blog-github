import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        border: ${(props) => props.theme["blue"]}
    }

    body{
        background: ${(props) => props.theme["base-background"]};
        font-family: 'Nunito', sans-serif;
        color: white;
    }
`;