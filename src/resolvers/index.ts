import { IResolvers } from "apollo-server"
import { FormatArgs } from "../types/index";

const resolvers: IResolvers = {
  Query: {
    USCurrent: (root, args: FormatArgs, context) => context.dataSources.covidAPI.getUSCurrent(args.format),
    // USDaily: (root, args, context) => null,
    // USDate: (root, args, context) => null,
    // StatesCurrent: (root, args, context) => null,
    // StateCurrent: (root, args, context) => null,
    // StatesDaily: (root, args, context) => null,
    // StateDaily: (root, args, context) => null,
    // StateDate: (root, args, context) => null,
    // StatesInfo: (root, args, context) => null,
    // Counties: (root, args, context) => null,
    // CDC: (root, args, context) => null,
    // urls: (root, args, context) => null,
    // screenshots: (root, args, context) => null,

    // USDaily(format: Format!): [USHistoricalData]!
    // USDate(date: String!, format: Format!): USHistoricalData!
    // StatesCurrent(format: Format!): [StateData]!
    // StateCurrent(state: String!, format: Format!): StateData!
    // StatesDaily(format: Format!): [StateHistoricalData]!
    // StateDaily(state: String!, format: Format!): [StateHistoricalData]!
    // StateDate(state: String!, date: String!, format: Format!): StateHistoricalData!
    // StatesInfo(format: Format!): [StateInfo]!
    // Counties(format: Format!): [CountyInfo]!
    // CDC: [CDCData]!
    // urls: [TrackerInfo]!
    // screenshots: [ScreenshotInfo]!
  }
}

export default resolvers;