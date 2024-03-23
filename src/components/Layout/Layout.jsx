import React, { Fragment, createContext, useEffect, useState } from "react";

import Routers from "../../scenes/routes";
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "../../scenes/global/Sidebar";
import Topbar from "../../scenes/global/Topbar";
import AuthUser from "../AuthUser";
import Login from "../../scenes/login"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactHotToast from "../../@core/toast";
import { Toaster } from "react-hot-toast";


const Layout = () => {
  const [theme, colorMode] = useMode(); //now i can have access to the theme and color mode 
  const { http } = AuthUser();
  const [user, setUser] = useState([]);
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    http
      .post("/me")
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        if (error.response && error.response.status == 401) {
          sessionStorage.removeItem("user");
          sessionStorage.removeItem("token");
        }
      });
  }, [sessionStorage.token]);


  const isAdmin = user.utype === "0";

  return (
    <Fragment>

      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        
        <CssBaseline />
        
        {isAdmin ?
        <>
        <QueryClientProvider client={queryClient}>

        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <div>
          <Routers />
      </div>
          </main>
        </div>
          </QueryClientProvider>
          <ReactHotToast>
          <Toaster
            toastOptions={{
              className: "react-hot-toast",
              style: { color: "#fff" },
            }}
            />
        </ReactHotToast>
          </>
        :
        <Login/>
        }
      </ThemeProvider>
    </ColorModeContext.Provider>/
    </Fragment>
  );
};

export default Layout;
