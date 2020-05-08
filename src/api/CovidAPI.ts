import { RESTDataSource } from 'apollo-datasource-rest';
import { Format } from '../types/index';

class CovidAPI extends RESTDataSource {
  constructor(url: string) {
    super();
    this.baseURL = url;
  }

  async getUSCurrent(format: Format) {
    const response = await this.get(`us/current.${format}`);
    return Array.isArray(response) ? response : [];
  }
}

export default CovidAPI;
