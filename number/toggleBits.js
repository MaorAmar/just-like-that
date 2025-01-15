function toggleBitsGivenRang(n,l,r){
    //ה toString(2) ממיר לנו למספר בינארי והsplit הופך את זה למערך
    const newN = n.toString(2).split('');
    for ( let i = l ; i <= r ; i++){
        if ( newN[i] === '0')
            newN[i] = '1';
        else newN[i] = '0';
    }
    //הjoin עושה לנו מעבר ממערך לסטרינג והparseIne ממיר לInt
    const result = parseInt(newN.join(''), 2);

    return result;
}
module.exports.toggleBitsGivenRang = toggleBitsGivenRang;


