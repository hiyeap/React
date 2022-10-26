import ColorBox from "./components/ColorBox2";
import { ColorProvider } from "./contexts/color2";
import SelectColors from "./components/SelectColors2";

// 색상 목록을 선택하면 하단의 정사각형 색상이 바뀐다

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
