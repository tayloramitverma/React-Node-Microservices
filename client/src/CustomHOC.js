import React from "react";

function withCounter(Component) {
  return function MyCounter(props) {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      console.log("Print Incominf status:", props.incoming);
    },[props]);


    const handleIncresement = () => {
      setCount((oldCount) => oldCount + 1);
    };

    return (
      <>
        <h1>{`Count: ${count}`}</h1>
        <Component {...props} name="Amit" onClick={handleIncresement} />
      </>
    );
  };
}

const Button = (props) => {
  console.log("Button props", props);
  return <button {...props}>Click Me!</button>;
};

export default withCounter(Button);
