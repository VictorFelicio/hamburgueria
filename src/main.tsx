import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyles } from './styles/globals.ts';
import { Normalize } from 'styled-normalize';
import { Theme } from './styles/Theme.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Theme>
            <App />
            <GlobalStyles />
            <Normalize />
        </Theme>
    </StrictMode>
);
