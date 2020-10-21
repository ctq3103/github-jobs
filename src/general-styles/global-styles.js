import { createGlobalStyle } from 'styled-components';
import {
	bodyBgColor,
	mainColor,
	textPrimaryColor,
	textSecondaryColor,
} from './theme';
import { size } from './devices';

export const GlobalStyles = createGlobalStyle`

    html {
	    font-size: 62.5%;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Be Vietnam', sans-serif;
        color: ${textSecondaryColor};
        line-height: 1.4;
        font-size: 1.4rem;
        font-weight: 400;
        text-align: left;
        background-color: ${bodyBgColor};
    }

    h1,
    h2,
    h3, {
        font-weight: 700;
        line-height: 1.5;
        color: ${textPrimaryColor};
        ${'' /* margin-bottom: 2rem; */}
    }

    h1 {
        font-size: 2rem;
    }

    p {
        ${'' /* margin-bottom: 2rem; */}
    }

    a {
        text-decoration: none;
        color: ${mainColor};
    }

    strong {
        color: ${mainColor};
    }

    
    @media (max-width: 767px) {
        .hide-for-mobile {
            display: none;
        }

        .short-text {
            display: inline-block;
        }
        .full-text {
            display: none;
        }
    }

    @media (min-width: ${size.tablet}) and (max-width: 1023px) {
        .hide-for-tablet {
            display: none;
        }

        .short-text {
            display: inline-block;
        }
        .full-text {
            display: none;
        } 
    }
    

    @media (min-width: ${size.laptop}) {
        .hide-for-laptop {
            display: none;
        }

        .short-text {   
            display: none;
        }
        .full-text {
            display: inline-block;
        } 
    }

    .container,
    .detailpage-container {
        margin: 0 auto;
        padding: 2rem;
    }

    

    @media (min-width: ${size.tablet}) {
        .container,
        .detailpage-container {
            padding: 2rem 4rem;
        }
    }

    @media (min-width: ${size.laptop}) {
        .container {
            padding: 2rem 12rem;
        }

        .detailpage-container {
            padding: 2rem 25rem;
        }
    }

    .btn {
        font-weight: 700;
        padding: 1rem;
        background: ${mainColor};
        border-radius: 0.5rem;
        border: 0;
        color: hsl(0, 0%, 100%);
        cursor: pointer;
        opacity: 1;
        transition: opacity 0.2s ease-in-out;

        &:hover {
            opacity: 0.8;
        }
    }

    .btn-inverse {
        font-weight: 700;
        padding: 1rem;
        background: ${bodyBgColor};
        border-radius: 0.5rem;
        border: 0;
        color: ${mainColor};
        cursor: pointer;
        opacity: 1;
        transition: opacity 0.2s ease-in-out;

        &:hover {
            opacity: 0.8;
        }
    }

    @media (min-width: ${size.tablet}) {
        .btn, .btn-inverse {
            padding: 1.2rem 1.5rem;
        }
    }

    @media (min-width: ${size.laptop}) {
        .btn, .btn-inverse {
            padding: 1.2rem 3rem;
        }
    }

    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }
`;
