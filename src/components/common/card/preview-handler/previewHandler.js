export const generatePreview = (text, length) => {
    if (text.length > length) {
        if (text[length - 1] === ' ') {
            return text.substring(0, length - 1) + '...';
        }

        return text.substring(0, length) + '...';
    }

    return text;
}
