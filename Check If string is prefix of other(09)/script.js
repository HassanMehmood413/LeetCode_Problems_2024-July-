var isPrefixString = function (s, words) {
    let formed = '';
    for (let i = 0; i < words.length; i++) {
        formed += words[i];
        if (s.startsWith(formed)) {
            if (s === formed) {
                return true;
            }
        } else {
            return false;
        }
    }
    return false

};