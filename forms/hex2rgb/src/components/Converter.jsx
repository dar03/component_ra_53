import { React, useState } from 'react'

function checkIsHexColor(color) {
    return /^#([\da-f]{6})$/i.test(color);
  }
  
  function convertHexToRgb(hex) {
    var result = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) {
      return '';
    }
    result.shift();
    return `rgb(${result.map(item => parseInt(item, 16)).join(', ')})`;
  }
  
  const initialState = {
    hexColor: '',
    error: false,
    rgbColor: ''
  };

export default function Сonverter() {
    const [state, setState] = useState(initialState);
  
    const onFieldChange = (e) => {
      const color = e.target.value;
      if (color.length < 7) {
        setState({
          hexColor: color,
          error: false,
          rgbColor: ''
        });
      } else {
        if (checkIsHexColor(color)) {
          setState({
            hexColor: color,
            error: false,
            rgbColor: convertHexToRgb(color)
          });
        } else {
          setState({
            hexColor: color,
            error: true,
            rgbColor: 'Ошибка!'
          })
        }
      }
    }
  
    const converterProps = {};
    if (state.error) {
      converterProps.className = 'color-converter error';
    }
    if (state.rgbColor) {
      converterProps.style = {
        backgroundColor: state.rgbColor
      };
    }
  
    return (
      <div className="color-converter" {...converterProps}>
        <input className="hex-field" type="text" value={state.hexColor} onChange={onFieldChange} placeholder="#000000" maxLength="7"></input>
        <div className={`rgb-field ${state.error && 'error'}`}>{state.rgbColor}</div>
      </div>
    )
  }
