console.log('[Webworker] init');

onmessage = function (message) {
    const { data: { type, args } } = message;

    switch (type) {
        case 'parse':
            const { string, path } = args;
            parseJsonString(string, path);
            break;
        default:
            break;
    }
}

function parseJsonString (string, path) {
    const fullObject = JSON.parse(string);
    let result = fullObject;
    if (path) {
        const segments = path.split('/');
        segments.forEach(segment => result = result[segment]);
    }

    postMessage(result);
}