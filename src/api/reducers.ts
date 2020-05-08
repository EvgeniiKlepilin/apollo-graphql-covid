import {
  USHistoricalData,
  StateData,
  CDCData,
  CountyInfo,
  StateInfo,
  ScreenshotInfo,
  TrackerInfo,
  StateHistoricalData
} from "../types";

export const USHistoricalDataReducer = (data): USHistoricalData => ({
  ...data,
  date: data.date || 0,
  states: data.states || 0,
  dateChecked: data.dateChecked || '0'
});
export const StateDataReducer = (data): StateData => ({
  ...data,
  state: data.state || '0'
});
export const StateHistoricalDataReducer = (data): StateHistoricalData => ({
  ...data,
  date: data.date || 0,
  state: data.state || '0',
  dateChecked: data.dateChecked || '0'
});
export const CDCDataReducer = (data): CDCData => ({
  dateCollected: data.dateCollected || '0',
  cdcLabs: data.cdcLabs || 0,
  usPubHealthLabs: data.usPubHealthLabs || 0,
  dailyTotal: data.dailyTotal || 0,
  lag: data.lag || 0
});
export const CountyInfoReducer = (data): CountyInfo => ({
  ...data,
  state: data.state || '0',
  county: data.county || '0'
});
export const StateInfoReducer = (data): StateInfo => ({
  ...data,
  state: data.state || '0',
  name: data.name || '0',
  fips: data.fips || '0'
});
export const ScreenshotInfoReducer = (data): ScreenshotInfo => ({
  state: data.state || '0',
  url: data.url || '0',
  dateChecked: data.dateChecked || '0',
  secondary: data.secondary || false,
  date: data.date || '0',
  size: data.size || 0
});
export const TrackerInfoReducer = (data): TrackerInfo => ({
  ...data,
  name: data.name || '0',
  stateId: data.stateId || '0'
});