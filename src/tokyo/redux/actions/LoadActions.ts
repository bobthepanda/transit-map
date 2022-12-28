import { CSVData } from "../../../interfaces/Stops";
import Papa from "papaparse";
import { load } from "../slice/StopSlice";

const prefixFolder = "./data";

const CSVS: string[] = [
  "/jr-east/chuo-rapid.csv",
  "/jr-east/chuo-sobu.csv",
  "/jr-east/joban-local.csv",
  "/jr-east/joban-rapid.csv",
  "/jr-east/keihin-tohoku.csv",
  "/jr-east/keiyo.csv",
  "/jr-east/musashino.csv",
  "/jr-east/saikyo.csv",
  "/jr-east/shonan-shinjuku.csv",
  "/jr-east/sobu-rapid.csv",
  "/jr-east/takasaki.csv",
  "/jr-east/tokaido.csv",
  "/jr-east/tsurumi.csv",
  "/jr-east/yamanote.csv",
  "/jr-east/yokohama,csv",
  "/other/rinkai.csv",
  "/toei/asakusa.csv",
  "/toei/mita.csv",
  "/toei/oedo.csv",
  "/toei/shinjuku.csv",
  "/tokyo-metro/chiyoda.csv",
  "/tokyo-metro/fukutoshin.csv",
  "/tokyo-metro/ginza.csv",
  "/tokyo-metro/hanzomon.csv",
  "/tokyo-metro/hibiya.csv",
  "/tokyo-metro/marunouchi.csv",
  "/tokyo-metro/namboku.csv",
  "/tokyo-metro/tozai.csv",
  "/tokyo-metro/yurakucho.csv",
];

const parsePromise = (file): Promise<CSVData[]> => {
  return new Promise((complete, error) => {
    Papa.parse(file, { complete, error, header: true, download: true });
  });
};

export const loadTokyo = (dispatch, getState) => {
  let allData: CSVData[] = [];
  const promises: Promise<any>[] = CSVS.map((fileName) => {
    return parsePromise(`${prefixFolder}${fileName}`);
  });

  Promise.all(promises).then((values) => {
    dispatch(load(values.map((value) => value.data).flat()));
  });
};