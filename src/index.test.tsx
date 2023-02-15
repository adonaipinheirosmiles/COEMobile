import 'react-native';
import React from 'react';
import App from './';

import renderer from 'react-test-renderer';

jest.mock('react-native-linear-gradient', () => 'LinearGradient');
jest.mock('react-native-vector-icons/fontawesome5', () => 'Icon');

describe('<App />', () => {
  it('renders correctly', async () => {
    const app = renderer.create(<App />).toJSON();
    await expect(app).toMatchSnapshot();
  });
});

