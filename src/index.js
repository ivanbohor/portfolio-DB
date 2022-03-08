import React from "react";
import { createGlobalStyle } from "styled-components";
import ReactDOM from "react-dom";
import App from "./App";

const GlobalStyle = createGlobalStyle`

     :root {
        --orangeLight : #F8971F;
        --orangeLight40Percent : #f8961f62;
        --orangeLigthBackgroundColor:##FBC27B;
        --orangeStrong : #BF5700;
        --orangeStrongBackgroundColor:#FFB151;
        --grey :#808080;
        --greyLight :#8080807e;
        --bodyBackgroundColor : #E5E5E5;
        --robotoFont : 'Roboto', sans-serif;
        --trispaceFont: 'Trispace', sans-serif;
		--sanchezFont:'Sanchez', serif;
     }


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        cursor: default ;
    }

    body{
        background-color:var(--bodyBackgroundColor) ;
    }
`;

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
