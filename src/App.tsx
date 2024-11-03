import { BrowserRouter } from 'react-router-dom';
import { Theme } from './styles/Theme';
import { AppRoutes } from './routes';
import { GlobalStyles } from './styles/globals';
import { Normalize } from 'styled-normalize';
import { SnackProvider } from './contexts/SnackContext';

function App() {
    return (
        <BrowserRouter>
            <Theme>
                <SnackProvider>
                    <AppRoutes />
                    <GlobalStyles />
                    <Normalize />
                </SnackProvider>
            </Theme>
        </BrowserRouter>
    );
}

export default App;
