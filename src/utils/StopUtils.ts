export const generateStationCodes = (prefix: string, start: number, end: number, padding: number = 2): string[] => {
    if (start > end) {
        return generateStationCodes(prefix, end, start, padding).reverse();
    }

    const codes: string[] = [`${prefix} ${String(start).padStart(padding, '0')}`];

    for (let i = start + 1; i <= end; i += 1) {
        codes.push(`${prefix} ${String(i).padStart(padding, '0')}`);
    }

    return codes;
};
