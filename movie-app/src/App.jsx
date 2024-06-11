import { Route , Routes } from "react-router-dom"
import Home from "./pages/Home"
import CreateMovie from "./pages/movie/create";
import Nowplaying from "./pages/movie/nowplaying";
import TopRatedMovie from "./pages/movie/toprated";
import PopularMovie from "./pages/movie/popular";
import Layout from "./layout";
import { ThemeProvider } from "styled-components";
import theme from "./utills/constants/theme";
import GlobalStyle from "./components/Globalstyle";


function App () {
  return (
<ThemeProvider theme={theme}>

<GlobalStyle />
    <Layout>
    <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/create" element={<CreateMovie />} />
          <Route path="/movie/popular" element={<PopularMovie />} />
          <Route path="/movie/nowplaying" element={<Nowplaying />} />
          <Route path="/movie/toprated" element={<TopRatedMovie />} />
    </Routes>

    </Layout>
</ThemeProvider>

  )
}

export default App;