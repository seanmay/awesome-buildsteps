import * as React from "react";
import { SFC } from "react";

import { Bold } from "./components/bold";

export const TestComponent: SFC = ({ children }) => <Bold>It Works? { children }</Bold>;