import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import { v4 as uuid } from 'uuid';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        {
          id: uuid(),
          width: 20,
          height: 10,
          color: 'orange',
        },
      ],
    };
  }
  addBox = (box) => {
    this.setState(({ boxes }) => {
      let newBoxes = [...boxes, { ...box, id: uuid() }];
      return { boxes: newBoxes };
    });
  };
  removeBox = (id) => {
    this.setState(({ boxes }) => {
      let newBoxes = [...boxes].filter((b) => b.id !== id);
      return { boxes: newBoxes };
    });
  };
  render() {
    const boxes = this.state.boxes.map((box) => {
      return (
        <Box
          key={box.id}
          id={box.id}
          width={box.width}
          height={box.height}
          color={box.color}
          removeBox={this.removeBox}
        />
      );
    });
    return (
      <div>
        <NewBoxForm addBox={this.addBox}></NewBoxForm>
        <h1>Color and Box List</h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          {boxes}
        </div>
      </div>
    );
  }
}
export default BoxList;
