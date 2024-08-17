import React, { StrictMode } from "react";
import { createRoot} from 'react-dom/client'
import Bootstrap from "./bootstrap"
const container = document.getElementById("app")
const root = createRoot(container!)


root.render(
   <div>
    <StrictMode>
        <Bootstrap />
    </StrictMode>
   </div> 
)