import GlobalStyles from "../styles/Global"
import { ThemeProvider } from "styled-components"
import "./_app.css";

const theme = {
  mobile: '375px'
};

function MyApp({ Component, pageProps }) {
  return (
    <> 
      <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
