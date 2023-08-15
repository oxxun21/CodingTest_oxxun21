const axios = require("axios").default;

// 지정된 ID를 가진 유저에 대한 요청
axios
  .get("/user?ID=12345")
  .then(function (res) {
    // 성공 핸들링
    console.log(res);
  })
  .catch(function (err) {
    // 에러 핸들링
    console.log(err);
  })
  .finally(function () {
    // 항상 실행되는 영역
  });

// 선택적 요청
axios
  .get("/user", {
    params: {
      ID: 12345,
    },
  })
  .then(function (res) {
    // 성공 핸들링
    console.log(res);
  })
  .catch(function (err) {
    // 에러 핸들링
    console.log(err);
  })
  .finally(function () {
    // 항상 실행되는 영역
  });

// async/await 사용 시
async function getUser() {
  try {
    const res = await axios.get("/user?ID=12345");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

////////////////////////////////////////
axios
  .post("/user", {
    firstName: "fred",
    lastName: "Flintstone",
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// 여러 동시 POST 요청 생성
function getUserAccount() {
  return axios.get("/user/12345");
}

function getUserPermissions() {
  return axios.get("/user/12345/permissions");
}

Promise.all([getUserAccount(), getUserPermissions()]).then((result) => {
  const acct = result[0];
  const perm = result[1];
});

//////////////////////////////////////////////
// POST 요청 전송
axios({
  method: "post",
  url: "/user/12345",
  date: {
    firstName: "Fred",
    lastName: "Flintstone",
  },
});

// node.js에서 GET 요청으로 원격 이미지 가져오기
axios({
  method: "get",
  url: "이미지 주소",
  responseType: "stream",
}).then((rse) => {
  res.data.pipe(fs.createWriteStream("이미지명.jpg"));
});

// GET 요청 전송 (기본값)
axios("/user/12345");

/////////////////////////////////////////////
const instance = axios.create({
  baseURL: "Base URL",
  timeout: 1000,
  headers: {
    "X-Custom-Header": "foobar",
  },
});
///////////////////////////////////////////////
axios({
  // url : 요청에 사용될 서버 URL
  url: "/user",

  // method: 요청을 생성할 때 사용되는 메서드
  method: "get", // 기본 값

  // url이 절대 값이 아닌 경우 baseURL은 URL 앞에 붙음
  // 상대적인 URL을 인스턴스 메서드에 전달하려면 'baseURL'을 설정하는 것이 편리함
  baseURL: "https://~~~~",

  // transformRequset : 요청 데이터를 서버로 전송하기 전에 변경할 수 있게 함
  // "PUT", "POST", "PATCH", "DELETE" 메서드에서만 적용
  // 마지막 함수는 Buffer, ArrayBuffer, FormData 또는 Stream 의 인스턴스 또는 문자열을 반환해야함
  // 헤더 객체를 수정할 수 있음
  transformRequset: [
    function (data, headers) {
      // 데이터 변환 작업 수행

      return data;
    },
  ],

  // headers : 사용자 지정 헤더
  headers: { "X-Requseted-With": XMLHttpRequest },

  // params : 요청과 함께 전송되는 URL 파라미터
  // 반드시 일반 객체나 URLSearchParms 객체여야 함
  // null / undefined는 URL에 렌더링 되지 않음
  params: {
    ID: 12345,
  },

  // paramsSerializer : params의 시리얼 사이즈를 담당하는 옵션 함수
  paramsSerializer: function (params) {
    return Qs.stringify(params, { arrayFormat: "brackets" });
  },

  // data : 요청 바디로 전송될 데이터
  // "PUT", "POST", "PATCH", "DELETE" 메서드에서만 사용 가능
  // transformRequset 가 설정되지 않은 경우 다음 타입 중 하나여야 함
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 브라우저 전용: FormData, File, Blob
  // - Node 전용: Stream, Buffer
  data: {
    firstName: "Fred",
  },

  // timeout : 요청이 시간 초과되기 전의 시간을 지정(밀리초)
  // 요청이 timeout 보다 오래걸리면 요청 중단
  timeout: 1000,

  // withCredentials : 자격 증명을 사용하여 사이트 간 액세스 제어 요청을 해야하는지 여부를 나타냄
  withCredentials: false,

  // adapter : 커스텀 핸들링 요청을 처리할 수 있어 테스트가 쉬워짐
  // 유효한 Promise 응답을 받환해야함
  adapter: function (config) {
    // ~~~
  },

  // auth : HTTP Basic 인증에 사용, 자격 증명 제공
  // Authorization 헤더가 설정되어 headers 를 사용하여 설정한 기존의 Authorization 사용자 지어 헤더를 덮어씀
  // 파라미터를 통해 HTTP Basic 인증만 구성할 수 있음
  // Bearer 토큰의 경우 Authorization 사용자 지정 헤더를 대신 사용
  auth: {
    username: "janedoe",
    password: "s00pers",
  },

  // responseType : 서버에서 받는 데이터 타입 지정
  // 옵션 : arraybuffer, document, json, test, stream
  // 브라우저 전용 : blob
  responseType: "json", // 기본값

  // responseEncoding : 응답 디코딩에 사용할 인코딩
  // node.js 전용
  // 클라이언트 사이드 요청 또는 responseType이 stream이면 무시
  responseEncoding: "utf8", // 기본값

  // xsrfCookieName : xsrf 토큰 값으로 사용할 쿠키 이름
  xsrfCookieName: "XSRF-TOKEN",

  // xsrfHeaderName: xsrf 토큰 값을 운반하는 HTTP 헤더 이름
  xsrfHeaderName: "x-XSRF-TOKEN", // 기본값

  // onUploadProgress : 업로드 진행 이벤트 처리
  // 브라우저 전용
  onUploadProgress: function (progressEvent) {
    // 업로드 진행 이벤트 작업 수행
  },

  // onDownloadProgress : 다운로드 로드 진행 이벤트 처리
  // 브라우저 전용
  onDownloadProgress: function (progressEvent) {
    // 다운로드 진행 이벤트 작업 수행
  },

  // maxContentLength : node.js 에서 허용되는 http 응답 콘텐츠의 최대 크기를 바이트 단위로 정의
  maxContentLength: 2000,

  // maxBodyLength : 허용되는 http 요청 컨텐츠의 최대 크기를 바이트 단위로 정의
  // node.js 전용
  maxBodyLength: 2000,

  // validateStatus : 지정된 HTTP 응답 상태 코드에 대한 Promise를 이행할지 거부할지 여부 정의
  // true를 반환(또는 null 또는 undefined)하면 Proimse 이행
  // false 반환하면 Promise 거부
  validateStatus: function (status) {
    return status >= 200 && status < 300; // 기본값
  },

  // maxRedirects : node.js에서 리디렉션 최대값 정의
  // 0 설정 -> 리디렉션 X
  maxRedirects: 5, // 기본값

  // socketPath : node.js 에서 사용될 UNIX 소켓 정의
  // 오직 socketPath 또는 proxy만 지정할 수 있음
  // 둘 다 지정 시 socketPath 사용
  socketPath: null, // 기본값

  // httpAgent : 각각 node.js에서 http 및 http 요청을 수행할 때 사용할 사용자 지정 에이전트 정의
  // 기본적으로 활성화되지 않은 keepAlive와 같은 옵션 추가 가능
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // proxy : 프록시 서버의 호스트 이름, 포트, 프로토콜 정의
  proxy: {
    protocol: "https",
    host: "127.0.0.1",
    port: 9000,
    auth: {
      username: "mikeymike",
      password: "rapunz3l",
    },
  },

  // cancelToken : 요청을 취소하는 데 사용할 수 있는 최소 토큰 지정
  cancelToken: new CancelToken(function (cancle) {}),

  // decompress : 응답 바디의 자동 압축 해제 여부
  decompress: true, // 기본값
});

///////////////////////////////////////////////////////
({
  // data : 서버가 제공하는 응답
  data: {},

  // status : HTTP 상태 코드
  status: 200,

  // statusText: HTTP 상태 메세지
  statusText: "OK",

  // headers : HTTP 헤더
  // 모든 헤더의 이름은 소문자이며, 괄호 표기법 사용하여 접근
  headers: {},

  // config : 요청을 위해 Axios가 제공하는 구성
  config: {},

  // requset : 이번 응답으로 생성된 요청
  // 브라우저에선 XMLHttpRequset
  request: {},
});

/////////////////////////////////////////////////////////////
// 전역 Axios 기본값
axios.defaults.baseURL = "";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] = "";

// 커스텀 인스턴스 기본값
// 인스턴스 생성 시 config 기본값 설정하기
const instance1 = axios.create({
  baseURL: "",
});

// 인스턴스 생성 후 기본값 변경
instance1.defaults.headers.common["Authorization"] = AUTH_TOKEN;

const instance2 = axios.create();

// 라이브러리에 대한 timeout 값 재정의
// 모든 요청은 시간 초과 전 2.5초 대기하는 인스턴스 사용
instance2.defaults.timeout = 2500;

// 시간이 오래걸리는 요청에 대한 timeout 값 재정의
instance2.get("/longRdquest", {
  timeout: 5000,
});

///////////////////////////////////////////////////////
// 요청 인터셉터 추가
axios.interceptors.request.use(
  function (config) {
    // 요청 전달 전 작업 수행
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
axios.interceptors.response.use(
  function (res) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거
    // 응답 데이터가 있는 작업 수행
    return res;
  },
  function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

const myInterceptor = axios.interceptors.request.use(function () {});
axios.interceptors.request.eject(myInterceptor);

const instance4 = axios.create();
instance4.interceptors.request.use(function () {});

////////////////////////////////////////////////////////
axios.get("/user/12345").catch((err) => {
  if (err.response) {
    // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
  } else if (err.request) {
    // 요청이 전송되었지만, 응답이 수신되지 않음
    console.log(err.request);
  } else {
    // 오류가 발생한 요청을 설정하는 동안 문제 발생
    console.log("error", err.message);
  }
  console.log(err.config);
});

axios.get("/user/12345", {
  validateStatus: function (status) {
    return status < 500; // 상태 코드가 500 미만인 경우에만 해결
  },
});

axios.get("/user/12345").catch(function (err) {
  console.log(err.toJSON());
});
//////////////////////////////////////////////////////////
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios
  .get("/user/12345", {
    cancelToken: source.token,
  })
  .catch(function (thrown) {
    if (axios.isCancel(thrown)) {
      console.log("Request canceled", thrown.message);
    } else {
      // 에러 핸들링
    }
  });

axios.post(
  "/user/12345",
  {
    name: "new name",
  },
  {
    cancelToken: source.token,
  }
);

// 요청 취소하기 (메시지 파라미터는 옵션)
source.cancel("Operation canceled by the user.");

const CancelToken1 = axios.CancelToken;
let cancel;

axios.get("/user/12345", {
  cancelToken: new CancelToken1(function executor(c) {
    // 실행자 함수는 취소 함수를 파라미터로 받음
    cancel = c;
  }),
});

// 요청 취소하기
cancel();
