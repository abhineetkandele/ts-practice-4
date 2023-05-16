import fs from 'fs';
import { OutputTarget } from "../Summary";

export class HTMLReport implements OutputTarget {
    print(report: string): void {
        fs.writeFileSync('report.html', `
            <div>
                <h1>Matches summary</h1>
                <h2>${report}</h2>
            </div>
        `)
    }
}