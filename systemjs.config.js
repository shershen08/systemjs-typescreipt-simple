System.config({
    defaultJSExtensions: true,
    transpiler: 'typescript',
    map: {
        typescript: 'node_modules/typescript/lib/typescript.js'
    },
    paths: {
        // paths serve as alias
        'npm:': 'node_modules/'
    },
    map: {
        testapp: './dist'
    },
    baseURL: './dist',
    packages: {
        testapp: {
            format: 'register',
            defaultExtension: 'js'
        }
    },

});
