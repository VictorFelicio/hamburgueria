import { Control, Controller, FieldErrors } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import { IFormPayment } from '../../interface/IFormPayment';

interface PersonalInfoProps {
    control: Control<IFormPayment>;
    errors: FieldErrors<IFormPayment>;
}

export default function PersonalInfo(props: PersonalInfoProps) {
    return (
        <>
            <h4>Informações Pessoais</h4>
            <div className="field">
                <label htmlFor="fullName">Nome e Sobrenome</label>
                <Controller
                    name="fullName"
                    control={props.control}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            id="fullName"
                            autoComplete="name"
                        />
                    )}
                />
                {props.errors.fullName && <p className="error">{props.errors.fullName.message}</p>}
            </div>
            <div className="grouped">
                <div className="field">
                    <label htmlFor="email">E-mail</label>
                    <Controller
                        name="email"
                        control={props.control}
                        render={({ field }) => (
                            <input
                                {...field}
                                type="email"
                                id="email"
                                autoComplete="email"
                            />
                        )}
                    />
                    {props.errors.email && <p className="error">{props.errors.email.message}</p>}
                </div>

                <div className="field">
                    <label htmlFor="phone">Telefone</label>
                    <Controller
                        name="phone"
                        control={props.control}
                        render={({ field }) => (
                            <IMaskInput
                                type="tel"
                                id="phone"
                                autoComplete="tel"
                                mask="(00) 00000-0000"
                                {...field}
                            />
                        )}
                    />
                    {props.errors.phone && <p className="error">{props.errors.phone.message}</p>}
                </div>

                <div className="field">
                    <label htmlFor="document"> CPF / CNPJ</label>
                    <Controller
                        name="document"
                        control={props.control}
                        render={({ field }) => (
                            <IMaskInput
                                type="text"
                                id="document"
                                mask={[{ mask: '000.000.000-00', maxLength: 11 }, { mask: '00.000.000/000-00' }]}
                                {...field}
                            />
                        )}
                    />
                    {props.errors.document && <p className="error">{props.errors.document.message}</p>}
                </div>
            </div>
        </>
    );
}
