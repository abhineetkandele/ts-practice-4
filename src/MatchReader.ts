import { Reader } from "./CSVReader";
import { dateStringToDate } from "./utils";

export enum MatchResult {
    HomeWon = 'H',
    AwayWon = "A",
    Draw = 'D'
}

export type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader {
    data: MatchData[] = [];

    constructor(public reader: Reader) { }
    
    readData() {
        this.reader.read();
        this.data = this.reader.data.map(row => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,
                row[6],
            ];
        })
    }
}