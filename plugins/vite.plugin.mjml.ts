import mjml2html from 'mjml';

export default function mjmlPlugin() {
    return {
        name: 'vite-plugin-mjml',
        transform(src: string, id: string) {
            if (id.endsWith('.mjml')) {
                const html = mjml2html(src).html;
                return {
                    code: `export default ${JSON.stringify(html)};`,
                    map: null
                };
            }
        }
    };
}
