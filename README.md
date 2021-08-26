<div align="center">

# react-web-editor-introduce

### WYSIWYG 기능을 사용할 수 있는 라이브러리, 그리고 그 데모 사이트에 대해 소개합니다.

라이브러리 소스 코드 및 documentations은 아래 링크에서 보실 수 있습니다.  
<p></p>
 
[react-web-editor github](https://github.com/CHEWCHEWW/react-web-editor)  
<p></p>
 <img src="https://drive.google.com/uc?id=1NJyeW4udALFzWlyqY9cG6WAY6HFa9Qm6" alt="main image" />

[Demo & Introduce](https://reactwebeditor.com)  

[react-web-editor npm](https://www.npmjs.com/package/react-web-editor)  

</div>

## ✨ Getting Started

```bash
npm run start
```

## 🎐 Deploy & Publish

### react-web-editor

- npmjs를 이용해 publish

[update log](https://github.com/CHEWCHEWW/react-web-editor#version-up-log)

### react-web-editor-website

- vercel을 이용해 deploy

## 🎨 What is React Web Editor
<p align="center"> 라이브러리 사용법은 [여기](https://github.com/CHEWCHEWW/react-web-editor)서 확인하실 수 있습니다. </p>

- React Web editor는 ui를 동적으로 변경할 수 있는 component의 및 훅들을 제공하는 라이브러리입니다.
- Resizing, Draggable, Drag and Drop 등의 기능을 지원하고, 또한 동적으로 이미지를 업로드하거나, component의 색상과 텍스트를 스타일링 할 수 있습니다.
- 보조적으로, 현재 component의 위치를 알 수 있는 coordinates tag, 그리고 현재 component가 중앙 정렬 되었는지를 알려주는 guide line이 block 형식의 컴포넌트에 내장되어 있습니다.
- 궁극적으로, 사용자가 동적으로 웹의 ui를 변경할 수 있는 editor page를 제작할 수 있습니다.

## ⚡ Core characteristics
- **사용자 친화적으로 제작한 라이브러리로, 사용하기 쉽습니다.**  
core 기능은 hook을 이용해 제작 했지만, 이를 최대한 단순하게 사용할 수 있도록 block component로 래핑했습니다.
따라서 간단하게 사용하고 싶은 사용자들은 block component를 import한 후 props에 원하는 값을 대입하면 됩니다.

- **무겁지 않게 만들기 위해 노력했습니다.**  
간단하고 가볍게 제작 하는 것을 제일의 목표로 삼았기에, component의 무게를 가볍게 만들기 위해 노력했습니다.
따라서 필수적인 library를 제외하고는 최소한의 dependency를 가지고 있습니다.

- **hook 친화적으로 만든 library로, 사용자가 최근의 react style을 이용하여 커스터마이징 할 수 있습니다.**  
core한 기능들은 모두 hook으로 구현되어 있습니다.
사용자는 hook을 이용하여 자신들만의 component 및 library를 제작할 수 있습니다.

- **customize를 위한 도구들이 존재합니다.**  
styled component들을 import하여 새로 component를 확장할 수 있도록 지원하고 있습니다.

- custom 설정으로 configuration 관리 및 프로젝트 확장을 온전히 제어 할 수 있도록 webpack을 이용해 빌드했습니다.

## What is react-web-editor-website
<p align="center">[website](https://reactwebeditor.com) </p>

- react-web-editor 라이브러리의 데모 및 설명 사이트입니다.
- 각 기능들을 간단한 코드와 함께 테스트 할 수 있게 구현했습니다.
- resize, draggable, drag-and-drop, image upload, text editor 등의 기능을 직접 테스트 해 볼 수 있습니다.

## 💡 Motivation

### react-web-editor

- **프론트 엔드에 집중한 프로젝트를 진행해보고 싶었습니다.**  
  웹빌더 사이트들을 가끔 재미로 이용하고는 했습니다.
  실질적으로 배포할 곳이 없는데도, WYSIWYG 방식으로 화면을 능동적이게 변경하는 것이 정말 재밌었습니다.
  여기서 react-web-editor 프로젝트에 대한 모티브를 얻었습니다.

  기존 프로젝트들은 다른 기능을 구현하고 그에 필요한 새로운 기술에 도전하는데에 많은 시간을 보냈습니다.
  물론 정말로 재밌었고 얻어가는 것 또한 많았습니다.
  하지만 그러다보니 순수하게 화면 구성에 집중할 시간이 상대적으로 적었습니다.
  이번 프로젝트는 온전히 프론트 엔드만을 위한 프로젝트를 만들어봐야겠다는 생각을 가지고 기획을 시작했습니다.

- **제가 만든 프로젝트를 직접 서비스해보고 싶었습니다.**  
  그 동안 해 온 프로젝트 역시 배포를 해왔지만, 실질적으로 지인이 아닌 유저들이 사용하는 것을 확인 할 수 없었습니다.
  누군가 제 프로젝트를 실질적으로 이용하는 것을 확인하면 보다 더 유지 및 보수에 대해 적극적으로 임할 것 같았기에
  사람들이 사용 할 수 있는 라이브러리를 배포하고, 해당 라이브러리를 검색에 노출 시키는 쪽으로 방향을 잡았습니다.
  이를 위해 SEO 및 홍보 수단에 대해 기획 시 고민하게 되었습니다.

### react-web-editor-website

- **사용자들에게 라이브러리의 기능을 직접 눈으로 보여주고 싶었습니다.**  
  UI를 다루는 라이브러리이다 보니 직접적으로 사용자들이 테스트해보고, 눈으로 확인하는 공간이 필요하다고 생각했습니다.
  codesandbox를 이용해 example은 올려놨지만, 보다 더 상세하게 테스트 할 수 있는 페이지를 만들고자 했습니다.
  또한 검색을 통해 유입이 늘어나기를 바랐습니다.
  따라서 SEO를 신경쓴 react-web-editor의 사이트를 만들고자 기획하게 되었습니다.

## 📃 Stack

### react-web-editor
<p align="center"> [react, typescript, webpack, styled-components, ESlint] </p>
<p align="center"> 사용자의 확장성을 고려하여 최소한의 디펜던시를 유지하고자 했습니다. </p>

- **typescript**  
  이번 프로젝트에서 필수적이라고 생각했습니다.
  타입을 지정해주지 않는다면 사용자는 매번 명세서를 들여다봐야 할 것이기에 사용성이 떨어질 것이라고 생각했습니다.

- **webpack**  
  빌드를 가볍고 심플하게 가져가면서, 작업환경을 스스로 커스텀 하기 위해서 사용했습니다.

### react-web-editor-website
<p align="center"> [react, next.js, typescript, storybook, styled-components, ESlint] </p>

- **next.js**  
  이번 프로젝트에서 많이 고심했던 것은 어떻게 해야 다른 사용자들에게 프로젝트가 노출 될 수 있을지에 대한 것이었습니다.
  next.js의 경우 SSR 이기에 크롤링이 보다 더 수월하여, SEO에 더 좋은 효율을 보인다고 알고 있습니다.
  사실 적게는 싱글페이지, 많아야 2 페이지 정도를 생각했던 터라 아주 많은 차이가 있을것이라고 생각하지는 않았지만,
  그래도 SEO가 제대로 되는 사이트를 구현할 가능성이 높을 next.js를 사용했습니다.

- **storybook**  
  사실 이것은 react-web-editor를 개발하며 아쉬움에 도입한 라이브러리입니다.
  라이브러리 개발 과정에서 storybook을 미리 차용했다면 훨씬 더 분할화 된 작업 및 컴포넌트들을 효율적으로 테스트할 수 있었겠다는 아쉬움을 느꼈습니다.
  하지만 이미 프로젝트가 어느정도 첫번째 마무리가 되어가고 있는 상태였기에 다음 프로젝트에 차용하는 것으로 마음을 접었었습니다.
  재 사용이 많이 되는 작업을 진행한 것이 아니라 아쉬움은 남지만, 컴포넌트 단위대로 눈으로 직접 확인 할 수 있어서 작업할 때에 편리했습니다.

## 🔍 Issues
- **event handling**  
  global 혹은 window에 이벤트 핸들러를 거는 것은 꼼꼼히 검토되어야 한다고 생각합니다.
  개인적으로는 최대한 바운더리를 좁혀서 꼭 필요한 영역에만 이벤트를 거는 것을 지향하는 편이지만,
  이번 프로젝트는 전체 화면에서 resize, drag등의 기능을 지원해야 하기에 불가피하게 window 객체에 이벤트를 걸어줘야만 했습니다.
  따라서 이벤트가 물리지 않도록 핸들링 하는 부분이 까다로웠던 것 같습니다.

  server side rendering에서도 사용 될 수 있도록, window 객체가 사용되는 부분은 useEffect 내부로 옮겨주었고,
  많은 기능이 중첩 된 컴포넌트들은 이벤트가 활성화 되는 부분을 view 적인 측면에서 분리했습니다.
  현재도 많은 프로젝트를 한번에 움직이거나 할때의 엣지케이스가 존재하지만 추후 보완할 예정입니다.

- **SEO**  
  이번 프로젝트, 특히 react-web-editor-introduce 즉 데모 페이지를 작업하면서, SEO를 기본적으로 신경쓰려고 노력했습니다.
  UI기능을 담당하는 라이브러리 특성 상 눈으로 보여야 다운로드 수가 증가할 수 있을 것이라 생각했기 때문입니다.

  google에서 crawling을 위해 요구하는 robot.txt, sitemap.xml 들을 집어 넣고, meta description 및 웹에서 요구하는 표준 조건들을 라이트하우스 등을 이용해 맞추기 위해 노력했습니다.
  구글 크롤러 특성 상 바로바로 크롤링을 하지 않기에 결과를 바로 확인 할 수 없어서 답답한 마음이 들었지만, 배포 이틀차 구글이 크롤링을 한 것을 확인했습니다.
  현재 (2021/08/22) 기준 react-web-editor라는 검색어로 검색 시 2번째 페이지, react web editor라는 검색어로 검색 시 3번째 페이지에 올라온 것을 확인했습니다.
  또한 라이브러리의 npm 다운로드 기록은 1주일 기준 최대 500명대까지 기록했었습니다.

  아직은 기본적인 부분만 핸들링이 되어있어 더욱 상위 랭크에 잡히지는 못했지만, 추후 업데이트를 통해 실질적으로 1페이지에 올라올 수 있도록 노력할 예정입니다.

- **mono repository의 필요성**  
  라이브러리 배포 이후 웹페이지 작업을 시작할 때에, 원래 기대했던 방식과 라이브러리가 다르게 작동하는 상황들이 발생했습니다.

  테스트를 거친 이후에 배포를 했음에도 불구하고, 라이브러리는 client side rendering 을 기반으로 만들어진 반면 웹 페이지는 server side rendering 을 지원하는 next js를 이용해 개발되었기 때문이었습니다.
  그 뿐만 아니라, 라이브러리 자체적으로는 잘 작동함에도 불구하고 실제 적용이 되지 않는 사례들도 발생했습니다.

  매번 기능 test -> 라이브러리를 재 배포 -> 다시 install 의 과정을 반복하는 것은 작업 능률을 상당히 떨어트렸습니다.
  최초에 mono repository에서 작업을 했더라면 이런 dependency의 어려움 및 충돌과정을 훨씬 줄일 수 있었을 것 같습니다.
  단순히 import만 해와도 기능 테스트가 가능하고, 그 과정에서 많은 시간을 단축할 수 있기 때문입니다.
  따라서 앞으로는 적극적으로 mono repository를 도입하는 것을 고려해보고자 합니다.

- **올바른 useCallback 및 최적화의 사용법**  
  useCallback, useMemo, react.memo와 같은 최적화를 위한 도구들은 신중하게 사용되어야 하는 것으로 알고 있습니다.
  사용 될 필요가 없는데도 사용 된 다면 최적화에서 얻는 이점보다 코스트가 더 많을수도 있기 때문입니다.

  이번 프로젝트 초기에는 useCallback등을 이용해서 래핑된 핸들러들이 상당히 많았습니다.
  하지만 추후 리팩토링 과정에서, 컴포넌트 및 핸들러들이 더 적절한 위치를 찾아가자 useCallback을 사용할 필요가 없는 핸들러들이 나타났습니다.
  최적화는 물론 되어야 하지만, 최적화를 시도하기 전에 내가 적절한 위치에 코드를 위치했는지, 더 개선할 수 있는 방법이 없는지 먼저 고민해보아야 한다는 것을 절실히 깨달았습니다.

- **css 선택의 신중함**  
  프로젝트 특성상 동적으로 생성될 스타일들을 바로 바로 component에 적용해줬어야 했습니다.
  이를 style attribute 안에 꽂아주는 것 보다 styled component의 props로 주고, 그 안에서 attribute로 처리해 주는 것이 가독성 측면 상 이점이라 생각해 styled-compoenents를 적용했습니다.
  하지만 최초 기획보다 작업의 크기를 늘려가면서, styled-components와 궁합이 안맞는 부분들이 있었습니다.
  예시로, 웹폰트를 미리 다운로드를 해와야 할 필요가 있었는데, styled-components의 global style로 웹폰트를 적용하는 것을 지양하라는 styled-components 측의 권고사항이 있었습니다.
  따라서 피치못하게 react-helmet-async를 이용하여 웹폰트를 강제적으로 head에 꽂아줘야만 했습니다.
  라이브러리가 app을 아닌 각 component와 hook을 export 해주기에, global style을 이용한 테마 관리를 못하는 단점도 있었습니다.
  추후 프로젝트에서는 조금 더 신중하게 css를 선택해야겠다고 결심했습니다.

## 💭 Comments  
- **직접 서비스를 제공하는 재미를 깨달았습니다.**  
  이전까지 프로젝트에서는 서비스를 구현하는 것에 재미의 초점이 맞추어져 있었습니다.
  이번 프로젝트는 그것과는 다르게, 실질적으로 제가 구현 한 것들의 결과물을 지켜보는 점에서도 재미를 느꼈습니다.
  특히 구글이 크롤링을 한 결과물을 보여줬을때, 그리고 검색 순위가 변하는 것을 보는 것은 정말 짜릿했습니다.
  매일 매일 그날의 라이브러리 다운로드 수를 체크하는 것 역시 마찬가지입니다.
  이런 일련의 과정들을 통해 지속적으로 라이브러리를 업데이트하고, 웹사이트를 업데이트 하는데에 원동력을 얻었습니다.
  실제로 회사에 들어가서 회사의 프로덕트를 개발한다면 이런 기분을 느낄 수 있을 것 같아 행복합니다.

- **view를 담당하는 페이지 제작 경험이 낯설었습니다.**  
  그동안 개발한 페이지들은 어떤 프로덕트가 존재하면, 그것의 가독성이나 시각적 미를 더하기 위해 css를 작성했습니다.
  하지만 이번 react-web-editor-introduce 페이지를 개발하면서는 오로지 소개를 위한 view 페이지를 작업한다는 점이 색달랐습니다.
  평소 컴포넌트를 최대한 쪼개고 나누어서 작업한 후 재사용하는 것을 좋아하는 편인데, text 및 style만 다른 코드들이 계속 생겨나서 재사용 하거나 나누기 애매한 부분들이 생겨나서 스트레스도 받았습니다.
  나름대로 일련의 규칙을 가지고 작성하려 했으나, 개선 방법은 계속 찾아볼 예정입니다.
  소개를 위해 어떻게 해야 더 내용이 잘 들어오고 가독성 있게 보일까 생각하며 사이즈를 계속 변경하고, 더 적극적으로 다른 사람의 눈으로 작업물을 바라보려고 하는 것들이 즐거웠습니다.
