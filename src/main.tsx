import React, { StrictMode } from "react";
import { createRoot} from 'react-dom/client'
import Tic from "./Tic"

const container = document.getElementById("app")
const root = createRoot(container!)


root.render(
   <div>
    <StrictMode>
        <Tic />
    </StrictMode>
   </div> 
)