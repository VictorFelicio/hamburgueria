import { Control, Controller, FieldErrors } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import { IFormPayment } from '../../interface/IFormPayment';

interface AddressProps {
    control: Control<IFormPayment>;
    errors: FieldErrors<IFormPayment>;
}

export default function Address(props: AddressProps) {
    return (
        <>
            <h4>Endereço de entrega</h4>

            <div className="field">
                <label htmlFor="zipcode">CEP</label>

                <Controller
                    name="zipCode"
                    control={props.control}
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
                {props.errors.zipCode && <p className="error">{props.errors.zipCode.message}</p>}
            </div>

            <div className="field">
                <label htmlFor="street">Endereço</label>
                <Controller
                    name="street"
                    control={props.control}
                    render={({ field }) => (
                        <input
                            type="text"
                            id="street"
                            autoComplete="street-address"
                            {...field}
                        />
                    )}
                />
                {props.errors.street && <p className="error">{props.errors.street.message}</p>}
            </div>

            <div className="grouped">
                <div className="field">
                    <label htmlFor="number">Número</label>
                    <Controller
                        name="number"
                        control={props.control}
                        render={({ field }) => (
                            <input
                                type="text"
                                id="number"
                                autoComplete="number-address"
                                {...field}
                            />
                        )}
                    />
                    {props.errors.number && <p className="error">{props.errors.number.message}</p>}
                </div>

                <div className="field">
                    <label htmlFor="complement">Complemento</label>
                    <Controller
                        name="complement"
                        control={props.control}
                        render={({ field }) => (
                            <input
                                type="text"
                                id="complement"
                                {...field}
                            />
                        )}
                    />
                    {props.errors.complement && <p className="error">{props.errors.complement.message}</p>}
                </div>
            </div>

            <div className="grouped">
                <div className="field">
                    <label htmlFor="neighborhood">Bairro</label>
                    <Controller
                        name="neighborhood"
                        control={props.control}
                        render={({ field }) => (
                            <input
                                type="text"
                                id="neighborhood"
                                {...field}
                            />
                        )}
                    />
                    {props.errors.neighborhood && <p className="error">{props.errors.neighborhood.message}</p>}
                </div>

                <div className="field">
                    <label htmlFor="city">Cidade</label>
                    <Controller
                        name="city"
                        control={props.control}
                        render={({ field }) => (
                            <input
                                type="text"
                                id="city"
                                {...field}
                            />
                        )}
                    />
                    {props.errors.city && <p className="error">{props.errors.city.message}</p>}
                </div>

                <div className="field">
                    <label htmlFor="state">Estado</label>
                    <Controller
                        name="state"
                        control={props.control}
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
                    {props.errors.state && <p className="error">{props.errors.state.message}</p>}
                </div>
            </div>
        </>
    );
}
