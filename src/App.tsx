import { Link, Route } from 'wouter';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <Link href="/lessons/03-basic-scene">Basic Scene</Link>
        <Link href="/lessons/05-transforms-objects">Transforms Objects</Link>
        <Link href="/lessons/06-animations">Animations</Link>
      </nav>

      <main>
        <Route path="/lessons/03-basic-scene">Basic Scene</Route>
        <Route path="/lessons/05-transforms-objects">Transforms Objects</Route>
        <Route path="/lessons/06-animations">Animations</Route>
      </main>
    </div>
  );
}

export default App;
