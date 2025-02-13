function flat(list){
    if(!Array.isArray(list)) return [list];

    let arr = [];
    for(const item of list){
        arr = [...arr,...flat(item)];
    }
    return arr;
}
module.exports.flat = flat