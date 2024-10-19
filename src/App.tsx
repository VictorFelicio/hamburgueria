import { BrowserRouter } from 'react-router-dom';
import { Theme } from './styles/Theme';
import { AppRoutes } from './routes';
import { GlobalStyles } from './styles/globals';
import { Normalize } from 'styled-normalize';

function App() {
    return (
        <BrowserRouter>
            <Theme>
                <AppRoutes />
                <GlobalStyles />
                <Normalize />
            </Theme>
        </BrowserRouter>
    );
}

export default App;
