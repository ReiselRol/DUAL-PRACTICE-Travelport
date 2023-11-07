export function checkIsWellTheId(localization, toCheck) {
    if (localization === 'None') return;
    else {
        if (localization === 'Spain') {
            const dniRegex = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

            if (!dniRegex.test(toCheck)) {
                return false; // Check if the format is correct
            }

            const characters = 'TRWAGMYFPDXBNJZSQVHLCKE';
            const DNINumber = toCheck.slice(0, 8);
            const ControlCharacter = toCheck.charAt(8);
            const calculoLetra = characters[DNINumber % 23];
            return ControlCharacter === calculoLetra;
        } else if (localization === 'Argentina') {
            const dniRegexArgentina = /^[0-9]{7,8}[0-9K]$/;

            if (!dniRegexArgentina.test(toCheck)) {
                return false; 
            }
            const dniNumberArgentina = toCheck.slice(0, -1);
            const controlCharacterArgentina = toCheck.charAt(toCheck.length - 1);
            const validCharacters = '0123456789';
            const calculatedControlCharacter = validCharacters[dniNumberArgentina % 11];

            return controlCharacterArgentina === calculatedControlCharacter || controlCharacterArgentina === 'K';

        }
    }
}
