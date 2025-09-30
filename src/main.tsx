import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SubscribeDevProvider } from '@subscribe.dev/react'
import './index.css'
import App from './App.tsx'

const projectToken = import.meta.env.VITE_SUBSCRIBE_DEV_PROJECT_TOKEN;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SubscribeDevProvider projectToken={projectToken || undefined}>
      <App />
    </SubscribeDevProvider>
  </StrictMode>,
)
