import { isValidCNPJ, isValidCPF, isValidPhone } from '@brazilian-utils/brazilian-utils';
import isValidCreditCard from 'card-validator';
import * as yup from 'yup';

export const paymentFormSchema = yup
    .object({
        fullName: yup
            .string()
            .required('O nome e sobrenome são obrigatório.')
            .min(3, 'O nome deve conter três caracteres no mínimo.')
            .max(20, 'O nome deve conter no máximo vinte caracteres.')
            .matches(/(\w.+\s).+/gi, 'O nome deve conter o sobrenome.'),
        email: yup.string().required('O e-mail é obrigatório.').email('O e-mail deve ser válido.'),
        phone: yup
            .string()
            .required('Telefone para contato obrigatório.')
            .transform((value) => value.replace(/[^\d]/g, ''))
            .test('validateMobile', 'Celular inválido.', (value) => isValidPhone(value)),
        document: yup
            .string()
            .required('Documento obrigatório.')
            .transform((value) => value.replace(/[^\d]/g, ''))
            .test('validateDocument', 'CPF/CNPJ é inválido.', (value) => isValidCPF(value) || isValidCNPJ(value)),
        zipCode: yup
            .string()
            .required('CEP é obrigatório.')
            .transform((value) => value.replace(/[^\d]/g, '')),
        street: yup.string().required('Campo obrigatório.'),
        number: yup.string().required('Campo obrigatório.'),
        complement: yup.string(),
        neighborhood: yup.string().required('Campo obrigatório.'),
        city: yup.string().required('Campo obrigatório.'),
        state: yup.string().required('Campo obrigatório.'),

        creditCardNumber: yup
            .string()
            .required('Campo obrigatório.')
            .transform((value) => value.replace(/[^\d]/g, ''))
            .test(
                'validateCreditCardNumber',
                'Número do cartão inválido.',
                (value) => isValidCreditCard.number(value).isValid
            ),
        creditCardHolder: yup
            .string()
            .required('Campo obrigatório.')
            .min(3, 'Nome do titular deve ser completo.')
            .matches(/(\w.+\s).+/gi, 'Nome e sobrenome.'),
        creditCardExpiration: yup
            .string()
            .required('Campo obrigatório.')
            .transform((value) => {
                const [month, year] = value.split('/');

                if (month && year && month.length === 2 && year.length === 2)
                    return new Date(+`20${year}`, +month - 1, 1).toISOString();

                return value;
            })
            .test(
                'validateCreditCardExpiration',
                'Data de validade inválida.',
                (value) => new Date(value) >= new Date()
            ),
        creditCardSecurityCode: yup
            .string()
            .required('Campo obrigatório.')
            .transform((value) => value.replace(/[^\d]+/g, ''))
            .min(3, 'O CVV deve conter 3 ou 4 dígitos.')
            .max(4, 'O CVV deve conter 3 ou 4 dígitos.'),
    })
    .required();

export type PaymentFormData = yup.InferType<typeof paymentFormSchema>;
