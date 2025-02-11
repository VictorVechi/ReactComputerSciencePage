export const generatePreview = (text, length) => {
    if (text.length > length) {
        if (text[length - 1] === ' ') {
            return text.substring(0, length - 1) + '...';
        }

        return text.substring(0, length) + '...';
    }

    return text;
}

export const setPreviewSize = (setTitleSize, setContentSize) => {
    const setSizes = (titS, contS) => {
        setTitleSize(titS)
        setContentSize(contS)
    }
    
    let width = window.innerWidth;

    if (width <= 768) {
        setSizes(45, 100)
    } else if (width <= 1400) {
        setSizes(55, 135)
    }
}
