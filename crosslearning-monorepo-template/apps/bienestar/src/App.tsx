import React from "react";
import { Button } from "@cross/ui/src/Button";
import { track } from "@cross/analytics";

export default function App() {
  return (
    <div style={ padding: 24 }>
      <h1>Bienestar</h1>
      <p>Demo Bienestar en monorepo.</p>
      <Button>Hola</Button>
      <pre>Shared libs funcionando.</pre>
      <a onClick={() => track("click", { app: "Bienestar" })}>track</a>
    </div>
  );
}
