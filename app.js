// Promises chaining
// assuming we created a promis function fakeRequestPromise
fakeRequestPromise('yelp/api/coffee/page1')
    .then(() => {
        console.log('It worked (page1)')
        return fakeRequestPromise('yelp/api/coffee/page2')
    })
    .then(() => {
        console.log('It worked (page2)')
        return fakeRequestPromise('yelp/api/coffee/page3')
    })
    .then(() => {
        console.log('It worked (page3)')
    })
    .catch(() => {
        console.log('Request failed')
    })

// Creating Promises
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('Your fake data here');
            }
            reject('Request Error');
        }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log('Done with request')
        console.log('data is:', data)
    })
    .catch((err) => {
        console.log('Oh no', err)
    })


const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
    // using implicit returns
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))
