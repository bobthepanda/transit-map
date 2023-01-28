import Papa from 'papaparse';
import { CSVData } from '../../../interfaces/Stops';
import { load } from '../slice/StopSlice';

const prefixFolder = './data';

const CSVS: string[] = [
    '/jr-east/chuo-rapid.csv',
    '/jr-east/chuo-sobu.csv',
    '/jr-east/joban-local.csv',
    '/jr-east/joban-rapid.csv',
    '/jr-east/keihin-tohoku.csv',
    '/jr-east/keiyo.csv',
    '/jr-east/musashino.csv',
    '/jr-east/saikyo.csv',
    '/jr-east/shonan-shinjuku.csv',
    '/jr-east/sobu-rapid.csv',
    '/jr-east/takasaki.csv',
    '/jr-east/tokaido.csv',
    '/jr-east/tsurumi.csv',
    '/jr-east/yamanote.csv',
    '/jr-east/yokohama,csv',
    '/other/rinkai.csv',
    '/toei/asakusa.csv',
    '/toei/mita.csv',
    '/toei/oedo.csv',
    '/toei/shinjuku.csv',
    '/tokyo-metro/chiyoda.csv',
    '/tokyo-metro/fukutoshin.csv',
    '/tokyo-metro/ginza.csv',
    '/tokyo-metro/hanzomon.csv',
    '/tokyo-metro/hibiya.csv',
    '/tokyo-metro/marunouchi.csv',
    '/tokyo-metro/namboku.csv',
    '/tokyo-metro/tozai.csv',
    '/tokyo-metro/yurakucho.csv',
    '/tobu/daishi.csv',
    '/tobu/ikesaki.csv',
    '/tobu/kameido.csv',
    '/tobu/kinugawa.csv',
    '/tobu/kiryu.csv',
    '/tobu/koizumi.csv',
    '/tobu/nikko.csv',
    '/tobu/ogose.csv',
    '/tobu/sano.csv',
    '/tobu/skytree.csv',
    '/tobu/tojo.csv',
    '/tobu/urban-park.csv',
    '/tobu/utsunomiya.csv',
    '/keisei/airport.csv',
    '/keisei/chiba.csv',
    '/keisei/chihara.csv',
    '/keisei/higashi-narita.csv',
    '/keisei/kanamachi.csv',
    '/keisei/main.csv',
    '/keisei/oshiage.csv',
    '/other/chiba-monorail.csv',
    '/other/hokuso.csv',
    '/other/shin-keisei.csv',
    '/other/saitama-rapid.csv',
    '/other/nippon-toneri.csv',
    '/other/tsukuba-express.csv',
];

const parsePromise = (file): Promise<CSVData[]> => {
    return new Promise((complete, error) => {
        Papa.parse(file, { complete, error, header: true, download: true });
    });
};
const loadTokyo = (dispatch) => {
    const promises: Promise<any>[] = CSVS.map((fileName) => {
        return parsePromise(`${prefixFolder}${fileName}`);
    });

    Promise.all(promises).then((values) => {
        dispatch(load(values.map((value) => value.data).flat()));
    });
};

export default loadTokyo;
