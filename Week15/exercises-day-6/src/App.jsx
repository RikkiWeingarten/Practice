import { useState } from "react";
import "./App.css";
import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from "./components/ErrorBoundary";
import Color from "./components/Color";

function App() {

  return (
    <>
      <p>
        <b>
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw error when it reaches 5. This
          simulates a JavaScript error in a component.
        </b>
      </p>
      <hr></hr>
      <p>
        These two counters are inside the same error boundary. If one crashed,
        the error boundary will replace both of them.
      </p>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr></hr>
      <p>
        These two counters are each inside of their own error boundary. So if
        one crashes, the other is not affected.
      </p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <hr></hr>
      <p>
        This counter is not inside of a boundary. So if crashes, all other
        components are deleted.
      </p>
      <BuggyCounter />
      <Color/>
    </>
  );
}

export default App;
