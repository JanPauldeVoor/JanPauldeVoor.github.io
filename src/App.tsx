import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "./theme/AppTheme";
import NavToolbar from "./components/toolbar";
import HomePage from "./components/home";
import { loadCSS } from "fg-loadcss";

export default function App(props: { disableCustomTheme?: boolean }) {
  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v6.5.0/css/all.css",
      // Inject before JSS
      (document.querySelector("#font-awesome-css") ||
        document.head.firstChild) as HTMLElement,
    );

    return () => {
      node.parentNode!.removeChild(node);
    };
  }, []);

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <NavToolbar />
      <HomePage />
    </AppTheme>
  );
}
