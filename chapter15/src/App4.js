import ColorBox from "./components/ColorBox2";
import { ColorProvider } from "./contexts/color2";

// ColorBox가 ColorContext.Consumber -> ColorConsumer로 바뀌었음!

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
