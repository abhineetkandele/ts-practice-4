import fs from 'fs';

export interface Reader {
    data: string[][];
    read(): void;
}

export class CSVReader implements Reader {
    data: string[][] = [];

    constructor(protected filename: string) { }

    read(): void {
        this.data = fs.readFileSync(this.filename, { encoding: 'utf-8' })
            .split('\n')
            .map((row: string): string[] => row.split(','))
    }
}