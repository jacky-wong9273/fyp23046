import React from "react";
import { createRoot } from "react-dom/client";
import App from "./AppProvider";
import { BrowserRouter } from "react-router-dom";

/* Import web3 utils to connect the Phantom wallet */
import {
  initializeConnector,
  Web3ReactProvider,
  Web3ReactHooks,
} from "@web3-react/core";
import { Phantom } from "web3-react-phantom";
import { Connector, Web3ReactStore } from "@web3-react/types";

/* Initialize phantom connectors */
const phantom = initializeConnector<Phantom>(
  (actions) => new Phantom({ actions })
);
const connectors: [Connector, Web3ReactHooks, Web3ReactStore][] = [phantom];
const connections: [Connector, Web3ReactHooks][] = connectors.map(
  ([connector, hooks]) => [connector, hooks]
);

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);

root.render(
  <Web3ReactProvider connectors={connections}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Web3ReactProvider>
);
