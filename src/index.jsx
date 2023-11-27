import { createRoot } from 'react-dom/client';
import {PlannerPage} from "./pages/PlannerPage";
import './global.css';

createRoot(
  document.querySelector('#app'),
).render(<PlannerPage />);
