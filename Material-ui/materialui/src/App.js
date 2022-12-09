import { ThemeProvider } from "@mui/system";
import { Container } from "@mui/material";
import { useEffect } from "react";
import theme from "./Styles/theme";
import Button from "@mui/material/Button";
import AppBar from "./Components/Appbar";
import Banner from "./Components";


function App() {
  useEffect(()=>{
    document.title="React Material UI-Home"
   }, [])
  return (
    <ThemeProvider theme={theme}>
    <Container
    maxWidth="xl"
    sx={{
      background: '#fff'
    }}
      >
    
       
        <AppBar/>
        <Banner />
        {/*
       
        Promotions
        Products
        Footer
        Title
        SearchBox
        AppDrawer
      */
    }
    
   
  </Container>
    </ThemeProvider>
    
  );
}

export default App;
