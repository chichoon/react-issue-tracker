# React Issue Tracker
## [배포 링크](https://react-issue-tracker-gilt.vercel.app/)

## 기능 소개

### 이슈 모아보기

<img width="480" alt="image" src="https://github.com/chichoon/react-issue-tracker/assets/37893979/ee5a51c9-95e1-4e59-a920-12e219e3565e">

목록으로 facebook/react 레포지토리의 이슈를 모아볼 수 있습니다.

출력되는 내용은 이슈 번호, 이슈 제목, 작성자, 작성일, 코멘트 수 입니다.

### 무한 스크롤

![Sep-01-2023 20-58-33](https://github.com/chichoon/react-issue-tracker/assets/37893979/1283b3d3-b5ce-4df3-856c-e7ed157f7492)

IntersectionObserver를 이용하여 구현한 무한 스크롤 기능으로 편리한 탐색이 가능합니다.

```ts
let observer: IntersectionObserver;
if (target && target.current) {
  observer = new IntersectionObserver(onIntersect, { threshold: 0.9 });
  observer.observe(target.current);
}
return () => observer && observer.disconnect();
```

옵저버 객체 `observer`를 생성하고, `useRef`으로 가리키는 타겟 target 을 옵저빙하도록 등록합니다.

threshold를 0.9로 설정함으로써 뷰포트와 타겟이 90% 이상 교차할 (Intersect) 때에만 콜백 함수를 실행하도록 합니다.

```ts
const onIntersect: IntersectionObserverCallback = useCallback(
  ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      onIntersectCallback();
      setTimeout(() => {
        observer.observe(entry.target);
      }, 5000);
    }
  },
  [onIntersectCallback]
);
```

Intersect 시에 실행되는 함수입니다.

`isIntersecting` 속성을 통해 교차되었는지 여부를 판단할 수 있습니다.

교차 중일 때는 임시로 옵저빙을 해제하여 중복된 코드 실행이 발생하지 않도록 합니다.

또한 한 번에 교차 이벤트가 여러 번 발생하는 것을 방지하기 위해 `setTimeout` 을 통해 다시 옵저빙을 시작할 때까지 딜레이를 주었습니다.

### 이슈 상세 보기

<img width="617" alt="image" src="https://github.com/chichoon/react-issue-tracker/assets/37893979/6d4e4363-b490-48a5-b681-8f7a5de89b1c">

이슈 항목을 클릭하면 상세 보기 페이지에 접속할 수 있습니다.

이슈의 실제 내용을 `react-markdown` 을 이용하여 출력하였습니다.

작성자와 작성 일자, 코멘트 개수, 제목을 함께 볼 수 있습니다.
