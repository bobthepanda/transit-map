export const generateStationCode = (prefix: string, value: number, padding: number = 2) => {
    return `${prefix} ${String(value).padStart(padding, '0')}`;
};

export const generateStationCodes = (prefix: string, start: number, end: number, padding: number = 2): string[] => {
    if (start > end) {
        return generateStationCodes(prefix, end, start, padding).reverse();
    }

    const codes: string[] = [`${generateStationCode(prefix, start, padding)}`];

    for (let i = start + 1; i <= end; i += 1) {
        codes.push(generateStationCode(prefix, i, padding));
    }

    return codes;
};
