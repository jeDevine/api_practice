const apiPromise = fetch("https://grandcircusco.github.io/demo-apis/donuts.json")
.then(res => res.json());

apiPromise.then(data => {
    console.log(data);
    console.log(data.count);
})
//pulling the count out and setting value to var
const countPromise = apiPromise
.then(data => {
    return data.count
})

countPromise.then(data => {
    console.log(data);
})

const top4Promise = apiPromise
.then(data => {
    let top4 = [];
    for (let i = 0; i < 4; i++) {
        top4.push(data.results[i].name);        
    }
    return top4;
})
top4Promise.then(data => {
    console.log(data);
})

const namesPromise = apiPromise
.then(data => {
    let names = [];
    for (let i = 0; i < data.results.length; i++) {
    names.push(data.results[i].name);
    }
    return names;
})
namesPromise.then(data => {
    console.log(data);
})

const capNamesPromise = namesPromise
.then(data => {
    let upper = [];
    for (let i = 0; i < data.length; i++){
        upper.push(data[i].toUpperCase());
    }
    return upper;
})
capNamesPromise.then(data => {
    console.log(data);
})

let badPromise = fetch(`https://grandcircusco.github.io/demo-apis/wrong.json`)
.then(res => res.json())
.then(data => {
    console.log("hello")
})
.catch(err => {
    console.log("FAILED" + err)
})