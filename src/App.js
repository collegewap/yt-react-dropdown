import { useEffect, useRef, useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isMenuOpen]);
  return (
    <div className="wrapper" ref={ref}>
      <button className="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        Click Me
      </button>
      {isMenuOpen && (
        <ul className="list">
          <li className="list-item">Dropdown option 1</li>
          <li className="list-item">Dropdown option 2</li>
          <li className="list-item">Dropdown option 3</li>
          <li className="list-item">Dropdown option 4</li>
        </ul>
      )}
    </div>
  );
}

export default App;
