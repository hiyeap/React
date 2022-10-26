import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color2";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
};
export default App;
