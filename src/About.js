import React from "react";
import qs from "qs";
//http://localhost:3000/about?detail=true
/*
location 객체는 라우크로 사용된 컴포넌트에게 props로 전달되며, 
웹 애플리케이션의 현재 주소에 대한 정보를 지니고 있습니다.
  location의 형태는 다음과 같습니다.
  {
    "pathname":"/about",
    "search":"?detail=true",
    "hash":""
  }
*/
const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, //이 설정을 통해 문자열 맨 앞의 ?를 생략합니다.
  });
  const showDetail = query.detail === "true"; //쿼리의 파싱 결과 깂은 문자열입니다.
  return (
    <div>
      <h1>소개</h1>
      <p>
        이 프로젝트는 리액트 라우터 기초를 실습해 조는 예제 프로젝트 입니다.
      </p>
      {showDetail && <p>detail 값을 true로 설정하셨군요!!</p>}
    </div>
  );
};

export default About;
