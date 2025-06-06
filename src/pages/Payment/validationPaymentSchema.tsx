import * as yup from 'yup';

export const paymentFormSchema = yup
    .object()
    .shape({
        fullName: yup
            .string()
            .required('O nome e sobrenome são obrigatórios.')
            .min(3, 'O nome deve conter no mínimo 3 caracteres.')
            .max(20, 'O nome deve conter no máximo 20 caracteres.')
            .matches(/(\w.+\s).+/gi, 'O nome deve conter o sobrenome.'),
        email: yup.string().required('O e-mail é obrigatório.').email('O e-mail deve ser válido.'),
        phone: yup
            .string()
            .required('Telefone para contato obrigatório.')
            .transform((value) => value.replace(/[^\d]/g, ''))
            .min(10, 'O telefone deve ter no mínimo 10 dígitos (DDD + número).')
            .max(11, 'O telefone deve ter no máximo 11 dígitos (DDD + número).')
            .matches(/^\d+$/, 'O telefone deve conter apenas números.'),
        document: yup
            .string()
            .required('Documento obrigatório (CPF ou CNPJ).')
            .transform((value) => value.replace(/[^\d]/g, ''))
            .test('document-length', 'CPF inválido (11 dígitos) ou CNPJ inválido (14 dígitos).', (value) => {
                return value?.length === 11 || value?.length === 14;
            }),
        zipCode: yup
            .string()
            .required('CEP é obrigatório.')
            .transform((value) => value.replace(/[^\d]/g, ''))
            .min(8, 'O CEP deve conter 8 dígitos.')
            .max(8, 'O CEP deve conter 8 dígitos.')
            .matches(/^\d+$/, 'O CEP deve conter apenas números.'),
        street: yup.string().required('Campo obrigatório.'),
        number: yup.string().required('Campo obrigatório.'),
        complement: yup.string().required('Campo obrigatório.'),
        neighborhood: yup.string().required('Campo obrigatório.'),
        city: yup.string().required('Campo obrigatório.'),
        state: yup.string().required('Campo obrigatório.'),

        creditCardNumber: yup
            .string()
            .required('Campo obrigatório.')
            .transform((value) => value.replace(/[^\d]/g, ''))
            .min(13, 'Número do cartão inválido (mínimo 13 dígitos).')
            .max(19, 'Número do cartão inválido (máximo 19 dígitos).')
            .matches(/^\d+$/, 'O número do cartão deve conter apenas números.'),
        creditCardHolder: yup
            .string()
            .required('Campo obrigatório.')
            .min(3, 'Nome do titular deve ser completo.')
            .matches(/(\w.+\s).+/gi, 'O nome deve conter o sobrenome.'),
        creditCardExpiration: yup
            .string()
            .required('Campo obrigatório.')
            .matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Data de validade inválida (MM/AA).')
            .test('is-future-date', 'Data de validade expirada.', (value) => {
                if (!value) return false;
                const [monthStr, yearStr] = value.split('/');
                if (!monthStr || !yearStr) return false;

                const currentYear = new Date().getFullYear();
                const currentMonth = new Date().getMonth() + 1;

                const inputYearFull = 2000 + parseInt(yearStr, 10);
                const inputMonth = parseInt(monthStr, 10);

                if (inputYearFull > currentYear) {
                    return true;
                } else if (inputYearFull === currentYear) {
                    return inputMonth >= currentMonth;
                }
                return false;
            }),
        creditCardSecurityCode: yup
            .string()
            .required('Campo obrigatório.')
            .transform((value) => value.replace(/[^\d]+/g, ''))
            .min(3, 'O CVV deve conter 3 ou 4 dígitos.')
            .max(4, 'O CVV deve conter 3 ou 4 dígitos.')
            .matches(/^\d+$/, 'O CVV deve conter apenas números.'),
    })
    .required();
