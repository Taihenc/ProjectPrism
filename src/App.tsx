import { Stage, Container, Sprite, Text } from '@pixi/react';
import CircleNode from './components/Circle';
import CircleNodeComponent from './components/Circle';

export const App = () => {
  return (
    <Stage options={{ background: 0x0d1117 }}>

      <Container x={100} y={100}>
        <CircleNodeComponent x={50} y={50} radius={100} color={0x8856e5} />
      </Container>
    </Stage>
  );
};

export default App;

