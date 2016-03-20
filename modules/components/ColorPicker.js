import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import PickerPanel from 'react-color';

import { Overlay } from 'react-overlays';

import ColorPicker_ from './ColorPicker_.css';

export const getColorString = (rgb) =>
  `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a || 1})`;

class ColorPicker extends React.Component {
  static propTypes = {
    color: PropTypes.object,
    onChange: PropTypes.func,
  };

  state = {
    displayColorPicker: false,
  };

  getTrigger = () => {
    findDOMNode(this.refs.target);
  };

  colorChangeHandler = ({ rgb }) => {
    this.props.onChange(rgb);
  };

  closeColorPicker = () => {
    this.setState({ displayColorPicker: false });
  };

  openColorPicker = () => {
    this.setState({ displayColorPicker: true });
  };

  render() {
    const { color } = this.props;
    const { displayColorPicker } = this.state;

    return (
      <div className={ColorPicker_.root}>
        <button
          ref='target'
          className={ColorPicker_.TriggerBtn}
          onClick={this.openColorPicker}
        >
          <span
            style={{
              backgroundColor: getColorString(color),
            }}
            className={ColorPicker_.ColorSpan}
          />
        </button>
        <Overlay
          show={displayColorPicker}
          onHide={this.closeColorPicker}
          placement='bottom'
          container={this}
          target={this.getTrigger}
          rootClose
        >
          <div className={ColorPicker_.PickerPanel}>
            <PickerPanel
              color={color}
              onClose={this.closeColorPicker}
              onChange={this.colorChangeHandler}
              type='chrome'
            />
          </div>
        </Overlay>
      </div>
    );
  }
}


export default ColorPicker;
