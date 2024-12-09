import { SnackData } from '../interfaces/SnackData';

export function snackEmoji(snack: SnackData) {
    switch (snack.snack.toLowerCase()) {
        case 'burger':
            return '🍔';
        case 'pizza':
            return '🍕';
        case 'drink':
            return '🥤';
        case 'ice-cream':
            return '🍧';

        default:
            return '🔍';
    }
}
