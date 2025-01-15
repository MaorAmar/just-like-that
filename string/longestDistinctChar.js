function longestDistinctCharInString(str) {
    let obj = {};
    let result = 0;
    let counter = 0;
    for (let i = 0; i < str.length; i++){
        if (!obj.hasOwnProperty(str[i])) {
            counter++;
            obj[str[i]] = 1;
            if( result < counter) result = counter;
        }
        else {
            obj = {};
            obj[str[i]] = 1;
            counter = 1;
        }
    }
    return result;
}
module.exports.longestDistinctCharInString = longestDistinctCharInString;


//פתרון שבאמת עובד
/*
function longestDistinctCharInString(str) {
    let obj = {};
    let result = 0;
    let start = 0;

    for (let end = 0; end < str.length; end++) {
        const char = str[end];

        // אם התו כבר קיים בחלון, עדכן את תחילת החלון
        if (obj.hasOwnProperty(char)  && obj[char] >= start) {
            start = obj[char] + 1;
        }

        // עדכן את המיקום של התו הנוכחי
        obj[char] = end;

        // חישוב האורך של החלון הנוכחי
        result = Math.max(result, end - start + 1);
    }

    return result;
}
*/