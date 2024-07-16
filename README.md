# 매직8볼이 머냐면요

![](https://velog.velcdn.com/images/wijoonwu/post/f8911de3-a221-44e8-b0cc-527c477e75c7/image.png)

토이스토리에서 우디가 점괘를 볼 때 사용했던 공이에요. 이 신비로운 공을 흔들고 나서 뒷면을 보면, 질문에 대한 답변이 나타납니다. 결정이 어려운 상황, 고민이 생길 때, 혹은 걱정이 있을 때, 랜덤한 답변을 제공해주는 장난감이에요.

> 유튜브 클립: https://www.youtube.com/watch?v=mFOracFClBg

# 제가 만들어봤는데요

## 미리보기

- 매직8볼🎱 : https://magic8ball1.netlify.app/

![](https://velog.velcdn.com/images/wijoonwu/post/38ef01ce-e36d-492c-ab88-8f1c05e0f28d/image.png)

## 왜 만들었냐면요

갑자기 고민 되는 일이 생겨서 무엇인가에 가볍게 기대고 싶었는데 마침 매직 8볼이 떠올랐어요. 당장 장난감을 사서 바로 사용하는 것보다 개발하는 게 빠를 것 같아서, 그리고 재미있을 것 같아서 만들어보았습니다.

## 어떻게 만들었냐면요

### 기술 스택: HTML, CSS, JS

복잡한 기능이 요구되는 사이트가 아니라서, 별도 라이브러리나 프레임워크 없이 HTML, JS, CSS로 충분히 필요 기능을 구현할 수 있을 거라고 생각했어요. 유지보수도 편하고 개발도 빠르게 할 수 있을 것 같아서 프론트엔드만 선택했습니다.

### 배포: Netlify

[Netlify](https://www.netlify.com/) 를 통해서 무료로, 간편하게 배포했습니다. 깃허브 레포지토리로 프로젝트를 만들면 코드 변경마다 자동으로 배포되어 너무 편리했어요.

- 참고한 블로그는 https://clolee.tistory.com/77

### 주요 기능 및 고려사항

**랜덤성 구현:** 매직8볼의 핵심 기능은 질문에 대해 랜덤하게 답변을 제공하는 것이에요. 그래서 JavaScript의 Math.random() 함수를 사용하여 답변을 무작위로 선택하도록 구현했습니다.

**사용자 인터페이스(UI):** 공을 흔드는 애니메이션 효과를 추가하여 사용자가 실제 매직8볼을 사용하는 듯한 느낌을 주고 싶었어요. CSS와 HTML5를 사용하여 간단하지만 시각적으로 재미있는 인터페이스를 만들었습니다.

**방문자 수 카운트:** 사이트 활용도를 보기 위해서 방문자 수를 카운트하는 기능을 추가하고 싶었는데, 별도 스토리지를 가지는 것보다 더 간편한 방법으로, [HITS](https://hits.seeyoufarm.com/)를 선택했습니다. HTML 코드만 삽입하면 끝!

- Github: https://github.com/wijoonwu/magic8ball

# 마무리

매직8볼이 완벽한 해결책을 제시하지는 않지만 고민되는 순간에 잠시나마 재미와 여유를 느낄 수 있고 생각도 환기 될 수 있을 거라고 기대해요. 매직8볼을 통해서 일상의 작은 결정들을 조금 더 즐겁게 만들어보셔요

- 매직8볼🎱 : https://magic8ball1.netlify.app/

# 번외

## 사용후기

![](https://velog.velcdn.com/images/wijoonwu/post/0afc2839-56ee-4616-98cc-12b011ddf937/image.jpg)
