import React from 'react';
import { Graphics } from 'pixi.js';
import { PixiComponent, Stage } from '@inlet/react-pixi';
import { WIDTH, HEIGHT } from './constant';

const Rectangle = PixiComponent('Rectangle', {
  create: props => new Graphics(),
  applyProps: (instance, _, props) => {
    const { x, y, width, height, fill } = props;

    instance.clear();
    instance.beginFill(fill);
    instance.drawRect(x, y, width, height);
    instance.endFill();
  },
});

class App extends React.Component {

  render() {
    console.log(HEIGHT, WIDTH);
    return (
      <Stage width={WIDTH} height={HEIGHT} options={{
        backgroundColor: 0x1d2230,
      }}>
        <Rectangle x={19} y={100} width={10} height={10} fill={0xffffff} />
      </Stage >
    );
  }
}

export default App;
