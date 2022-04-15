function noop() {}

class MyPromise {
    constructor(executor) {
        this.queue = [];
        this.errorHandler = noop;
        this.finallyHandler = noop;

        try{
            executor(this.onResolve.bind(this), this.onReject.bind(this));
        } catch (e) {
            this.errorHandler(e);
        } finally {
            this.finallyHandler();
        }
    }

    onResolve(data) {
        this.queue.forEach(callback => {
            data = callback(data);
        })

        this.finallyHandler();
    }

    onReject(error) {
        this.errorHandler(error);

        this.finallyHandler();
    }

    then(fn) {
        this.queue.push(fn);
        return this;
    }

    catch(fn) {
        this.errorHandler = fn;
        return this;
    }

    finally(fn) {
        this.finallyHandler = fn;
        return this;
    }
}


// const promise = new Promise((onResolve, onReject) => {
//     setTimeout(() => {
//         onResolve('NgRX')
//     }, 150)
// })

const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject('Some error')
    }, 150)
})

promise
    .then(title => console.log(`This is title: ${title}`))
    .catch(err => console.log('Err:', err))
    .finally(() => console.log('Finally'))

