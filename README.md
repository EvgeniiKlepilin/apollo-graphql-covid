# apollo-graphql-covid

Apollo GraphQL Server that translates REST API from https://covidtracking.com/ into a GraphQL API. 

## Local setup

Clone the project, locate to the folder of the project, and install NPM modules:

```bash
git clone https://github.com/EvgeniiKlepilin/apollo-graphql-covid.git
cd apollo-graphql-covid
npm install
```

Create `.env` file from given example, and assign custom values, if required:

```bash
cp .env.example .env
```

### Launch

Start up the server:

```bash
npm run watch:dev
```

Unless you have specified differently in `.env`, once the command finishes execution, you should see that your server is available at http://localhost:4000/. You should be able to see GraphiQL interface to interact with the API.

## Available Queries

```graphql
query getUSData {
  USCurrent(format: json) {
    ...usDataFields
  }
}

fragment usDataFields on USData {
  positive
  negative
  pending
  hospitalizedCurrently
  hospitalizedCumulative
  inIcuCurrently
  inIcuCumulative
  onVentilatorCurrently
  onVentilatorCumulative
  recovered
  hash
  lastModified
  death
  hospitalized
  totalTestResults
  notes
}
```

```graphql
query getUSDaily {
  USDaily(format: json) {
    ...usHistoricalDataFields
  }
}

fragment usHistoricalDataFields on USHistoricalData {
  positive
  negative
  pending
  hospitalizedCurrently
  hospitalizedCumulative
  inIcuCurrently
  inIcuCumulative
  onVentilatorCurrently
  onVentilatorCumulative
  recovered
  hash
  lastModified
  death
  hospitalized
  totalTestResults
  notes
  date
  deathIncrease
  hospitalizedIncrease
  negativeIncrease
  positiveIncrease
  totalTestResultsIncrease
  lastUpdateEt
  dataQualityGrade
  states
  dateChecked
}
```

```graphql
query getUSDate {
  USDate(date: "20200507", format: json) {
    ...usHistoricalDataFields
  }
}

fragment usHistoricalDataFields on USHistoricalData {
  positive
  negative
  pending
  hospitalizedCurrently
  hospitalizedCumulative
  inIcuCurrently
  inIcuCumulative
  onVentilatorCurrently
  onVentilatorCumulative
  recovered
  hash
  lastModified
  death
  hospitalized
  totalTestResults
  notes
  date
  deathIncrease
  hospitalizedIncrease
  negativeIncrease
  positiveIncrease
  totalTestResultsIncrease
  lastUpdateEt
  dataQualityGrade
  states
  dateChecked
}
```

```graphql
query getStatesCurrent {
  StatesCurrent(format: json) {
    ...statesDataFields
  }
}

fragment statesDataFields on StateData {
	positive
  negative
  pending
  hospitalizedCurrently
  hospitalizedCumulative
  inIcuCurrently
  inIcuCumulative
  onVentilatorCurrently
  onVentilatorCumulative
  recovered
  hash
  lastModified
  death
  hospitalized
  totalTestResults
  notes
  state
  positiveScore
  negativeScore
  dataQualityGrade
  lastUpdateEt
  checkTimeEt
  fips
  dateModified
  dateChecked
}
```

```graphql
query getStateCurrent {
  StateCurrent(state: "TX", format: json) {
    ...statesDataFields
  }
}

fragment statesDataFields on StateData {
	positive
  negative
  pending
  hospitalizedCurrently
  hospitalizedCumulative
  inIcuCurrently
  inIcuCumulative
  onVentilatorCurrently
  onVentilatorCumulative
  recovered
  hash
  lastModified
  death
  hospitalized
  totalTestResults
  notes
  state
  positiveScore
  negativeScore
  dataQualityGrade
  lastUpdateEt
  checkTimeEt
  fips
  dateModified
  dateChecked
}
```

