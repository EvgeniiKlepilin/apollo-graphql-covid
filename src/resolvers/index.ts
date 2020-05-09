import { IResolvers } from "apollo-server"
import { FormatArgs, DateFormatArgs, StateFormatArgs, StateDateFormatArgs, Context, USData, USHistoricalData, StateData, StateHistoricalData, StateInfo, CountyInfo, CDCData, TrackerInfo, ScreenshotInfo } from "../types/index";

const resolvers: IResolvers = {
  Data: {
    __resolveType(data): string {
      if(data.checkTimeEt){
        return 'StateData';
      }
      if(data.states){
        return 'USHistoricalData';
      }
      if(data.state && data.date){
        return 'StateHistoricalData'
      }
      return 'USData';
    },
  },
  Query: {
    USCurrent: (_root, args: FormatArgs, context: Context): Promise<USData[]> => context.dataSources.covidAPI.getUSCurrent(args.format),
    USDaily: (_root, args: FormatArgs, context: Context): Promise<USHistoricalData[]> => context.dataSources.covidAPI.getUSDaily(args.format),
    USDate: (_root, args: DateFormatArgs, context: Context): Promise<USHistoricalData> => context.dataSources.covidAPI.getUSDate(args.date, args.format),
    StatesCurrent: (_root, args: FormatArgs, context: Context): Promise<StateData[]> => context.dataSources.covidAPI.getStatesCurrent(args.format),
    StateCurrent: (_root, args: StateFormatArgs, context: Context): Promise<StateData> => context.dataSources.covidAPI.getStateCurrent(args.state, args.format),
    StatesDaily: (_root, args: FormatArgs, context: Context): Promise<StateHistoricalData[]> => context.dataSources.covidAPI.getStatesDaily(args.format),
    StateDaily: (_root, args: StateFormatArgs, context: Context): Promise<StateHistoricalData[]> => context.dataSources.covidAPI.getStateDaily(args.state, args.format),
    StateDate: (_root, args: StateDateFormatArgs, context: Context): Promise<StateHistoricalData> => context.dataSources.covidAPI.getStateDate(args.state, args.date, args.format),
    StatesInfo: (_root, args: FormatArgs, context: Context): Promise<StateInfo[]> => context.dataSources.covidAPI.getStatesInfo(args.format),
    Counties: (_root, args: FormatArgs, context: Context): Promise<CountyInfo[]> => context.dataSources.covidAPI.getCounties(args.format),
    CDC: (_root, _args, context: Context): Promise<CDCData[]> => context.dataSources.covidAPI.getCDC(),
    urls: (_root, _args, context: Context): Promise<TrackerInfo[]> => context.dataSources.covidAPI.getUrls(),
    screenshots: (_root, _args, context: Context): Promise<ScreenshotInfo[]> => context.dataSources.covidAPI.getScreenshots(),
  }
}

export default resolvers;