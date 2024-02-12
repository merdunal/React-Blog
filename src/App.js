import { Route, Routes} from 'react-router-dom';
// COMPONENTS
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Missing from './components/Missing';
// PAGES
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';
import About from './pages/About';
// CONTEXT
import { DataProvider } from './context/DataContext'

function App() {

  return (
    <div className="App">
      <Header title='React JS Blog'/>
      <DataProvider>
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/post' element={<NewPost/>} />
          <Route path='/edit/:id' element={<EditPost/>} />
          <Route path='/post/:id' element={<PostPage/>} />
          <Route path='/about' element={<About/>} />
          <Route path='*' element={<Missing/>} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  )
}


export default App;
