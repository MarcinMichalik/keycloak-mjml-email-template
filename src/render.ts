export const renderHTMLEmail = (template, context) => {
    return {
        render: (args, { loaded }) => {
            return replaceMsg(template, loaded.i18n, context);
        }
    }
}

export const renderTextEmail = (template, context) => {
    return {
        render: (args, { loaded }) => {
            return `<pre>${replaceMsg(template, loaded.i18n, context)}</pre>`;
        }
    }
}


const resolveArg = (context, path) => {
    return path.split('.').reduce((acc, part) => acc?.[part], context);
};

const replaceMsg = (template, i18n, context) => {
    return template
        // usuń kcSanitize(...) z całego wyrażenia
        .replace(/\$\{kcSanitize\(msg\("(.+?)"(.*?)\)\)\?no_esc\}/g, (_, key, rawArgs) => evaluateFreemarker(key, rawArgs, i18n, context))
        .replace(/\$\{kcSanitize\(msg\("(.+?)"(.*?)\)\)\}/g, (_, key, rawArgs) => evaluateFreemarker(key, rawArgs, i18n, context))
        // fallback: zwykłe msg(...) bez kcSanitize
        .replace(/\$\{msg\("(.+?)"(.*?)\)\}/g, (_, key, rawArgs) => evaluateFreemarker(key, rawArgs, i18n, context))
        // Replace <#ftl...
        .replace(/^\s*<#[^\n]*>\s*\n?/gm, '');
};

const msg = (i18n, key, ...args) => {
    let str = i18n[key] ?? `{{${key}}}`;
    args.forEach((arg, index) => {
        str = str.replace(new RegExp(`\\{${index}\\}`, 'g'), arg);
    });
    return str;
};

const evaluateFreemarker = (key, rawArgs, i18n, context) => {
    const args = rawArgs
        .split(',')
        .map(arg => arg.trim())
        .filter(Boolean)
        .map(arg => arg.replace(/^["']|["']$/g, ''))
        .map(arg => {
            // Sprawdzamy, czy argument jest funkcją w context
            if (arg.includes('(') && arg.includes(')')) {
                // Jeśli argument jest wywołaniem funkcji (np. linkExpirationFormatter(linkExpiration)),
                // wyciągamy nazwę funkcji i wywołujemy ją
                const functionName = arg.split('(')[0].trim();
                const functionArg = arg.split('(')[1].split(')')[0].trim();
                // Wywołujemy funkcję, przekazując odpowiedni argument
                if (context[functionName]) {
                    return context[functionName](context[functionArg]);
                }
            }
            // W przeciwnym razie, traktujemy argument jako zwykłą zmienną
            return resolveArg(context, arg) ?? arg;
        });

    return msg(i18n, key, ...args);
}
