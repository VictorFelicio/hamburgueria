export interface SnackBase {
    id: number;
    type: 'burger' | 'pizza' | 'drink' | 'candy';
    name: string;
    description: string;
    image: string;
    price: number;
}
