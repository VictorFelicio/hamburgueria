import { Head } from '../../components/Head';
import { OrderHeader } from '../../components/OrderHeader';
import { Container, Form, Inner } from './styles';

export function Payment() {
    return (
        <Container>
            <Head title="Pagamento" />
            <OrderHeader />
            <Inner>
                <Form>
                    <h4>Informações Pessoais</h4>
                    <div className="field">
                        <label htmlFor="fullName">Nome e Sobrenome</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            autoComplete="name"
                            placeholder="Digite seu nome completo"
                        />
                    </div>
                    <div className="grouped">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                autoComplete="email"
                                placeholder="Digite seu e-mail"
                            />
                        </div>

                        <div className="field">
                            <label htmlFor="phone">Telefone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                autoComplete="phone"
                                placeholder="Digite seu telefone"
                            />
                        </div>

                        <div className="field">
                            <label htmlFor="document"> CPF / CNPJ</label>
                            <input
                                type="text"
                                id="document"
                                name="document"
                            />
                        </div>
                    </div>
                </Form>
            </Inner>
        </Container>
    );
}
