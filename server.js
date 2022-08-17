function parseQuery(query) {
    const Json = {}
    query = query.substring(query.indexOf("?") + 1);
    let queryArr = query.split('&')
        for(subQuery of queryArr ){
            if(subQuery.includes("=")) {
                subQuery = Array.from(new Set(subQuery.split('=')))
                const key = subQuery[0].includes('?') ? subQuery[0].substring(0, subQuery[0].indexOf('?')) : subQuery[0];
                const value = subQuery[1].includes('?') ? subQuery[1].substring(0, subQuery[1].indexOf('?')) : subQuery[1];
                Json[key] = value
            }
        }
    return Json
}



module.exports = parseQuery