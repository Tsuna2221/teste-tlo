const getSub = (sub, page, pageType, count) => {
    if(!pageType){
        return fetch(`https://www.reddit.com/r/${sub ? sub : "popular"}.json?raw_json=1&limit=50`).then(res => res.json()).then(res => res)
    }else if(pageType === 'before'){
        return fetch(`https://www.reddit.com/r/${sub ? sub : "popular"}.json?raw_json=1&limit=50&count=${count}&before=${page}`).then(res => res.json()).then(res => res)
    }else if(pageType === 'after'){
        return fetch(`https://www.reddit.com/r/${sub ? sub : "popular"}.json?raw_json=1&limit=50&count=${count}&after=${page}`).then(res => res.json()).then(res => res)
    }
}

export { getSub }