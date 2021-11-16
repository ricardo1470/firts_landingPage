import { create } from 'react-test-renderer';
import App from './App';

let component;
let header;

describe("<App />", () => {
  

  beforeAll(() => {
    component = create(<App />);
    header = component.root.findByType("header");
  });

  it("Render the App Correctly", () => {
    expect(component).toBeDefined();
  });

  it("Render the Header correctly", () => {
    expect(header).toBeDefined();
    expect(header.props.className).toBe("App-header");
  });

  it("Renders a Text, a Link and an Image", () => {
    const img = header.findByType("img");
    const p = header.findByType("p");
    const a = header.findByType("a");

    expect(img).toBeDefined();
    expect(img.props.className).toEqual("App-logo");
    expect(img.props.alt).toEqual ("logo");
    expect(img.props.src).toEqual("logo.svg");

    expect(p).toBeDefined();
    expect(p.findAllByType("code")).toBeDefined();

    expect(a).toBeDefined();
    expect(a.props.className).toEqual("App-link");
    expect(a.props.href).toBe("https://reactjs.org");
    expect(a.props.target).toBe("_blank");
    expect(a.props.rel).toBe("noopener noreferrer");
  });
});