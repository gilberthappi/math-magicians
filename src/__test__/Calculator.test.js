import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('Calculator component testing', () => {
  it('Renders correctly', () => {
    const tree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});