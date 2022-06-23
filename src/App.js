import './App.css';
import CardContextProvider from "./context/BlogContext";
import AppRouter from "./router/Router";

function App() {
  return (
    <div className="App">
      <CardContextProvider>
        <AppRouter />
      </CardContextProvider>
    </div>
  );
}

export default App;
