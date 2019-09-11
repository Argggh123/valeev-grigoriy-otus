const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;
    if (query && query.async) {
        if (query.async === 'true') {
            recurAsync(() => timeOut(get), 7, 0);
            res.end('is Async');

        } else {
            recurSync(() => timeOut(get), 7, 0);
            res.end('is Sync');
        }
    } else {
        res.end('no parameters');
    }
});

server.listen(3000, () => {
    console.log('Я запустился');
});

function get() {
    return new Promise(resolve => {
        http.get('http://google.com/', (res) => {
            console.log(`google say ${res.statusCode}`);
            resolve();
        })
    })
}

function timeOut(exec) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(exec);
        }, 100);
    });
}

function recurSync(exec, count, i) {
    exec().then((get) => {
        get().then(() => {
            console.log('Sync');
            i < count && recurSync(exec, count, ++i);
        });
    });

}

function recurAsync(exec, count, i) {
    exec().then((get) => {
        get().then(() => {
            console.log('Async');
        });
        i < count && recurAsync(exec, count, ++i);
    });
}
