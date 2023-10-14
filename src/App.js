import React from "react";
import "./App.css"; //
import Header from "./components/Header";
import ImageGallery from "./components/ImageGallery";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ImageGallery />
      </main>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
