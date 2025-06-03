import { Control, Controller, FieldErrors } from 'react-hook-form';
import { PaymentFormData } from '../../validationPaymentSchema';
import { IMask, IMaskInput } from 'react-imask';

interface CreditCardProps {
    control: Control<PaymentFormData>;
    errors: FieldErrors<PaymentFormData>;
}

export function CreditCard(props: CreditCardProps) {
    return (
        <>
            <h4>Pagamento</h4>

            <div className="field">
                <label htmlFor="creditCardNumber">Número do cartão</label>
                <Controller
                    name="creditCardNumber"
                    control={props.control}
                    render={({ field }) => (
                        <IMaskInput
                            type="text"
                            id="creditCardNumber"
                            mask={[
                                {
                                    mask: '0000 000000 0000',
                                    maxLength: 14,
                                },
                                {
                                    mask: '0000 000000 00000',
                                    maxLength: 15,
                                },
                                {
                                    mask: '0000 0000 0000 0000',
                                },
                            ]}
                            {...field}
                        />
                    )}
                />
                {props.errors.creditCardNumber && <p className="error">{props.errors.creditCardNumber.message}</p>}
            </div>

            <div className="field">
                <label htmlFor="creditCardHolder">Nome impresso no cartão</label>
                <Controller
                    name="creditCardHolder"
                    control={props.control}
                    render={({ field }) => (
                        <input
                            type="text"
                            id="creditCardHolder"
                            {...field}
                        />
                    )}
                />
                {props.errors.creditCardHolder && <p className="error">{props.errors.creditCardHolder.message}</p>}
            </div>

            <div className="grouped">
                <div className="field">
                    <label htmlFor="creditCardExpiration">Validade (MM/AA)</label>
                    <Controller
                        name="creditCardExpiration"
                        control={props.control}
                        render={({ field }) => (
                            <IMaskInput
                                type="text"
                                id="creditCardExpiration"
                                mask={[
                                    {
                                        mask: 'MM/YY',
                                        blocks: {
                                            MM: {
                                                mask: IMask.MaskedRange,
                                                from: 1,
                                                to: 12,
                                            },
                                            YY: {
                                                mask: IMask.MaskedRange,
                                                from: new Date().getFullYear() - 2000,
                                                to: 99,
                                            },
                                        },
                                    },
                                ]}
                                {...field}
                            />
                        )}
                    />
                    {props.errors.creditCardExpiration && (
                        <p className="error">{props.errors.creditCardExpiration.message}</p>
                    )}
                </div>

                <div className="field">
                    <label htmlFor="creditCardSecurityCode">Código de segurança (CVV)</label>
                    <Controller
                        name="creditCardSecurityCode"
                        control={props.control}
                        render={({ field }) => (
                            <IMaskInput
                                type="text"
                                id="creditCardSecurityCode"
                                mask={'0000'}
                                {...field}
                            />
                        )}
                    />
                    {props.errors.creditCardSecurityCode && (
                        <p className="error">{props.errors.creditCardSecurityCode.message}</p>
                    )}
                </div>
            </div>
        </>
    );
}
