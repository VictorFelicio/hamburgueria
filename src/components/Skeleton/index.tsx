import { SkeletonElement } from './style';

export interface SkeletonProps {
    type: 'title' | 'thumbnail';
}
export function Skeleton(props: SkeletonProps) {
    return <SkeletonElement type={props.type} />;
}
