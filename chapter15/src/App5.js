import ColorBox from "./components/ColorBox2";
import { ColorProvider } from "./contexts/color2";
import SelectColors from "./components/SelectColors";

// 색상 목록이 출력

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};
export default App;
