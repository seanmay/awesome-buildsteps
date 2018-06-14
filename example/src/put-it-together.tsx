import * as React from "react";
import { render } from "react-dom";

import { TestComponent } from "awesome-buildsteps";

const root = document.querySelector("#app-root");
render(<TestComponent>Wewt!</TestComponent>, root);