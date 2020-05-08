import { IResolvers } from "apollo-server"
import { FormatArgs, DateFormatArgs, StateFormatArgs, StateDateFormatArgs } from "../types/index";

const resolvers: IResolvers = {
  Data: {
    __resolveType(data, context, info){
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
    USCurrent: (root, args: FormatArgs, context) => context.dataSources.covidAPI.getUSCurrent(args.format),
    USDaily: (root, args: FormatArgs, context) => context.dataSources.covidAPI.getUSDaily(args.format),
    USDate: (root, args: DateFormatArgs, context) => context.dataSources.covidAPI.getUSDate(args.date, args.format),
    StatesCurrent: (root, args: FormatArgs, context) => context.dataSources.covidAPI.getStatesCurrent(args.format),
    StateCurrent: (root, args: StateFormatArgs, context) => context.dataSources.covidAPI.getStateCurrent(args.state, args.format),
    StatesDaily: (root, args: FormatArgs, context) => context.dataSources.covidAPI.getStatesDaily(args.format),
    StateDaily: (root, args: StateFormatArgs, context) => context.dataSources.covidAPI.getStateDaily(args.state, args.format),
    StateDate: (root, args: StateDateFormatArgs, context) => context.dataSources.covidAPI.getStateDate(args.state, args.date, args.format),
    StatesInfo: (root, args: FormatArgs, context) => context.dataSources.covidAPI.getStatesInfo(args.format),
    Counties: (root, args: FormatArgs, context) => context.dataSources.covidAPI.getCounties(args.format),
    CDC: (root, args, context) => context.dataSources.covidAPI.getCDC(),
    urls: (root, args, context) => context.dataSources.covidAPI.getUrls(),
    screenshots: (root, args, context) => context.dataSources.covidAPI.getScreenshots(),
  }
}

export default resolvers;