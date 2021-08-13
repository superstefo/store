import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { zeroFill } from '../src/services/MathUtils'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('MathUtils.zeroFill converts properly', () => {
  let result = zeroFill("0.1", 2)
  expect(result).toBe("010");

  result = zeroFill("0.55", 3)
  expect(result).toBe("0550");

  result = zeroFill("0.55", 2)
  expect(result).toBe("055");

  result = zeroFill("4", 2)
  expect(result).toBe("400");

  result = zeroFill("4.0", 2)
  expect(result).toBe("400");

  result = zeroFill("40.00000", 2)
  expect(result).toBe("4000");

  result = zeroFill("40000.00", 2)
  expect(result).toBe("4000000");
});