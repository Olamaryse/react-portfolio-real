import React from "react";

import "../src/App.css";

import Theme from '../src/styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
