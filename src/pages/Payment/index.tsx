import { Head } from '../../components/Head';
import { PayOrder } from '../../components/OrderCloseAction/PayOrder';
import { OrderHeader } from '../../components/OrderHeader';
import { Container, Form, Inner } from './styles';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PaymentFormData, paymentFormSchema } from './validationPaymentSchema';
import PersonalInfo from './components/PersonalInfo';
import Address from './components/Address';
import { CreditCard } from './components/CreditCard';

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
