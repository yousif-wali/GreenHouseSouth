import './App.css';
import Hero from './pages/Hero.tsx';
function App() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
      </div>
    </main>
  );
}

export default App;
