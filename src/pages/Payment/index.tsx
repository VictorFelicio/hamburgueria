import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Head } from '../../components/Head';
import { PayOrder } from '../../components/OrderCloseAction/PayOrder';
import { OrderHeader } from '../../components/OrderHeader';
import Address from './components/Address';
import { CreditCard } from './components/CreditCard';
import PersonalInfo from './components/PersonalInfo';
import { IFormPayment } from './interface/IFormPayment';
import { Container, Form, Inner } from './styles';
import { paymentFormSchema } from './validationPaymentSchema';

export function Payment() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormPayment>({ resolver: yupResolver(paymentFormSchema) });

    const onSubmit: SubmitHandler<IFormPayment> = (data) => {
        console.log(data);
    };

    return (
        <Container>
            <Head title="Pagamento" />
            <OrderHeader />
            <Inner>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <PersonalInfo
                        errors={errors}
                        control={control}
                    />
                    <Address
                        errors={errors}
                        control={control}
                    />
                    <CreditCard
                        errors={errors}
                        control={control}
                    />
                    <PayOrder />
                </Form>
            </Inner>
        </Container>
    );
}
