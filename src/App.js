import About from './Components/About/About';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Work from './Components/Work/Work';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer/Footer';
function App() {
  // Create a client
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar></Navbar>
        <Header />
        <About />
        <Work />
        <Skills />
        <Contact />
        <Footer />
        {/* <div>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
          <p>Adding demo text to check fixed menu.</p>
        </div> */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
