import { React } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Material UI
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
// Components
import Projects from "./containers/Projects";
import Media from "./containers/Media";
import Video from "./containers/Video";
import About from "./containers/About";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Brands from "./components/Brands";
import ContactMe from "./components/ContactMe";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {


  return (
    <Router>
      <div>
        <ThemeProvider theme={theme}>
          <Banner bannerImg='./banner-image.jpg' />
          <Navbar />
          <Wrapper >
            <Route path="/" >
              <About />
              <Projects />
              <Media />
              <Video />
              <Brands />
              <ContactMe />
            </Route>
          </Wrapper>
          <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;