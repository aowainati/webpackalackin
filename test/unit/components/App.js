import App from '../../../src/js/components/App';

describe('App', () => {
  it('does the thing!', () => {
    const rendered = shallow(<App />);
    expect(rendered).to.contain(<p>Hello, world!</p>);
  });
});
