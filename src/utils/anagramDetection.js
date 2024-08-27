
export const anagramDetection = (s1, s2) => {
    if (s1.length !== s2.length) {
      return false; // base condition
    }

    let characterArrCount = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
      characterArrCount[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
    }

    for (let i = 0; i < s2.length; i++) {
      characterArrCount[s2.charCodeAt(i) - "a".charCodeAt(0)]--;
    }

    for (let i = 0; i < characterArrCount.length; i++) {
      if (characterArrCount[i] !== 0) {
        return false;
      }
    }

    return true;
  };