```graphql
query getStatesDaily {
  StatesDaily(format: json) {
    ...stateHistoricalDataFields
  }
}

fragment stateHistoricalDataFields on StateHistoricalData {
  positive
  negative
  pending
  hospitalizedCurrently
  hospitalizedCumulative
  inIcuCurrently
  inIcuCumulative
  onVentilatorCurrently
  onVentilatorCumulative
  recovered
  hash
  lastModified
  death
  hospitalized
  totalTestResults
  notes
  date
  deathIncrease
  hospitalizedIncrease
  negativeIncrease
  positiveIncrease
  totalTestResultsIncrease
  lastUpdateEt
  dataQualityGrade
  state
  dateChecked
  fips
}
```

```graphql
query getStateDaily {
  StateDaily(state: "AZ", format: json) {
    ...stateHistoricalDataFields
  }
}

fragment stateHistoricalDataFields on StateHistoricalData {
  positive
  negative
  pending
  hospitalizedCurrently
  hospitalizedCumulative
  inIcuCurrently
  inIcuCumulative
  onVentilatorCurrently
  onVentilatorCumulative
  recovered
  hash
  lastModified
  death
  hospitalized
  totalTestResults
  notes
  date
  deathIncrease
  hospitalizedIncrease
  negativeIncrease
  positiveIncrease
  totalTestResultsIncrease
  lastUpdateEt
  dataQualityGrade
  state
  dateChecked
  fips
}
```

```graphql
query getStateDate {
  StateDate(state: "NJ", date: "20200507" format: json) {
    ...stateHistoricalDataFields
  }
}

fragment stateHistoricalDataFields on StateHistoricalData {
  positive
  negative
  pending
  hospitalizedCurrently
  hospitalizedCumulative
  inIcuCurrently
  inIcuCumulative
  onVentilatorCurrently
  onVentilatorCumulative
  recovered
  hash
  lastModified
  death
  hospitalized
  totalTestResults
  notes
  date
  deathIncrease
  hospitalizedIncrease
  negativeIncrease
  positiveIncrease
  totalTestResultsIncrease
  lastUpdateEt
  dataQualityGrade
  state
  dateChecked
  fips
}
```

```graphql
query getStatesInfo {
  StatesInfo(format: json) {
    ...stateInfoFields
  }
}

fragment stateInfoFields on StateInfo {
	state
  name
  covid19SiteOld
  covid19Site
  covid19SiteSecondary
  twitter
  pui
  pum
  notes
  fips
}
```

```graphql
query getCounties {
  Counties(format: json) {
    ...countyFields
  }
}

fragment countyFields on CountyInfo {
	state
  county
  covid19Site
  dataSite
  mainSite
  twitter
  pui
}
```

```graphql
query getCDC {
  CDC {
    ...cdcDataFields
  }
}

fragment cdcDataFields on CDCData {
  dateCollected
  cdcLabs
  usPubHealthLabs
  dailyTotal
  lag
}
```

```graphql
query getUrls {
  urls {
    ...trackerInfoFields
  }
}

fragment trackerInfoFields on TrackerInfo {
  name
  stateId
  url
  kind
  filter
}
```

```graphql
query getScreenshots {
  screenshots {
    ...screenshotInfoFields
  }
}

fragment screenshotInfoFields on ScreenshotInfo {
  state
  url
  dateChecked
  secondary
  date
  size
}
```

## Available NPM Scripts

```json
{
  // ...
  "scripts": {
    "start": "node build/server.js",
    "test": "jest",
    "tsc": "tsc",
    "clean": "rimraf build",
    "build": "npm-run-all clean tsc",
    "lint": "eslint . --ext .ts",
    "dev": "NODE_ENV=development npm-run-all build start",
    "prod": "NODE_ENV=production npm-run-all build start",
    "watch:dev": "nodemon -e ts,js"
  },
  // ...
}
```

- "start": Run transpiled server file
- "test": Run jest for available tests
- "tsc": Transpile TS code into TS. `tsconfig.json` specifies provided configuration
- "clean": Remove `build` folder and all its contents using `rimraf`
- "build": Run "clean" and "tsc"
- "lint": Lint the code using `eslint`
- "dev": Run "build" and "start" with `NODE_ENV` set to `development`
- "prod": Run "build" and "start" with `NODE_ENV` set to `production`
- "watch:dev": Start `nodemon` with specified extensions (`ts,js`)