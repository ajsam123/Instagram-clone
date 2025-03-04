import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </main>
  );
}

export default App;
