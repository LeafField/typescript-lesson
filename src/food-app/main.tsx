import { Foods } from "./foods";
import "../template/style.css";
import React from "react";
import {createRoot} from "react-dom/client";

Foods.getInstance()
createRoot(document.getElementById("app")!).render(
  <h1>Hello React</h1>
)
