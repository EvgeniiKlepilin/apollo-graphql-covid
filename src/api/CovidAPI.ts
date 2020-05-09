import { RESTDataSource } from 'apollo-datasource-rest';
import {
  Format,
  USData,
  USHistoricalData,
  StateData,
  StateHistoricalData,
  StateInfo,
  CountyInfo,
  CDCData,
  TrackerInfo,
  ScreenshotInfo
} from '../types/index';
import { USHistoricalDataReducer, StateHistoricalDataReducer, StateInfoReducer, CountyInfoReducer, CDCDataReducer, TrackerInfoReducer, ScreenshotInfoReducer } from './reducers';

class CovidAPI extends RESTDataSource {
  constructor(url: string) {
    super();
    this.baseURL = url;
  }

  async getUSCurrent(format: Format): Promise<USData[]> {
    const response = await this.get(`us/current.${format}`);
    return Array.isArray(response) ? response : [];
  }

  async getUSDaily(format: Format): Promise<USHistoricalData[]> {
    const response = await this.get(`us/daily.${format}`);
    return Array.isArray(response)
      ? response.map(data => USHistoricalDataReducer(data))
      : [];
  }

  async getUSDate(date: string, format: Format): Promise<USHistoricalData> {
    return USHistoricalDataReducer(await this.get(`us/${date}.${format}`));
  }

  async getStatesCurrent(format: Format): Promise<StateData[]> {
    const response = await this.get(`states/current.${format}`);
    return Array.isArray(response) ? response : [];
  }

  async getStateCurrent(state: string, format: Format): Promise<StateData> {
    return await this.get(`states/${state}/current.${format}`);
  }
  
  async getStatesDaily(format: Format): Promise<StateHistoricalData[]> {
    const response = await this.get(`states/daily.${format}`);
    return Array.isArray(response) ? response : [];
  }

  async getStateDaily(state: string, format: Format): Promise<StateHistoricalData[]> {
    const response = await this.get(`states/${state}/daily.${format}`);
    return Array.isArray(response)
      ? response.map(data => StateHistoricalDataReducer(data))
      : [];
  }

  async getStateDate(state: string, date: string, format: Format): Promise<StateHistoricalData> {
    return StateHistoricalDataReducer(await this.get(`states/${state}/${date}.${format}`));
  }

  async getStatesInfo(format: Format): Promise<StateInfo[]> {
    const response = await this.get(`states/info.${format}`);
    return Array.isArray(response)
      ? response.map(data => StateInfoReducer(data))
      : [];
  }

  async getCounties(format: Format): Promise<CountyInfo[]> {
    const response = await this.get(`counties.${format}`);
    return Array.isArray(response)
      ? response.map(data => CountyInfoReducer(data))
      : [];
  }

  async getCDC(): Promise<CDCData[]> {
    const response = await this.get(`cdc/daily.json`);
    return Array.isArray(response)
      ? response.map(data => CDCDataReducer(data))
      : [];
  }

  async getUrls(): Promise<TrackerInfo[]> {
    const response = await this.get(`urls.json`);
    return Array.isArray(response)
      ? response.map(data => TrackerInfoReducer(data))
      : [];
  }

  async getScreenshots(): Promise<ScreenshotInfo[]> {
    const response = await this.get(`states/screenshots.json`);
    return Array.isArray(response)
      ? response.map(data => ScreenshotInfoReducer(data))
      : [];
  }
}

export default CovidAPI;
