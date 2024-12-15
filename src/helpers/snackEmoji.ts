import { SnackBase } from '../interfaces/SnackBase';

export function snackEmoji(snack: SnackBase) {
    switch (snack.type.toLowerCase()) {
        case 'burger':
            return '🍔';
        case 'pizza':
            return '🍕';
        case 'drink':
            return '🥤';
        case 'candy':
            return '🍧';

        default:
            return '🔍';
    }
}
