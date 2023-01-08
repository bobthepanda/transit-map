// prettier-ignore
const STOPS_TO_HIDE_TEXT: string[] = [
  'C 11', 'C 09', 'C 08',
  'H 08', 'H 09',
  'M 17',
  'JC 01', 'JY 01',  'JK 26', 'JT 01', // Tokyo
  'JY 30', 'Y 18', // Yurakucho
  'JY 29', 'JK 24', 'JT 02', 'G 08', 'A 10', // Shimbashi,
  'H 09', 'M 16', // Ginza
  'H 10', // Higashi-Ginza
  'T 09', 'T 10', 'T 11',
  'G 11',
  'JY 02', 'JC 02', 'JK 27', // Kanda
  'JY 03', 'JK 28', // Akihabara
  'A 14', // Ningyocho
  'Z 09', // Mitsukoshimae
  'JE 01', 'JE 02',
  'M 20', // Ochanomizu,
  'JB 21', 'S 11', 'Z 11', 'T 12', 'Y 21', // Oedo East
]

export default STOPS_TO_HIDE_TEXT;

export const generateStationCodes = (prefix: string, start: number, end: number): string[] => {
    if (start > end) {
        return generateStationCodes(prefix, end, start).reverse();
    }

    const codes: string[] = [`${prefix} ${start}`];

    for (let i = start + 1; i <= end; i += 1) {
        codes.push(`${prefix} ${i}`);
    }

    return codes;
};
