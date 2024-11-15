import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>클릭</button>
      <h1>안녕하세{"용".repeat(count)}</h1>
    </div>
  );
}

export default App;
