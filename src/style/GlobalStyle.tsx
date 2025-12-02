"use client";

import { Global, css } from "@emotion/react";

const GlobalStyle = () => (
    <Global
        styles={css`
      *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      @font-face {
        font-family: 'KoPubBatang';
        font-style: normal;
        font-weight: 500;
        src: url('/fonts/KoPubBatang-Medium.woff2') format('woff2'),
            url('/fonts/KoPubBatang-Medium.woff') format('woff');
    }

      html,
      body,
      * {
        font-family: "KoPubBatang", sans-serif;
        color: #FAFAFA;
        background-color: #0A0A0A;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      #nprogress .bar {
        background: #364155 !important;
        height: 3px !important;
      }

      #nprogress .peg {
        box-shadow: 0 0 10px rgba(54, 65, 85, 0.6),
          0 0 5px rgba(54, 65, 85, 0.6) !important;
      }

      .bn-container .bn-editor {
        max-width: 100% !important;
      }

      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }

      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `}
    />
);

export default GlobalStyle;