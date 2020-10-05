export const errorConstants = {
  //원인을 알 수 없는 Error 또는 예외처리가 되지 않은 Error
  GLOBAL_0001: '문제가 발생하였습니다.\n 관리자에게 문의하여주세요.\nERROR_CODE:0001',
  //Network Error ex)인터넷 연결이 되지 않은 경우
  GLOBAL_0002: '문제가 발생하였습니다.\n 관리자에게 문의하여주세요.\nERROR_CODE:0002',

  AUTH_0001: '등록되지 않은 사용자입니다.',
  AUTH_0002: '비밀번호가 잘못되었습니다.',
  AUTH_0003: '탈퇴한 회원입니다.',
  AUTH_0004: '인증 정보가 잘못되었습니다.',

  REGIST_0001: '중복된 username이 있습니다.',
  REGIST_0002: '비밀번호가 일치하지 않습니다.',
  REGIST_0003: '해당 email은 이미 가입되었습니다.',

  APPLICATION_001: "API를 찾을 수 없습니다.",

  STAGE_001: "API를 찾을 수 없습니다.",
  STAGE_002: "데이터가 적재되지 않은 원 천데이터가 있습니다.",
  STAGE_003: "Operation 정보를 설정하지 않은 원천 데이터가 있습니다.",
  STAGE_004: "데이터가 적재되지 않은 API 입니다.",
  STAGE_005: "배포 상태가 아닌 API 입니다.",
  STAGE_006: "배포 상태의 버전은 삭제할 수 없습니다.",  

  META_001: "원천데이터 정보를 찾을 수 없습니다.",
  META_002: "입력되지 않은 내용이 있습니다.",
  META_003: "지원하지 않는 DBMS 정보입니다.",
  META_004: "지원하지 않는 파일입니다.",
  META_005: "지원하지 않는 파일 확장자 입니다.",

  SERVICE_001: "해당 Operation을 찾을 수 없습니다.",
  SERVICE_002: "입력되지 않은 내용이 있습니다."
}