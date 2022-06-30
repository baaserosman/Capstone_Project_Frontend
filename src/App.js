import './App.css';
import AuthContextProvider from './context/AuthContext';
import BlogContextProvider from "./context/BlogContext";
import AppRouter from "./router/Router";

function App() {
  return (
    <div className="App">
    <AuthContextProvider>
      <BlogContextProvider>
        <AppRouter />
      </BlogContextProvider>
    </AuthContextProvider>      
    </div>
  );
}

export default App;
