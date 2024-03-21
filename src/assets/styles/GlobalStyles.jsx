import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --bg-main: ${({ $theme }) =>
          $theme === 'dark' ? '#101828' : '#ffffff'};
        --bg-input: ${({ $theme }) =>
          $theme === 'dark' ? '#152035' : '#F7F7F7'};
        --bg-categories: ${({ $theme }) =>
          $theme === 'dark' ? '#1c2c49' : '#F2F4F7'};
        --text-main: ${({ $theme }) =>
          $theme === 'dark' ? '#ffffff' : '#101828'};
        --card-border: ${({ $theme }) =>
          $theme === 'dark' ? '#8a878780' : 'rgba(16, 24, 40, 0.2)'};
        --text-light: ${({ $theme }) =>
          $theme === 'dark' ? '#ccccccb9' : '#475467'};
        --button: #E44848;
        --button-hover: #D84343;
        --rating: #FFC531;
        --white: #ffffff;
        --dark: #101828;
        --header: #1c2c49;
        --header-accent: #152035;
        --transition-main: 300ms ease-in-out;
        
    }


    body {
        margin: 0;
        font-family: 'Inter', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: var(--bg-main);
        color: var(--text-main);
        transition: background-color var(--transition-main), color var(--transition-main);
    }

    p, h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    ul, ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        color: currentColor;
        text-decoration: none;
    }

    button {
        font-family: inherit;
        border: none;
        cursor: pointer;
    }

    input {
        font-family: inherit;

        &:focus {
            outline: none;
        }
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
        border: none;
    }
`;
