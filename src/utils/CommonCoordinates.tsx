import { Coordinates } from '../interfaces/Dimensions';
import { ENE, generatePoint, offset } from './PathUtils';

export const MINOR_LINE = 12;
export const MAJOR_LINE = 12 * MINOR_LINE;
export const OFFSET = MINOR_LINE * 2;

export const OTEMACHI: Coordinates = { x: MAJOR_LINE * 20, y: MAJOR_LINE * 20 };
export const CHIYODA_OTEMACHI: Coordinates = {
    ...OTEMACHI,
    x: OTEMACHI.x + OFFSET,
};
export const MARUNOUCHI_OTEMACHI: Coordinates = {
    ...OTEMACHI,
    x: OTEMACHI.x + MAJOR_LINE,
};

export const MITA_HIBIYA: Coordinates = {
    ...OTEMACHI,
    y: OTEMACHI.y + MAJOR_LINE * 2.5,
};
export const HIBIYA: Coordinates = {
    x: MITA_HIBIYA.x + OFFSET * 0.5,
    y: MITA_HIBIYA.y + OFFSET,
};

export const HIBIYA_GINZA: Coordinates = {
    x: OTEMACHI.x + 3.5 * MAJOR_LINE - OFFSET * 0.5,
    y: HIBIYA.y,
};

export const CHUO_TOKYO: Coordinates = {
    x: OTEMACHI.x + MAJOR_LINE * 2,
    y: OTEMACHI.y + MAJOR_LINE - OFFSET * 2,
};
export const YAMANOTE_TOKYO = { ...CHUO_TOKYO, x: CHUO_TOKYO.x + OFFSET };
export const YAMANOTE_YURAKUCHO: Coordinates = {
    ...YAMANOTE_TOKYO,
    y: MITA_HIBIYA.y - OFFSET - MAJOR_LINE * 0.5,
};
export const YAMANOTE_SHIMBASHI = {
    ...YAMANOTE_TOKYO,
    y: YAMANOTE_YURAKUCHO.y + MAJOR_LINE * 2,
};

export const HIBIYA_KASUMIGASEKI: Coordinates = {
    x: MITA_HIBIYA.x - MAJOR_LINE,
    y: MITA_HIBIYA.y + MAJOR_LINE * 0.5,
};
export const NIHOMBASHI: Coordinates = {
    ...OTEMACHI,
    x: HIBIYA_GINZA.x + OFFSET * 0.5,
};
export const ASAKUSA_NIHOMBASHI: Coordinates = { ...NIHOMBASHI, x: NIHOMBASHI.x + MAJOR_LINE };

export const ASAKUSA_NINGYOCHO: Coordinates = { ...ASAKUSA_NIHOMBASHI, y: ASAKUSA_NIHOMBASHI.y - MAJOR_LINE + MINOR_LINE };
export const ASAKUSA_BAKUROCHO: Coordinates = { ...ASAKUSA_NIHOMBASHI, y: ASAKUSA_NIHOMBASHI.y - MAJOR_LINE * 2 + OFFSET * 2 };

export const RAPID_OCHANOMIZU: Coordinates = { x: OTEMACHI.x - OFFSET, y: OTEMACHI.y - MAJOR_LINE * 1.5 + OFFSET };

export const HIBIYA_KAYABACHO = { ...NIHOMBASHI, x: NIHOMBASHI.x + MAJOR_LINE * 2 };

export const YAMANOTE_KANDA = offset(YAMANOTE_TOKYO, { dy: MAJOR_LINE * -2 + OFFSET * 0.5 });
export const YAMANOTE_AKIHABARA = offset(YAMANOTE_KANDA, { dy: MAJOR_LINE * -1.5 - OFFSET * 0.5 });
export const GINZA_MITSUKOSHIMAE = { x: YAMANOTE_KANDA.x + OFFSET * 8 - OFFSET * 2, y: YAMANOTE_KANDA.y + OFFSET * 4 };
export const CHUO_OCHANOMIZU = { x: OTEMACHI.x - OFFSET, y: YAMANOTE_AKIHABARA.y };

export const OEDO_MONZEN_NAKACHO = offset(HIBIYA_KAYABACHO, { dx: MAJOR_LINE, dy: OFFSET * 2 });
export const ASAKUSA_KURAMAE = { ...ASAKUSA_BAKUROCHO, y: YAMANOTE_AKIHABARA.y - MAJOR_LINE };

export const SHINJUKU_BAKUROCHO = offset(ASAKUSA_BAKUROCHO, { dx: OFFSET * -1, dy: OFFSET * -2 });
export const MORISHITA = { x: OEDO_MONZEN_NAKACHO.x + OFFSET * 0.5, y: SHINJUKU_BAKUROCHO.y };
export const KIKUKAWA = offset(MORISHITA, { dx: MAJOR_LINE - OFFSET * 0.5, dy: MAJOR_LINE * -0.25 });

export const SOBU_BAKUROCHO = { ...ASAKUSA_BAKUROCHO, y: ASAKUSA_BAKUROCHO.y - OFFSET, x: ASAKUSA_BAKUROCHO.x - OFFSET * 0.5 };
export const SOBU_KINSCHICHO = generatePoint({
    start: SOBU_BAKUROCHO,
    slope: ENE,
    endReference: offset(KIKUKAWA, { dx: MAJOR_LINE * 0.75, dy: -MAJOR_LINE * 0.5 * 0.75 }),
});

export const CS_RYOGOKU = offset(YAMANOTE_AKIHABARA, { dy: -OFFSET, dx: MAJOR_LINE * 4.5 });

export const YAMANOTE_OKACHIMACHI = { x: YAMANOTE_TOKYO.x, y: ASAKUSA_KURAMAE.y + OFFSET };
export const YAMANOTE_UENO = offset(YAMANOTE_OKACHIMACHI, { dy: -MAJOR_LINE });

export const CHIYODA_YUSHIMA = { ...CHIYODA_OTEMACHI, y: ASAKUSA_KURAMAE.y - MAJOR_LINE * 0.5 };
export const CHIYODA_NISHI_NIPPORI = offset(CHIYODA_YUSHIMA, { dy: -MAJOR_LINE * 3 - OFFSET });
