import { CSVReader } from "./CSVReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinAnlyzer } from "./analyzers/WinAnalyzer";
import { HTMLReport } from "./reports/HTMLReport";

const csvReader: CSVReader = new CSVReader('football.csv');
const matches = new MatchReader(csvReader);
matches.readData();

const summary = new Summary(new WinAnlyzer('Man United'), new HTMLReport());
summary.buildAndPrintReport(matches.data);

const summary1: Summary = Summary.winAnalysisWithConsoleReport('Tottenham');
summary1.buildAndPrintReport(matches.data);
