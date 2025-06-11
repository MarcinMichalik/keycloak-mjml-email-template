import * as fs from 'node:fs';
import * as path from 'node:path';

export default function txtPlugin() {
    return {
        name: 'vite-plugin-txt',
        transform(src, id) {
            if (id.endsWith('.txt')) {
                const filePath = path.resolve(id); // Odczytujemy pełną ścieżkę pliku
                const fileContent = fs.readFileSync(filePath, 'utf-8');

                return {
                    code: `export default ${JSON.stringify(fileContent)};`,
                    map: null
                };
            }
        }
    };
}
