import React from "react";
import { Button } from "@cross/ui";
import { track } from "@cross/analytics";

export default function App() {
  return (
    <div style={ padding: 24 }>
      <h1>LMS</h1>
      <p>Demo LMS en monorepo.</p>
      <Button>Hola</Button>
      <pre>Shared libs funcionando.</pre>
      <a onClick={() => track("click", { app: "LMS" })}>track</a>
    </div>
  );
}
