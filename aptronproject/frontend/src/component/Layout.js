import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Layout({ children, description, keywords, author, title }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        {children}
        <ToastContainer />
      </main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "shop now ecommerce app",
  description: "mern stack project",
  keywords: "react,nodejs,mongodb,express",
  author: "Sourav mishra",
};
