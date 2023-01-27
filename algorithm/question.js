function solution(s) {
    for (let i = 0; i < s.length; i++) {
      if (s.length % 2 == 0) {
        // 문자열의 길이가 짝수일 때
        return s.substr(s.length / 2 - 1, 2); // 문자열의 길이를 2로 나누고 -1을 해주면 가운데 글자 위치
      } else if (s.length % 2 !== 0) {
        return s.substr(Math.ceil(s.length / 2) - 1, 1);
      }
    }
  }