import React from "react";


export default function ErrorBoundary(props) {
  const [hasError, setHasError] = React.useState(false);


  React.useEffect(() => {
    const errorHandler = (err) => {
      console.error("err", err);
      setHasError(true);
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return props.children;
}
