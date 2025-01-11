class Solution {
  lastIndex(S) {
    let i = S.length - 1;
    for (i; i >= 0; i--) {
      if (S[i] === "1") {
        return i;
        break;
      }
    }
    return -1;
  }
}
//אופציה יותר קלילה עם שוגר סינטקס
/*class Solution{
    lastIndex(S){
        let result = S.lastIndexOf("1");
        return result;
    }
}
*/
const solution = new Solution();
const result = solution.lastIndex("1");
console.log(result);
