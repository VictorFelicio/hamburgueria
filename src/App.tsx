import { BrowserRouter } from 'react-router-dom';
import { Theme } from './styles/Theme';
import { AppRoutes } from './routes';
import { GlobalStyles } from './styles/globals';
import { Normalize } from 'styled-normalize';
import { SnackProvider } from './contexts/SnackContext';
import { CartProvider } from './contexts/CartContext';

function App() {
    return (
        <BrowserRouter>
            <Theme>
                <SnackProvider>
                    <CartProvider>
                        <AppRoutes />
                        <GlobalStyles />
                        <Normalize />
                    </CartProvider>
                </SnackProvider>
            </Theme>
        </BrowserRouter>
    );
}

export default App;
