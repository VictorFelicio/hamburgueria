import { Skeleton } from '../../Skeleton';
import { Container } from '../style';

export function SkeletonSnack() {
    return (
        <div className="skeleton-wrapper">
            <Container>
                <Skeleton type="title" />
                <Skeleton type="thumbnail" />
            </Container>
        </div>
    );
}
