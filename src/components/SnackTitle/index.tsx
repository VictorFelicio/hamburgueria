import { ReactNode } from 'react';
import { Title } from './style';

interface TitleProps {
    children: ReactNode;
}

export function SnackTitle(props: TitleProps) {
    return <Title>{props.children}</Title>;
}
