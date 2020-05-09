import CovidAPI from "../api/CovidAPI";

export enum Format {
  JSON = 'json',
  CSV = 'csv'
}

interface Data {
  positive: number;
  negative: number;
  pending: number;
  hospitalizedCurrently: number;
  hospitalizedCumulative: number;
  inIcuCurrently: number;
  inIcuCumulative: number;
  onVentilatorCurrently: number;
  onVentilatorCumulative: number;
  recovered: number;
  hash: string;
  lastModified: string;
  death: number;
  hospitalized: number;
  totalTestResults: number;
  notes: string;
}

interface HistoricalData {
  date: number;
  deathIncrease: number;
  hospitalizedIncrease: number;
  negativeIncrease: number;
  positiveIncrease: number;
  totalTestResultsIncrease: number;
  lastUpdateEt: string;
  dataQualityGrade: string;
  dateChecked: string;
}

export type USData = Data

export interface USHistoricalData extends Data, HistoricalData {
  states: number;
}

export interface StateData extends Data {
  state: string;
  positiveScore: number;
  negativeScore: number;
  dataQualityGrade: string;
  lastUpdateEt: string;
  checkTimeEt: string;
  fips: string;
  dateModified: string;
  dateChecked: string;
}

export interface StateHistoricalData extends Data, HistoricalData {
  state: string;
  fips: string;
}

export interface CDCData {
  dateCollected: string;
  cdcLabs: number;
  usPubHealthLabs: number;
  dailyTotal: number;
  lag: number;
}

export interface CountyInfo {
  state: string;
  county: string;
  covid19Site: string;
  dataSite: string;
  mainSite: string;
  twitter: string;
  pui: string;
}

export interface StateInfo {
  state: string;
  name: string;
  covid19SiteOld: string;
  covid19Site: string;
  covid19SiteSecondary: string;
  twitter: string;
  pui: string;
  pum: boolean;
  notes: string;
  fips: string;
}

export interface ScreenshotInfo {
  state: string;
  url: string;
  dateChecked: string;
  secondary: boolean;
  date: string;
  size: number;
}

export interface TrackerInfo {
  name: string;
  stateId: string;
  url: string;
  kind: string;
  filter: string;
}

export interface FormatArgs {
  format: Format;
}

export interface DateFormatArgs extends FormatArgs {
  date: string;
}

export interface StateFormatArgs extends FormatArgs {
  state: string;
}

export interface StateDateFormatArgs extends DateFormatArgs, StateFormatArgs {}

export interface CovidDataSources {
  covidAPI: CovidAPI;
}

export interface Context {
  dataSources: CovidDataSources;
}