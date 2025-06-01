import { Head } from '../../components/Head';
import { PayOrder } from '../../components/OrderCloseAction/PayOrder';
import { OrderHeader } from '../../components/OrderHeader';
import { Container, Form, Inner } from './styles';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IMaskInput } from 'react-imask';
import { PaymentFormData, paymentFormSchema } from './validationPaymentSchema';

export function Payment() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<PaymentFormData>({ resolver: yupResolver(paymentFormSchema) });

    const onSubmit: SubmitHandler<PaymentFormData> = (data) => {
        console.log(data);
    };

    return (
        <Container>
            <Head title="Pagamento" />
            <OrderHeader />
            <Inner>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h4>Informações Pessoais</h4>
                    <div className="field">
                        <label htmlFor="fullName">Nome e Sobrenome</label>
                        <Controller
                            name="fullName"
                            control={control}
                            render={({ field }) => (
                                <input
                                    {...field}
                                    type="text"
                                    id="fullName"
                                    autoComplete="name"
                                />
                            )}
                        />
                        {errors.fullName && <p className="error">{errors.fullName.message}</p>}
                    </div>
                    <div className="grouped">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="email"
                                        id="email"
                                        autoComplete="email"
                                    />
                                )}
                            />
                            {errors.email && <p className="error">{errors.email.message}</p>}
                        </div>

                        <div className="field">
                            <label htmlFor="phone">Telefone</label>
                            <Controller
                                name="phone"
                                control={control}
                                render={({ field }) => (
                                    <IMaskInput
                                        type="tel"
                                        id="phone"
                                        autoComplete="tel"
                                        mask="+(55) (00) 00000-0000"
                                        {...field}
                                    />
                                )}
                            />
                            {errors.phone && <p className="error">{errors.phone.message}</p>}
                        </div>

                        <div className="field">
                            <label htmlFor="document"> CPF / CNPJ</label>
                            <input
                                type="text"
                                id="document"
                                name="document"
                            />
                        </div>
                        <Controller
                            name="document"
                            control={control}
                            render={({ field }) => (
                                <IMaskInput
                                    type="text"
                                    id="document"
                                    mask={[{ mask: '000.000.000-00', maxLength: 11 }, { mask: '00.000.000/000-00' }]}
                                    {...field}
                                />
                            )}
                        />
                        {errors.document && <p className="error">{errors.document.message}</p>}
                    </div>

                    <h4>Endereço de entrega</h4>

                    <div className="field">
                        <label htmlFor="zipcode">CEP</label>

                        <Controller
                            name="zipCode"
                            control={control}
                            render={({ field }) => (
                                <IMaskInput
                                    type="text"
                                    id="zipCode"
                                    mask={'00000-000'}
                                    autoComplete="postal-code"
                                    style={{ width: '120px' }}
                                    {...field}
                                />
                            )}
                        />
                        {errors.zipCode && <p className="error">{errors.zipCode.message}</p>}
                    </div>

                    <div className="field">
                        <label htmlFor="street">Endereço</label>
                        <Controller
                            name="street"
                            control={control}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    id="street"
                                    autoComplete="street-address"
                                    {...field}
                                />
                            )}
                        />
                        {errors.street && <p className="error">{errors.street.message}</p>}
                    </div>

                    <div className="grouped">
                        <div className="field">
                            <label htmlFor="number">Número</label>
                            <Controller
                                name="number"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        type="text"
                                        id="number"
                                        autoComplete="number-address"
                                        {...field}
                                    />
                                )}
                            />
                            {errors.number && <p className="error">{errors.number.message}</p>}
                        </div>

                        <div className="field">
                            <label htmlFor="complement">Complemento</label>
                            <Controller
                                name="complement"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        type="text"
                                        id="complement"
                                        {...field}
                                    />
                                )}
                            />
                            {errors.complement && <p className="error">{errors.complement.message}</p>}
                        </div>
                    </div>

                    <div className="grouped">
                        <div className="field">
                            <label htmlFor="neighborhood">Bairro</label>
                            <Controller
                                name="neighborhood"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        type="text"
                                        id="neighborhood"
                                        {...field}
                                    />
                                )}
                            />
                            {errors.neighborhood && <p className="error">{errors.neighborhood.message}</p>}
                        </div>

                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <Controller
                                name="city"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        type="text"
                                        id="city"
                                        {...field}
                                    />
                                )}
                            />
                            {errors.city && <p className="error">{errors.city.message}</p>}
                        </div>

                        <div className="field">
                            <label htmlFor="state">Estado</label>
                            <Controller
                                name="state"
                                control={control}
                                render={({ field }) => (
                                    <select
                                        id="state"
                                        {...field}
                                    >
                                        <option value="">Selecione o estado</option>
                                        <option value="AC">Acre</option>
                                        <option value="AL">Alagoas</option>
                                        <option value="AP">Amapá</option>
                                        <option value="AM">Amazonas</option>
                                        <option value="BA">Bahia</option>
                                        <option value="CE">Ceará</option>
                                        <option value="DF">Distrito Federal</option>
                                        <option value="ES">Espírito Santo</option>
                                        <option value="GO">Goiás</option>
                                        <option value="MA">Maranhão</option>
                                        <option value="MT">Mato Grosso</option>
                                        <option value="MS">Mato Grosso do Sul</option>
                                        <option value="MG">Minas Gerais</option>
                                        <option value="PA">Pará</option>
                                        <option value="PB">Paraíba</option>
                                        <option value="PR">Paraná</option>
                                        <option value="PE">Pernambuco</option>
                                        <option value="PI">Piauí</option>
                                        <option value="RJ">Rio de Janeiro</option>
                                        <option value="RN">Rio Grande do Norte</option>
                                        <option value="RS">Rio Grande do Sul</option>
                                        <option value="RO">Rondônia</option>
                                        <option value="RR">Roraima</option>
                                        <option value="SC">Santa Catarina</option>
                                        <option value="SP">São Paulo</option>
                                        <option value="SE">Sergipe</option>
                                        <option value="TO">Tocantins</option>
                                    </select>
                                )}
                            />
                            {errors.state && <p className="error">{errors.state.message}</p>}
                        </div>
                    </div>

                    <h4>Pagamento</h4>

                    <div className="field">
                        <label htmlFor="credit-card-number">Número do cartão</label>
                        <input
                            type="text"
                            id="credit-card-number"
                            name="credit-card-number"
                            autoComplete="cc-number"
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="credit-card-holder-name">Nome impresso no cartão</label>
                        <input
                            type="text"
                            id="credit-card-holder-name"
                            name="credit-card-holder-name"
                            autoComplete="cc-name"
                        />
                    </div>

                    <div className="grouped">
                        <div className="field">
                            <label htmlFor="credit-card-expiration">Validade (MM/AA)</label>
                            <input
                                type="text"
                                id="credit-card-expiration"
                                name="credit-card-expiration"
                                autoComplete="cc-exp"
                            />
                        </div>

                        <div className="field">
                            <label htmlFor="credit-card-code">Código de segurança</label>
                            <input
                                type="text"
                                id="credit-card-code"
                                name="credit-card-code"
                                autoComplete="cc-csc"
                            />
                        </div>
                    </div>
                    <PayOrder />
                </Form>
            </Inner>
        </Container>
    );
}
