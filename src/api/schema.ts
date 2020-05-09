import { gql } from 'apollo-server';

export default gql`
  interface Data {
    positive: Int
    negative: Int
    pending: Int
    hospitalizedCurrently: Int
    hospitalizedCumulative: Int
    inIcuCurrently: Int
    inIcuCumulative: Int
    onVentilatorCurrently: Int
    onVentilatorCumulative: Int
    recovered: Int
    hash: String
    lastModified: String
    death: Int
    hospitalized: Int
    totalTestResults: Int
    notes: String
  }

  type USData implements Data {
    positive: Int
    negative: Int
    pending: Int
    hospitalizedCurrently: Int
    hospitalizedCumulative: Int
    inIcuCurrently: Int
    inIcuCumulative: Int
    onVentilatorCurrently: Int
    onVentilatorCumulative: Int
    recovered: Int
    hash: String
    lastModified: String
    death: Int
    hospitalized: Int
    totalTestResults: Int
    notes: String
  }

  type USHistoricalData implements Data {
    positive: Int
    negative: Int
    pending: Int
    hospitalizedCurrently: Int
    hospitalizedCumulative: Int
    inIcuCurrently: Int
    inIcuCumulative: Int
    onVentilatorCurrently: Int
    onVentilatorCumulative: Int
    recovered: Int
    hash: String
    lastModified: String
    death: Int
    hospitalized: Int
    totalTestResults: Int
    notes: String
    date: Int!
    deathIncrease: Int
    hospitalizedIncrease: Int
    negativeIncrease: Int
    positiveIncrease: Int
    totalTestResultsIncrease: Int
    lastUpdateEt: String
    dataQualityGrade: String
    states: Int!
    dateChecked: String!
  }

  type StateData implements Data {
    positive: Int
    negative: Int
    pending: Int
    hospitalizedCurrently: Int
    hospitalizedCumulative: Int
    inIcuCurrently: Int
    inIcuCumulative: Int
    onVentilatorCurrently: Int
    onVentilatorCumulative: Int
    recovered: Int
    hash: String
    lastModified: String
    death: Int
    hospitalized: Int
    totalTestResults: Int
    notes: String
    state: String!
    positiveScore: Int
    negativeScore: Int
    dataQualityGrade: String
    lastUpdateEt: String
    checkTimeEt: String
    fips: String
    dateModified: String
    dateChecked: String
  }

  type StateHistoricalData implements Data {
    positive: Int
    negative: Int
    pending: Int
    hospitalizedCurrently: Int
    hospitalizedCumulative: Int
    inIcuCurrently: Int
    inIcuCumulative: Int
    onVentilatorCurrently: Int
    onVentilatorCumulative: Int
    recovered: Int
    hash: String
    lastModified: String
    death: Int
    hospitalized: Int
    totalTestResults: Int
    notes: String
    date: Int!
    deathIncrease: Int
    hospitalizedIncrease: Int
    negativeIncrease: Int
    positiveIncrease: Int
    totalTestResultsIncrease: Int
    lastUpdateEt: String
    dataQualityGrade: String
    state: String!
    dateChecked: String!
    fips: String
  }

  type CDCData {
    dateCollected: String!
    cdcLabs: Int!
    usPubHealthLabs: Int!
    dailyTotal: Int!
    lag: Int!
  }

  type CountyInfo {
    state: String!
    county: String!
    covid19Site: String
    dataSite: String
    mainSite: String
    twitter: String
    pui: String
  }

  type StateInfo {
    state: String!
    name: String!
    covid19SiteOld: String
    covid19Site: String
    covid19SiteSecondary: String
    twitter: String
    pui: String
    pum: Boolean
    notes: String
    fips: String!
  }

  type ScreenshotInfo {
    state: String!
    url: String!
    dateChecked: String!
    secondary: Boolean!
    date: String!
    size: Int!
  }

  type TrackerInfo {
    name: String!
    stateId: String!
    url: String
    kind: String
    filter: String
  }

  type Query {
    USCurrent(format: Format! = json): [USData]!
    USDaily(format: Format! = json): [USHistoricalData]!
    USDate(date: String!, format: Format! = json): USHistoricalData!
    StatesCurrent(format: Format! = json): [StateData]!
    StateCurrent(state: String!, format: Format! = json): StateData!
    StatesDaily(format: Format! = json): [StateHistoricalData]!
    StateDaily(state: String!, format: Format! = json): [StateHistoricalData]!
    StateDate(state: String!, date: String!, format: Format! = json): StateHistoricalData!
    StatesInfo(format: Format! = json): [StateInfo]!
    Counties(format: Format! = json): [CountyInfo]!
    CDC: [CDCData]!
    urls: [TrackerInfo]!
    screenshots: [ScreenshotInfo]!
  }

  enum Format {
    json
    csv    
  }
`;