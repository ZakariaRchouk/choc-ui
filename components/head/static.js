import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const Static = () => {
  const router = useRouter();
  const isPreview = router.pathname.includes("preview");
  return (
    <Head>
      {isPreview && (
        <>
          <title>Choc UI - Component Preview</title>

          <meta name="title" content="Choc UI - Component Preview" />
          <meta
            name="description"
            content="Preview beautiful components from Choc UI"
          />

          <meta property="og:title" content="Choc UI - Component Preview" />
          <meta
            property="og:description"
            content="Preview beautiful components from Choc UI"
          />

          <meta
            property="twitter:title"
            content="Choc UI - Component Preview"
          />
          <meta
            property="twitter:description"
            content="Preview beautiful components from Choc UI"
          />
        </>
      )}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="blue" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="choc-ui.vercel.app" />
      <meta property="twitter:url" content="choc-ui.vercel.app" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@anubra266" />
      <meta property="twitter:creator" content="@anubra266" />
      <meta property="og:image" content="/logo.png" />
      <meta property="twitter:image" content="/logo.png" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Head>
  );
};

export default Static;
