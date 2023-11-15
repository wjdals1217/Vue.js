# Vue.js

### Ch01
Vue.js 프로젝트 생성

### Ch02
Vue Directive
|디렉티브 이름|역할|
|:--:|--|
|v-if|지정한 뷰 데이터 값의 참, 거짓 여부에 따라 해당 HTML 태그를 화면에 표시하거나 표시하지 않습니다.|
|v-for|지정한 뷰 데이터의 개수만큼 해당 HTML 태그를 반복 출력합니다.|
|v-show|v-if와 유사하게 데이터의 진위 여부에 따라 해당 HTML 태그를 회면에 표시하거나 표시하지 않습니다. 다만, v-if는 해당 태그를 완전히 삭제하지만 v-show는 css 효과만 display:none으로 주어어 실제 태그는 남아있고 화면상으로만 보이지 않습니다.|
|v-bind|HTML 태그의 기본 속성과 뷰 데이터 속성을 연결합니다.|
|v-on|화면 요소의 이벤트를 감지하여 처리할 때 사용합니다. 예를 들어, v-on:click은 해당 태그의 클릭 이벤트를 감지하여 특정 메서드를 실행할 수 있습니다.|
|v-model|폼(form)에서 주로 사용되는 속성입니다. 폼에 입력한 값을 뷰 인스턴스의 데이터와 즉시 동기화합니다. 화면에 입력된 값을 저장하여 서버에 보내거나 watch와 같은 고급 속성을 이용하여 추가 로직을 수행할 수 있습니다. /input, /select, <textarea>태그에만 사용할 수 있습니다. |

### Ch03
Component : 화면 구성요소를 독립적인 모듈 형태로 구성하기 위한 인스턴스(template, script, style(SFC))
Options API
|주요 API|설명|
|:--:|--|
|data|컴포넌트에서 사용할 상태 data 선언|
|methods|화면 이벤트 처리와 로직제어에 관계된 메서드를 정의|
|computed|컴포넌트의 데이터가 변하면 다시 자동 계산하여 산출|
|watch|데이터 변화 감지|
|props|상위 컴포넌트에서 하위 컴포넌트로 데이터 전달|
|emit|하위 컴포넌트에서 상위 컴포넌트로 이벤트 발생|

### Ch04
Composition API : Component를 작성하기 위해 Vue3에서 새롭게 도입된 함수 기반 API
|구분|설명|
|:--:|--|
|setup()|CompositionAPI 서술하는 API로 <script setup>으로 대체 가능|
|Reactivity|반응형 데이터 선언과 처리를 위한 API 제공|
|LifeCycle Hooks|컴포넌트 생명주기에 맞는 API 제공|
|Dependency Injection|컴포넌트간 데이터 교환을 위한 API 제공|

Reactivity
|주요 API|설명|
|:--:|--|
|ref()|기본 자료형 변수의 반응성을 위한 API|
|reactive()|객체 속성의 반응성을 위한 API|
|computed()|데이터의 변화를 감지하여 사용자가 지정한 새로운 값을 생성하는 API|
|watch()|데이터의 변화를 감지하여 사용자가 지정한 콜백함수를 호출하는 API|

LifeCycle Hooks
|주요API|설명|
|:--:|--|
|onBeforeMount()|기존 beforeMount()동일|
|onMounted()|기존 mounted()동일|
|onBeforeUpdate()|기존 beforeUpdate()동일|
|onUpdated()|기존 updated()동일|
|onBeforeUnmount()|기존 beforeUnmount()동일|
|onUnmounted()|기존 unmounted()동일|

Dependency Injection
|주요 API|설명|
|:--:|--|
|provie()|상위 컴포넌트에서 하위 컴포넌트로 데이터 전달을 위한 선언|
|inject()|상위 컴포넌트에서 정의한 데이터를 하위 컴포넌트에서 주입|

### Ch05
SPA(Single Page Application)
Route : SPA에서 Component간의 이동 또는 전환
Router : 화면을 Server에 요청하지 않고 컴포넌트를 실행해 화면을 Routing
Nested Router : Router로 페이지를 이동할 때 2개 이상의 컴포넌트를 화면에 출력
Named View : 특정 페이지로 이동했을 때 여러 개의 컴포넌트를 동시에 화면에 출력

### Ch06
Pinia : Vue.js에서 지원하는 공식 애플리케이션 상태 관리 라이브러리

### Ch07
HTTP 통신과 JWT
Axios : Promise 기반 HTTP 통신 라이브러리
|API 유형|처리결과|
|:--:|--|
|axios.get('URL 주소').then().catch()|해당 URL 주소에 대해 HTTP GET 요청을 보냅니다. 서버에서 보낸 데이터를 정상적으로 받아오면 then() 안에 정의한 로직이 실행되고, 데이터를 반아올 때 오류가 발생하면 catch()에 정의한 로직이 수행됩니다.|
|axios.post('URL 주소').then().catch()|해당 URL 주소에 대해 HTTP POST 요청을 보냅니다. then()과 catch()의 동작은 위에서 살펴본 내용과 동일합니다.|
|axios.({옵션 속성})|HTTP 요청에 대한 자세한 속성들을 직접 정의하여 보낼 수 있습니다. 데이터 요청을 보낼 URL, HTTP 요청 방식, 보내는 데이터 유형, 기타 등등.|
JWT : 사용자를 인증하고 식별하기 위한 Token 기반 인증 기술. 사용자의 인증 정보와 Server에서 발급되었음을 증명하는 서명이 포함되어 있는 암호화된 문자열을 Client에서 저장 관리하는 방식.
      크게 헤더(header), 페이로드(payload), 서명(signature)으로 구성
