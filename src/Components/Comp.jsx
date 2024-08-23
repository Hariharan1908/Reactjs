import { Component } from "react";

export class ClassComp extends Component {
  render() {
    // console.log("hello from Class comp");
    return <h1>Class Component</h1>;
  }
}

export const FuncComp = () => {
  return (
    <div>
      <h1>Root Parent Function Component</h1>
      <Child1 />
      <Child2 />
      <Child3 />
    </div>
  );
};

export const Child1 = () => {
  return (
    <div>
      <h1>Child1</h1>
      <GrandChild />
    </div>
  );
};

export const Child2 = () => {
  return (
    <div>
      <h1>Child2</h1>
      <GrandChild2 />
    </div>
  );
};

export const Child3 = () => {
  return (
    <div>
      <h1>Child3</h1>
      <GrandChild3 />
      <GrandChild4 />
    </div>
  );
};

export const GrandChild = () => {
  return <div>Grand Child</div>;
};

export const GrandChild2 = () => {
  return (
    <div>
      <h1>Grand Child</h1>
      <GreatGrandChild1 />
      <GreatGrandChild2 />
    </div>
  );
};

export const GrandChild3 = () => {
  return <div>Grand Child 1</div>;
};

export const GrandChild4 = () => {
  return <div>Grand Child 2</div>;
};

export const GreatGrandChild1 = () => {
  return <div>GreatGrandChild1</div>;
};

export const GreatGrandChild2 = () => {
  return <div>GreatGrandChild2</div>;
};

export const ReactProject = () => {
  return (
    <div>
      <Navbar />
      <MainBody />
      <Footer />
    </div>
  );
};

export const Navbar = () => {
  return <nav>Navbar</nav>;
};

export const MainBody = () => {
  return <main>Main section</main>;
};

export const Footer = () => {
  return <footer>Footer</footer>;
};
