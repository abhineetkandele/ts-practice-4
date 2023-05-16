import { MatchData, MatchResult } from "../MatchReader";
import { Analyzer } from "../Summary";

export class WinAnlyzer implements Analyzer {
    constructor(private team: string) { }

    run(matches: MatchData[]): string {
        let matchesWon = 0;

        for (let row of matches) {
            if (row[1] === this.team && row[5] === MatchResult.HomeWon) {
                matchesWon++;
            } else if (row[2] === this.team && row[5] === MatchResult.AwayWon) {
                matchesWon++;
            }
        }

        return `Team ${this.team} won ${matchesWon} matches`;
    }
}