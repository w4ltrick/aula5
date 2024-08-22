import { StrictMode } from "react";
import { createRoot} from '<react-doom/client'
import { Home } from './pages/Home'

createRoot (document.getElementById('root')).render(
    <StrictMode>
        <Home />
        </StrictMode>,
        );
    