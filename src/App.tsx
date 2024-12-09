import { BrowserRouter } from 'react-router-dom';
import { Theme } from './styles/Theme';
import { AppRoutes } from './routes';
import { GlobalStyles } from './styles/globals';
import { Normalize } from 'styled-normalize';
import { SnackProvider } from './contexts/SnackContext';
import { CartProvider } from './contexts/CartContext';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, ToastContainer } from 'react-toastify';

function App() {
    return (
        <BrowserRouter>
            <Theme>
                <SnackProvider>
                    <CartProvider>
                        <AppRoutes />
                        <ToastContainer
                            position="top-right"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="dark"
                            transition={Slide}
                        />
                        <GlobalStyles />
                        <Normalize />
                    </CartProvider>
                </SnackProvider>
            </Theme>
        </BrowserRouter>
    );
}

export default App;
