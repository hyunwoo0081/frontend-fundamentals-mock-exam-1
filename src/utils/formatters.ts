/** 양의 정수 문자를 3자리 마다 콤마로 구분합니다. */
export function getLocaleString(num: number | string) {
  if (typeof num === 'string') {
    num = toNumber(num);
  }
  return num.toLocaleString('ko-KR');
}

/** 문자에서 정수만 추출한 뒤, 정수로 반환합니다. */
export function toNumber(num: string) {
  num = num.replace(/[^0-9]/g, '');
  return Number(num);
}
