import { ConsoleReport } from "./reports/ConsoleReport";
import { MatchData } from "./MatchReader";
import { WinAnlyzer } from "./analyzers/WinAnalyzer";

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    static winAnalysisWithConsoleReport(team: string) {
        return new Summary(new WinAnlyzer(team), new ConsoleReport());
    }

    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) { }
    
    buildAndPrintReport(data: MatchData[]) {
        const output = this.analyzer.run(data);
        this.outputTarget.print(output);
    }
}