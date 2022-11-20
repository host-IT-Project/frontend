import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./global.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/styled-engine";
import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import Spinner from "./components/Spinner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <RecoilRoot>
          <Suspense fallback={<Spinner />}>
            <App />
          </Suspense>
        </RecoilRoot>
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
