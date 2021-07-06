import{o as n,c as e,a as s,b as l}from"./app.b84b895a.js";const a='{"title":"지원하는 기능들","description":"","frontmatter":{"title":"지원하는 기능들"},"headers":[{"level":2,"title":"NPM을 이용한 디펜던시 import 그리고 Pre-Bundling","slug":"npm-dependency-resolving-and-pre-building"},{"level":2,"title":"Hot Module Replacement","slug":"hot-module-replacement"},{"level":2,"title":"TypeScript","slug":"typescript"},{"level":3,"title":"Client Types","slug":"client-types"},{"level":2,"title":"Vue","slug":"vue"},{"level":2,"title":"JSX","slug":"jsx"},{"level":2,"title":"CSS","slug":"css"},{"level":3,"title":"CSS @import 그리고 URL 재정의(Rebasing)","slug":"import-inlining-and-rebasing"},{"level":3,"title":"PostCSS","slug":"postcss"},{"level":3,"title":"CSS Modules","slug":"css-modules"},{"level":3,"title":"CSS Pre-processors","slug":"css-pre-processors"},{"level":2,"title":"정적 에셋","slug":"static-assets"},{"level":2,"title":"JSON","slug":"json"},{"level":2,"title":"Glob Import","slug":"glob-import"},{"level":2,"title":"Web Assembly","slug":"web-assembly"},{"level":2,"title":"Web Workers","slug":"web-workers"},{"level":2,"title":"빌드 최적화","slug":"build-optimizations"},{"level":3,"title":"CSS 코드 분리","slug":"css-code-splitting"},{"level":3,"title":"Preload Directives Generation","slug":"preload-directives-generation"},{"level":3,"title":"Async Chunk Loading Optimization","slug":"async-chunk-loading-optimization"}],"relativePath":"guide/features.md","lastUpdated":1625605013368}',t={},o=s("h1",{id:"features"},[s("a",{class:"header-anchor",href:"#features","aria-hidden":"true"},"#"),l("지원하는 기능들")],-1),r=s("p",null,"기본적으로 vite는 여타 정적 파일 서버와 크게 다르지 않습니다. 다만, vite는 네이티브 ESM 말고도 기존 번들러에서 제공하던 기능을 대부분 지원한다는 차이점이 있습니다.",-1),c=s("h2",{id:"npm-dependency-resolving-and-pre-building"},[s("a",{class:"header-anchor",href:"#npm-dependency-resolving-and-pre-building","aria-hidden":"true"},"#"),l("NPM을 이용한 디펜던시 "),s("code",null,"import"),l("그리고 Pre-Bundling")],-1),p=s("p",null,"다음 코드는 네이티브 ES에서 정상적으로 실행되지 않습니다:",-1),i=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"import"),l(),s("span",{class:"token punctuation"},"{"),l(" someMethod "),s("span",{class:"token punctuation"},"}"),l(),s("span",{class:"token keyword"},"from"),l(),s("span",{class:"token string"},"'my-dep'"),l("\n")])])],-1),u=s("p",null,"모듈의 위치를 찾을 수 없기 때문인데, vite는 다음을 기준으로 모듈을 가져오기 때문에 위 코드 역시 정상적으로 실행됩니다.",-1),d=s("ol",null,[s("li",null,[s("p",null,[l("Vite를 통해 ESM 스타일로 "),s("a",{href:"./dep-pre-bundling.html"},"미리 번들링 된"),l(" CommonJS 및 UMD* 모듈. 이 과정은 "),s("a",{href:"https://esbuild.github.io/",target:"_blank",rel:"noopener noreferrer"},"Esbuild"),l("를 통해 이루어지며, JavaScript 기반의 다른 번들러보다 빠른 Cold-starting이 가능합니다. (* Universal Module Definition: CommonJS와 AMD 스타일의 모듈을 둘 다 지원하는 모듈 형태)")])]),s("li",null,[s("p",null,[s("code",null,"/node_modules/.vite/my-dep.js?v=f3sf2ebd"),l("와 같이 URL을 이용해 ESM을 지원하는 브라우저에서 모듈을 가져올 수 있도록 "),s("code",null,"import"),l(" 구문을 수정.")])])],-1),k=s("p",null,[l("참고로, "),s("strong",null,"디펜던시는 반드시 캐시됩니다.")],-1),m=s("p",null,[l("vite는 HTTP 헤더를 이용해 요청한 디펜던시를 브라우저에서 캐싱하도록 합니다. 만약 디펜던시의 수정 또는 디버깅이 필요하다면 "),s("a",{href:"./dep-pre-bundling.html#browser-cache"},"여기"),l("를 참고해주세요.")],-1),g=s("h2",{id:"hot-module-replacement"},[s("a",{class:"header-anchor",href:"#hot-module-replacement","aria-hidden":"true"},"#"),l("Hot Module Replacement")],-1),h=s("p",null,[l("vite는 이용해 네이티브 ESM 기반의 "),s("a",{href:"./api-hmr.html"},"HMR API"),l("을 제공합니다. HRM을 이용하는 프레임워크는 애플리케이션을 다시 시작하지 않고도 일부 컨텐츠만을 갱신할 수 있다는 장점이 있는데, vite는 "),s("a",{href:"https://github.com/vitejs/vite/tree/main/packages/plugin-vue",target:"_blank",rel:"noopener noreferrer"},"Vue Single File Components"),l(", "),s("a",{href:"https://github.com/vitejs/vite/tree/main/packages/plugin-react-refresh",target:"_blank",rel:"noopener noreferrer"},"React Fast Refresh"),l(" 또는 "),s("a",{href:"https://github.com/JoviDeCroock/prefresh/tree/main/packages/vite",target:"_blank",rel:"noopener noreferrer"},"@prefresh/vite"),l("과 같은 First-party HMR* 모듈을 제공하고 있습니다. (* Vite에서 직접 제공하는 HMR 모듈)")],-1),f=s("p",null,[l("물론, "),s("a",{href:"./"},[s("code",null,"@vitejs/create-app")]),l("에서 제공하는 템플릿 안에는 HMR 모듈이 포함되어 있기 때문에 굳이 위와 같은 방법을 따르지 않아도 됩니다.")],-1),b=s("h2",{id:"typescript"},[s("a",{class:"header-anchor",href:"#typescript","aria-hidden":"true"},"#"),l("TypeScript")],-1),v=s("p",null,[l("vite는 "),s("code",null,".ts"),l(" 파일에 대한 컴파일링 및 Import 역시 지원합니다.")],-1),y=s("p",null,[l("단, 타입 체킹은 오로지 IDE 또는 빌드 프로세스에만 의존하며, Vite 자체에서는 "),s("code",null,".ts"),l(" 파일에 대한 "),s("strong",null,"타입 체킹 작업을 진행하지 않습니다"),l(". 타입 체킹이 필요하다면 필요하다면 "),s("code",null,"tsc --noEmit"),l("*을 빌드 스크립트에 넣어주세요. 만약 "),s("code",null,"*.vue"),l(" 소스 코드를 작성중이라면, "),s("code",null,"vue-tsc"),l("를 설치해 "),s("code",null,"vue-tsc --noEmit"),l("을 빌드 스크립트에 넣어서 타입 체킹을 하도록 설정할 수 있습니다. (* "),s("code",null,"--noEmit"),l(": 컴파일링 없이 타입 체킹만을 수행하는 옵션)")],-1),S=s("p",null,[l("Vite의 TypeScript 컴파일링은 "),s("a",{href:"https://github.com/evanw/esbuild",target:"_blank",rel:"noopener noreferrer"},"Esbuild"),l("를 이용하며, TypeScript 소스 코드를 JavaScript 소스 코드로 변환하는 작업에 대해 "),s("code",null,"tsc"),l(" 대비 약 20~30배 정도 빠른 퍼포먼스를 보이고 있습니다. (HMR은 50ms 미만)")],-1),w=s("p",null,[l("이렇게 "),s("code",null,"esbuild"),l("는 타입의 정보 없이 트랜스파일링만 진행하기에, 각 모듈이 안전한지 확인(경고)이 필요하다면 이를 활성화 할 수 있도록 "),s("code",null,"tsconfig.json"),l(" 파일 내 "),s("code",null,"compilerOptions"),l(" 설정을 "),s("code",null,'"isolatedModules": true'),l("*와 같이 구성해줘야 합니다. (* "),s("code",null,"isolatedModules"),l(": "),s("a",{href:"https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API#a-simple-transform-function",target:"_blank",rel:"noopener noreferrer"},"ts.transpileModule"),l("과 같은 API를 사용해 각각의 파일로 트랜스파일링 시 해당 모듈이 안전한지 여부를 알려주는 옵션 ("),s("a",{href:"https://www.typescriptlang.org/tsconfig#isolatedModules",target:"_blank",rel:"noopener noreferrer"},"Docs: Isolated Modules - isolatedModules"),l("))")],-1),j=s("h3",{id:"client-types"},[s("a",{class:"header-anchor",href:"#client-types","aria-hidden":"true"},"#"),l("Client Types")],-1),C=s("p",null,[l("vite는 기본적으로 Node.js API 기반의 타입 시스템을 차용하고 있습니다. 따라서 Client-side의 환경을 위해 Shim을 구성하고자 한다면, "),s("code",null,"d.ts"),l(" 선언 파일을 추가해주세요.")],-1),_=s("div",{class:"language-typescript"},[s("pre",null,[s("code",null,[s("span",{class:"token comment"},'/// <reference types="vite/client" />'),l("\n")])])],-1),I=s("p",null,[l("또는, "),s("code",null,"tsconfig"),l(" 내 "),s("code",null,"compilerOptions.types"),l(" 옵션에 "),s("code",null,"vite/client"),l("를 명시해 줄 수도 있습니다.")],-1),M=s("p",null,"이를 통해 다음에 대한 Shim이 제공됩니다.",-1),x=s("ul",null,[s("li",null,[s("code",null,".svg"),l("와 같은 에셋")]),s("li",null,[l("Vite를 통해 주입되는 "),s("code",null,[l("import."),s("wbr"),l("meta.env")]),l("에 명시된 "),s("a",{href:"./env-and-mode.html#env-variables"},"환경 변수"),l(" 타입들")]),s("li",null,[s("code",null,[l("import."),s("wbr"),l("meta.hot")]),l("에 명시된 "),s("a",{href:"./api-hmr.html"},"HMR API"),l(" 타입들")])],-1),R=s("h2",{id:"vue"},[s("a",{class:"header-anchor",href:"#vue","aria-hidden":"true"},"#"),l("Vue")],-1),P=s("p",null,"vite는 기본적으로 Vue를 지원하고 있습니다.",-1),A=s("ul",null,[s("li",null,[l("Vue 3 SFC : "),s("a",{href:"https://github.com/vitejs/vite/tree/main/packages/plugin-vue",target:"_blank",rel:"noopener noreferrer"},"@vitejs/plugin-vue")]),s("li",null,[l("Vue 3 JSX : "),s("a",{href:"https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx",target:"_blank",rel:"noopener noreferrer"},"@vitejs/plugin-vue-jsx")]),s("li",null,[l("Vue 2 : "),s("a",{href:"https://github.com/underfin/vite-plugin-vue2",target:"_blank",rel:"noopener noreferrer"},"underfin/vite-plugin-vue2")])],-1),D=s("h2",{id:"jsx"},[s("a",{class:"header-anchor",href:"#jsx","aria-hidden":"true"},"#"),l("JSX")],-1),V=s("p",null,[s("code",null,".jsx"),l("와 "),s("code",null,".tsx"),l(" 역시 사용이 가능합니다. 마찬가지로 "),s("a",{href:"https://esbuild.github.io",target:"_blank",rel:"noopener noreferrer"},"ESBuild"),l("를 이용해 컴파일링하며, React 16 스타일의 JSX를 기본적으로 지원합니다. React 17 스타일의 JSX는 "),s("a",{href:"https://github.com/evanw/esbuild/issues/334",target:"_blank",rel:"noopener noreferrer"},"현재 작업 중에 있습니다"),l(".")],-1),W=s("p",null,[l("기존에 Vue를 사용했던 개발자들은 Vue 3에서 제공하고 있는 API(HRM, 글로벌 컴포넌트, 디렉티브 및 슬롯 등)를 위해 "),s("a",{href:"https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx",target:"_blank",rel:"noopener noreferrer"},"@vitejs/plugin-vue-jsx"),l("를 사용해야 합니다.")],-1),E=s("p",null,[l("물론 React나 Vue를 사용하지 않는다 해도, "),s("a",{href:"/config/#esbuild"},[s("code",null,"esbuild"),l(" 옵션")]),l("을 이용해 "),s("code",null,"jsxFactory"),l("나 "),s("code",null,"jsxFragment"),l("를 커스터마이징 할 수 있습니다. Preact를 예로 들어보자면 다음과 같습니다.")],-1),U=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token comment"},"// vite.config.js"),l("\n"),s("span",{class:"token keyword"},"export"),l(),s("span",{class:"token keyword"},"default"),l(),s("span",{class:"token punctuation"},"{"),l("\n  esbuild"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"{"),l("\n    jsxFactory"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token string"},"'h'"),s("span",{class:"token punctuation"},","),l("\n    jsxFragment"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token string"},"'Fragment'"),l("\n  "),s("span",{class:"token punctuation"},"}"),l("\n"),s("span",{class:"token punctuation"},"}"),l("\n")])])],-1),L=s("p",null,[l("자세한 사항은 "),s("a",{href:"https://esbuild.github.io/content-types/#jsx",target:"_blank",rel:"noopener noreferrer"},"esbuild 문서"),l("를 참고해주세요.")],-1),J=s("p",null,[l("참고로, Vite에서만 제공되는 옵션인 "),s("code",null,"jsxInject"),l("를 이용해 JSX에 대한 헬퍼를 사용할 수도 있습니다.")],-1),G=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token comment"},"// vite.config.js"),l("\n"),s("span",{class:"token keyword"},"export"),l(),s("span",{class:"token keyword"},"default"),l(),s("span",{class:"token punctuation"},"{"),l("\n  esbuild"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"{"),l("\n    jsxInject"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token template-string"},[s("span",{class:"token template-punctuation string"},"`"),s("span",{class:"token string"},"import React from 'react'"),s("span",{class:"token template-punctuation string"},"`")]),l("\n  "),s("span",{class:"token punctuation"},"}"),l("\n"),s("span",{class:"token punctuation"},"}"),l("\n")])])],-1),F=s("h2",{id:"css"},[s("a",{class:"header-anchor",href:"#css","aria-hidden":"true"},"#"),l("CSS")],-1),H=s("p",null,[s("code",null,".css"),l(" 파일을 Import 할 때, 기본적으로 HRM을 위해 "),s("code",null,"<style>"),l(" 태그로 변환되어 불러와지게 됩니다. 물론 String 타입의 모듈로 Import할 수도 있구요.")],-1),z=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"import"),l(" style "),s("span",{class:"token keyword"},"from"),l(),s("span",{class:"token string"},"'./style.css'"),l("\n\nconsole"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"log"),s("span",{class:"token punctuation"},"("),l("style"),s("span",{class:"token punctuation"},")"),l(),s("span",{class:"token comment"},"// 정의한 CSS를 문자열로 가져옵니다."),l("\n")])])],-1),B=s("h3",{id:"import-inlining-and-rebasing"},[s("a",{class:"header-anchor",href:"#import-inlining-and-rebasing","aria-hidden":"true"},"#"),l("CSS "),s("code",null,"@import"),l("그리고 URL 재정의(Rebasing)")],-1),N=s("p",null,[l("vite는 "),s("code",null,"postcss-import"),l("를 이용해 CSS의 "),s("code",null,"@import"),l("를 처리합니다. 또한, CSS "),s("code",null,"url()"),l("로 참조되는 모든 리소스들(다른 디렉터리에 존재한다 해도)에 대해 별다른 설정 없이 자동으로 Base를 맞추어주는 재정의(Rebasing) 작업 역시 진행해주고 말이죠.")],-1),O=s("p",null,[l("별칭을 이용한 "),s("code",null,"@import"),l("도 지원하며, URL 재정의나 별칭은 CSS 말고도 Sass와 Less에서도 "),s("a",{href:"#css-pre-processors"},"사용이 가능합니다"),l(".")],-1),T=s("h3",{id:"postcss"},[s("a",{class:"header-anchor",href:"#postcss","aria-hidden":"true"},"#"),l("PostCSS")],-1),X=s("p",null,[l("만약 프로젝트에 "),s("a",{href:"https://github.com/postcss/postcss-load-config",target:"_blank",rel:"noopener noreferrer"},"PostCSS 설정 파일"),l("이 존재한다면, vite는 이를 이용해 모든 CSS 파일에 해당 설정을 적용합니다.")],-1),q=s("h3",{id:"css-modules"},[s("a",{class:"header-anchor",href:"#css-modules","aria-hidden":"true"},"#"),l("CSS Modules")],-1),K=s("p",null,[s("code",null,".module.css"),l(" 확장자로 끝나는 모든 CSS 파일들은 "),s("a",{href:"https://github.com/css-modules/css-modules",target:"_blank",rel:"noopener noreferrer"},"CSS 모듈 파일"),l("로 취급되며, 일반적인 JavaScript 모듈처럼 사용이 가능합니다.")],-1),Q=s("div",{class:"language-css"},[s("pre",null,[s("code",null,[s("span",{class:"token comment"},"/* example.module.css */"),l("\n"),s("span",{class:"token selector"},".red"),l(),s("span",{class:"token punctuation"},"{"),l("\n  "),s("span",{class:"token property"},"color"),s("span",{class:"token punctuation"},":"),l(" red"),s("span",{class:"token punctuation"},";"),l("\n"),s("span",{class:"token punctuation"},"}"),l("\n")])])],-1),Y=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"import"),l(" classes "),s("span",{class:"token keyword"},"from"),l(),s("span",{class:"token string"},"'./example.module.css'"),l("\ndocument"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"getElementById"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'foo'"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),l("className "),s("span",{class:"token operator"},"="),l(" classes"),s("span",{class:"token punctuation"},"."),l("red\n")])])],-1),Z=s("p",null,[l("참고로, CSS 모듈에 대한 동작 방식을 입맛대로 수정할 수 있습니다. "),s("a",{href:"/config/#css-modules"},[s("code",null,"css.modules"),l(" 옵션")]),l(" 옵션을 참고해주세요.")],-1),$=s("p",null,[l("가령 "),s("code",null,"css.modules.localsConvention"),l(" 옵션을 camelCase로 설정하게 되면("),s("code",null,"localsConvention: 'camelCaseOnly'"),l("), 아래와 같이 Import 할 수 있게 됩니다.")],-1),nn=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token comment"},"// .apply-color -> applyColor"),l("\n"),s("span",{class:"token keyword"},"import"),l(),s("span",{class:"token punctuation"},"{"),l(" applyColor "),s("span",{class:"token punctuation"},"}"),l(),s("span",{class:"token keyword"},"from"),l(),s("span",{class:"token string"},"'./example.module.css'"),l("\ndocument"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"getElementById"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'foo'"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),l("className "),s("span",{class:"token operator"},"="),l(" applyColor\n")])])],-1),en=s("h3",{id:"css-pre-processors"},[s("a",{class:"header-anchor",href:"#css-pre-processors","aria-hidden":"true"},"#"),l("CSS Pre-processors")],-1),sn=s("p",null,[l("vite는 모던 브라우저만을 타깃으로 하기에, 표준을 준수하도록 "),s("a",{href:"https://github.com/jonathantneal/postcss-nesting",target:"_blank",rel:"noopener noreferrer"},"postcss-nesting"),l("과 같은 CSSWG 초안을 구현한 PostCSS 플러그인과 함께 네이티브 CSS 변수를 사용하도록 권고하고 있습니다.")],-1),ln=s("p",null,[l("다시 말해, vite는 기본적으로 "),s("code",null,".scss"),l(", "),s("code",null,".sass"),l(", "),s("code",null,".less"),l(", "),s("code",null,".styl"),l(", "),s("code",null,".stylus"),l("와 CSS 전처리기가 필요한 파일을 지원하지 않습니다. 다만 필요한 경우 어렵지 않게 설치해 바로 사용할 수 있습니다.")],-1),an=s("div",{class:"language-bash"},[s("pre",null,[s("code",null,[s("span",{class:"token comment"},"# .scss 그리고 .sass"),l("\n"),s("span",{class:"token function"},"npm"),l(),s("span",{class:"token function"},"install"),l(" -D sass\n\n"),s("span",{class:"token comment"},"# .less"),l("\n"),s("span",{class:"token function"},"npm"),l(),s("span",{class:"token function"},"install"),l(" -D "),s("span",{class:"token function"},"less"),l("\n\n"),s("span",{class:"token comment"},"# .styl 그리고 .stylus"),l("\n"),s("span",{class:"token function"},"npm"),l(),s("span",{class:"token function"},"install"),l(" -D stylus\n")])])],-1),tn=s("p",null,[l("Vue 싱글 파일 컴포넌트를 사용하는 경우, 설치 후 별 다른 설정 없이도 "),s("code",null,'<style lang="sass">'),l("와 같은 CSS 전처리기를 바로 사용할 수 있습니다.")],-1),on=s("p",null,[l("Sass나 Less에서의 "),s("code",null,"@import"),l(" 별칭 또한 Vite에서 사용이 가능합니다. "),s("code",null,"url()"),l("로 참조되는 파일들 역시 자동으로 올바른 URL을 갖도록 재정의되고 말이죠.")],-1),rn=s("p",null,[l("다만 Stylus의 경우 API 충돌로 인해 Vite의 "),s("code",null,"@import"),l(" 별칭과 URL 재정의 기능이 제공되지 않습니다.")],-1),cn=s("p",null,[l("물론 전처리된 CSS 역시 "),s("code",null,"style.module.scss"),l("와 같이 CSS 모듈처럼 사용이 가능합니다. 똑같이 파일 확장자에 "),s("code",null,".module"),l("만 붙여주세요.")],-1),pn=s("h2",{id:"static-assets"},[s("a",{class:"header-anchor",href:"#static-assets","aria-hidden":"true"},"#"),l("정적 에셋")],-1),un=s("p",null,"정적(Static) 에셋을 Import 하는 경우, 이에 대한 Public URL이 반환됩니다.",-1),dn=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"import"),l(" imgUrl "),s("span",{class:"token keyword"},"from"),l(),s("span",{class:"token string"},"'./img.png'"),l("\ndocument"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"getElementById"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'hero-img'"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),l("src "),s("span",{class:"token operator"},"="),l(" imgUrl\n")])])],-1),kn=s("p",null,"URL 쿼리를 이용해 에셋을 가져올 때 어떻게 이를 가져올 것인지 명시할 수도 있습니다.",-1),mn=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token comment"},"// URL로 에셋 가져오기"),l("\n"),s("span",{class:"token keyword"},"import"),l(" assetAsURL "),s("span",{class:"token keyword"},"from"),l(),s("span",{class:"token string"},"'./asset.js?url'"),l("\n")])])],-1),gn=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token comment"},"// String 타입으로 에셋 가져오기"),l("\n"),s("span",{class:"token keyword"},"import"),l(" assetAsString "),s("span",{class:"token keyword"},"from"),l(),s("span",{class:"token string"},"'./shader.glsl?raw'"),l("\n")])])],-1),hn=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token comment"},"// 웹 워커 가져오기"),l("\n"),s("span",{class:"token keyword"},"import"),l(" Worker "),s("span",{class:"token keyword"},"from"),l(),s("span",{class:"token string"},"'./worker.js?worker'"),l("\n")])])],-1),fn=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token comment"},"// Base64 포맷의 문자열 형태로 웹 워커 가져오기"),l("\n"),s("span",{class:"token keyword"},"import"),l(" InlineWorker "),s("span",{class:"token keyword"},"from"),l(),s("span",{class:"token string"},"'./worker.js?worker&inline'"),l("\n")])])],-1),bn=s("p",null,[l("좀 더 자세히 알고 싶다면, "),s("a",{href:"./assets.html"},"정적 에셋 핸들링하기"),l(" 섹션을 참고해주세요.")],-1),vn=s("h2",{id:"json"},[s("a",{class:"header-anchor",href:"#json","aria-hidden":"true"},"#"),l("JSON")],-1),yn=s("p",null,"JSON 파일은 바로 Import가 가능합니다. 물론, 가져올 필드를 지정할 수도 있습니다.",-1),Sn=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token comment"},"// 객체 형태로 가져오기"),l("\n"),s("span",{class:"token keyword"},"import"),l(" json "),s("span",{class:"token keyword"},"from"),l(),s("span",{class:"token string"},"'./example.json'"),l("\n"),s("span",{class:"token comment"},"// 필드를 지정해 가져오기"),l("\n"),s("span",{class:"token keyword"},"import"),l(),s("span",{class:"token punctuation"},"{"),l(" field "),s("span",{class:"token punctuation"},"}"),l(),s("span",{class:"token keyword"},"from"),l(),s("span",{class:"token string"},"'./example.json'"),l("\n")])])],-1),wn=s("h2",{id:"glob-import"},[s("a",{class:"header-anchor",href:"#glob-import","aria-hidden":"true"},"#"),l("Glob Import")],-1),jn=s("p",null,[l("vite는 "),s("code",null,[l("import."),s("wbr"),l("meta.glob")]),l(" 함수를 이용해 여러 모듈을 한 번에 가져올 수 있도록 지원하고 있습니다. 이 때, Glob 패턴*을 이용합니다. (* "),s("a",{href:"https://en.wikipedia.org/wiki/Glob_(programming)",target:"_blank",rel:"noopener noreferrer"},"Glob 패턴 Wikipedia"),l(")")],-1),Cn=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"const"),l(" modules "),s("span",{class:"token operator"},"="),l(),s("span",{class:"token keyword"},"import"),s("span",{class:"token punctuation"},"."),l("meta"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"glob"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'./dir/*.js'"),s("span",{class:"token punctuation"},")"),l("\n")])])],-1),_n=s("p",null,"위 코드는 아래와 같이 변환됩니다.",-1),In=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token comment"},"// Vite를 통해 변환된 코드"),l("\n"),s("span",{class:"token keyword"},"const"),l(" modules "),s("span",{class:"token operator"},"="),l(),s("span",{class:"token punctuation"},"{"),l("\n  "),s("span",{class:"token string"},"'./dir/foo.js'"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),l(),s("span",{class:"token operator"},"=>"),l(),s("span",{class:"token keyword"},"import"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'./dir/foo.js'"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},","),l("\n  "),s("span",{class:"token string"},"'./dir/bar.js'"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),l(),s("span",{class:"token operator"},"=>"),l(),s("span",{class:"token keyword"},"import"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'./dir/bar.js'"),s("span",{class:"token punctuation"},")"),l("\n"),s("span",{class:"token punctuation"},"}"),l("\n")])])],-1),Mn=s("p",null,[l("이렇게 Import한 "),s("code",null,"modules"),l("를 순회하여 각 모듈에 접근할 수 있게 됩니다.")],-1),xn=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"for"),l(),s("span",{class:"token punctuation"},"("),s("span",{class:"token keyword"},"const"),l(" path "),s("span",{class:"token keyword"},"in"),l(" modules"),s("span",{class:"token punctuation"},")"),l(),s("span",{class:"token punctuation"},"{"),l("\n  modules"),s("span",{class:"token punctuation"},"["),l("path"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"then"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"("),s("span",{class:"token parameter"},"mod"),s("span",{class:"token punctuation"},")"),l(),s("span",{class:"token operator"},"=>"),l(),s("span",{class:"token punctuation"},"{"),l("\n    console"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"log"),s("span",{class:"token punctuation"},"("),l("path"),s("span",{class:"token punctuation"},","),l(" mod"),s("span",{class:"token punctuation"},")"),l("\n  "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),l("\n"),s("span",{class:"token punctuation"},"}"),l("\n")])])],-1),Rn=s("p",null,[l("기본적으로 "),s("code",null,[l("import."),s("wbr"),l("meta.glob")]),l(" 함수를 이용하면, Dynamic Import를 이용해 Lazy하게 파일의 청크를 가져옵니다. 만약 동적(Dynamic)으로 Import하는 것이 아닌 직접 모듈을 가져오고자 한다면, "),s("code",null,[l("import."),s("wbr"),l("meta.globEager")]),l(" 함수를 이용해주세요.")],-1),Pn=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"const"),l(" modules "),s("span",{class:"token operator"},"="),l(),s("span",{class:"token keyword"},"import"),s("span",{class:"token punctuation"},"."),l("meta"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"globEager"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'./dir/*.js'"),s("span",{class:"token punctuation"},")"),l("\n")])])],-1),An=s("p",null,"위 코드는 아래와 같이 변환됩니다.",-1),Dn=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token comment"},"// Vite를 통해 변환된 코드"),l("\n"),s("span",{class:"token keyword"},"import"),l(),s("span",{class:"token operator"},"*"),l(),s("span",{class:"token keyword"},"as"),l(" __glob__0_0 "),s("span",{class:"token keyword"},"from"),l(),s("span",{class:"token string"},"'./dir/foo.js'"),l("\n"),s("span",{class:"token keyword"},"import"),l(),s("span",{class:"token operator"},"*"),l(),s("span",{class:"token keyword"},"as"),l(" __glob__0_1 "),s("span",{class:"token keyword"},"from"),l(),s("span",{class:"token string"},"'./dir/bar.js'"),l("\n"),s("span",{class:"token keyword"},"const"),l(" modules "),s("span",{class:"token operator"},"="),l(),s("span",{class:"token punctuation"},"{"),l("\n  "),s("span",{class:"token string"},"'./dir/foo.js'"),s("span",{class:"token operator"},":"),l(" __glob__0_0"),s("span",{class:"token punctuation"},","),l("\n  "),s("span",{class:"token string"},"'./dir/bar.js'"),s("span",{class:"token operator"},":"),l(" __glob__0_1\n"),s("span",{class:"token punctuation"},"}"),l("\n")])])],-1),Vn=s("p",null,"추가적으로, Glob 패턴과 관련하여 다음의 사항을 유의해주세요.",-1),Wn=s("ul",null,[s("li",null,"이 기능들은 Vite에서 제공하는 기능입니다. (ES 표준이나 웹 브라우저에서 제공하는 기능이 아니에요.)"),s("li",null,[l("Glob 패턴 사용 시, 상대 경로("),s("code",null,"./"),l(") 또는 절대 경로("),s("code",null,"/"),l(")만을 이용해야 합니다.")]),s("li",null,[l("Glob 패턴 매칭은 "),s("code",null,"fast-glob"),l("을 이용합니다. 자세한 것은 "),s("a",{href:"https://github.com/mrmlnc/fast-glob#pattern-syntax",target:"_blank",rel:"noopener noreferrer"},"지원하는 Glob 패턴 목록"),l("을 참고해주세요.")])],-1),En=s("h2",{id:"web-assembly"},[s("a",{class:"header-anchor",href:"#web-assembly","aria-hidden":"true"},"#"),l("Web Assembly")],-1),Un=s("p",null,[l("컴파일 된 "),s("code",null,".wasm"),l(" 파일 역시 Import가 가능합니다. Wasm 파일의 "),s("code",null,"export default"),l("로 Wasm 인스턴스에서 Export한 객체를 "),s("code",null,"Promise"),l(" 형태로 반환하는 초기화 함수가 들어가 있으며, 이를 호출하는 방식으로 사용이 가능합니다.")],-1),Ln=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"import"),l(" init "),s("span",{class:"token keyword"},"from"),l(),s("span",{class:"token string"},"'./example.wasm'"),l("\n\n"),s("span",{class:"token function"},"init"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"then"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"("),s("span",{class:"token parameter"},"exports"),s("span",{class:"token punctuation"},")"),l(),s("span",{class:"token operator"},"=>"),l(),s("span",{class:"token punctuation"},"{"),l("\n  exports"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"test"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),l("\n"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),l("\n")])])],-1),Jn=s("p",null,[l("참고로 초기화 함수를 호출할 때 "),s("code",null,"imports"),l(" 옵션을 사용할 수 있는데, 이 값은 "),s("code",null,"WebAssembly.instantiate"),l(" 함수*의 두 번째 인자 값으로 전달됩니다. (* "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate",target:"_blank",rel:"noopener noreferrer"},[s("code",null,"WebAssembly.instantiate"),l(" MDN doc")]),l(")")],-1),Gn=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token function"},"init"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),l("\n  imports"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"{"),l("\n    "),s("span",{class:"token function-variable function"},"someFunc"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),l(),s("span",{class:"token operator"},"=>"),l(),s("span",{class:"token punctuation"},"{"),l("\n      "),s("span",{class:"token comment"},"/* ... */"),l("\n    "),s("span",{class:"token punctuation"},"}"),l("\n  "),s("span",{class:"token punctuation"},"}"),l("\n"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"then"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),l(),s("span",{class:"token operator"},"=>"),l(),s("span",{class:"token punctuation"},"{"),l("\n  "),s("span",{class:"token comment"},"/* ... */"),l("\n"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),l("\n")])])],-1),Fn=s("p",null,[l("배포 버전으로 빌드 시 "),s("code",null,"assetsInlineLimit"),l(" 옵션*의 값보다 작은 "),s("code",null,".wasm"),l(" 파일은 Base64 문자열 포맷으로 변환됩니다. 그렇지 않은 경우, "),s("code",null,"dist"),l(" 디렉터리에 파일이 복사되어 요청(Fetch) 시 불러오는 방식으로 동작하게 됩니다. (* "),s("a",{href:"/config/#build-assetsinlinelimit"},[s("code",null,"assetsInlineLimit"),l(" doc")]),l(")")],-1),Hn=s("h2",{id:"web-workers"},[s("a",{class:"header-anchor",href:"#web-workers","aria-hidden":"true"},"#"),l("Web Workers")],-1),zn=s("p",null,[l("웹 워커의 경우 "),s("code",null,"?worker"),l(" 또는 "),s("code",null,"?sharedworker"),l(" 문자열을 붙여 Import 할 수 있습니다. 모듈의 "),s("code",null,"export default"),l("로는 워커의 생성자가 들어가게 됩니다.")],-1),Bn=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"import"),l(" MyWorker "),s("span",{class:"token keyword"},"from"),l(),s("span",{class:"token string"},"'./worker?worker'"),l("\n\n"),s("span",{class:"token keyword"},"const"),l(" worker "),s("span",{class:"token operator"},"="),l(),s("span",{class:"token keyword"},"new"),l(),s("span",{class:"token class-name"},"MyWorker"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),l("\n")])])],-1),Nn=s("p",null,[l("물론, "),s("code",null,"import"),l(" 대신 "),s("code",null,"importScripts()"),l(" 함수*를 이용할 수도 있습니다. 다만 이 경우 개발 환경에서는 브라우저의 네이티브 API에만 의존하여 크롬에서만 동작한다는 것을 유의해주세요. 물론 배포 환경으로 빌드 시 다양한 브라우저를 지원하도록 컴파일됩니다. (* "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts",target:"_blank",rel:"noopener noreferrer"},[s("code",null,"importScripts()"),l(" MDN doc")]),l(")")],-1),On=s("p",null,[l("마지막으로, 기본적으로 워커의 경우 배포 시 분리된 청크로 컴파일됩니다. 만약 분리된 청크가 아니라 Base64 포맷의 문자열로 이를 사용하고자 한다면, "),s("code",null,"inline"),l(" 쿼리를 이용해주세요.")],-1),Tn=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"import"),l(" MyWorker "),s("span",{class:"token keyword"},"from"),l(),s("span",{class:"token string"},"'./worker?worker&inline'"),l("\n")])])],-1),Xn=s("h2",{id:"build-optimizations"},[s("a",{class:"header-anchor",href:"#build-optimizations","aria-hidden":"true"},"#"),l("빌드 최적화")],-1),qn=s("blockquote",null,[s("p",null,"아래는 추가적인 설정 없이 기본적으로 빌드 프로세스에 적용되는 기능들에 대한 목록입니다. 물론, 필요 시 각각의 기능들에 대한 비활성화가 가능합니다.")],-1),Kn=s("h3",{id:"css-code-splitting"},[s("a",{class:"header-anchor",href:"#css-code-splitting","aria-hidden":"true"},"#"),l("CSS 코드 분리")],-1),Qn=s("p",null,[l("vite는 비동기적으로 불러와지는 청크 내에 CSS 코드가 포함된 경우, 이를 자동으로 추출해 파일로 분리합니다. 이후 해당 청크를 불러올 때 "),s("code",null,"<link>"),l(" 태그를 이용해 분리된 CSS 코드를 불러오게끔 하며, CSS가 모두 계산된 후에 청크를 렌더하도록 합니다. 굳이 왜 이렇게 복잡한 과정을 거칠까요? 바로 이 과정을 통해 CSS가 렌더링될 때 화면이 잠깐 반짝이는 "),s("a",{href:"https://en.wikipedia.org/wiki/Flash_of_unstyled_content#:~:text=A%20flash%20of%20unstyled%20content,before%20all%20information%20is%20retrieved.",target:"_blank",rel:"noopener noreferrer"},"FOUC 현상"),l("을 회피할 수 있게 되기 때문입니다.")],-1),Yn=s("p",null,[l("물론, 모든 CSS가 그냥 일반적인 각각의 파일로 저장된 경우라면 굳이 이러한 기능을 사용할 필요가 없습니다. 이러한 경우 "),s("a",{href:"/config/#build-csscodesplit"},[s("code",null,"build.cssCodeSplit")]),l(" 옵션의 값을 "),s("code",null,"false"),l("로 설정해 비활성화가 가능합니다.")],-1),Zn=s("h3",{id:"preload-directives-generation"},[s("a",{class:"header-anchor",href:"#preload-directives-generation","aria-hidden":"true"},"#"),l("Preload Directives Generation")],-1),$n=s("p",null,[l("vite는 빌드 시 Direct Import 구문에 대해 "),s("code",null,'<link ref="modulepreload">'),l(" 디렉티브*를 이용해 미리 모듈을 캐싱하도록 자동으로 변환합니다. 덕분에 해당 모듈을 필요로 하는 경우 이를 바로 사용할 수 있게 됩니다. (* "),s("code",null,"modulepreload"),l(": 더 자세한 내용은 "),s("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/modulepreload",target:"_blank",rel:"noopener noreferrer"},"MDN doc"),l(" 또는 "),s("a",{href:"https://developers.google.com/web/updates/2017/12/modulepreload",target:"_blank",rel:"noopener noreferrer"},"Google developers"),l(" 문서를 참고해주세요.)")],-1),ne=s("h3",{id:"async-chunk-loading-optimization"},[s("a",{class:"header-anchor",href:"#async-chunk-loading-optimization","aria-hidden":"true"},"#"),l("Async Chunk Loading Optimization")],-1),ee=s("p",null,[l('빌드 시, 때때로 Rollup은 "공통(Common)" 청크 파일을 생성합니다. 보통 두 개 이상의 모듈에서 공유되는 청크가 이러한데, 이를 Dynamic Import를 이용해 불러오는 경우 다음과 같은 상황이 발생됩니다. (* 브라우저는 '),s("code",null,"A"),l("와 "),s("code",null,"B"),l(" 모듈을 필요로 하며(Dynamic Import), "),s("code",null,"A"),l("와 "),s("code",null,"B"),l(" 모듈은 공통적으로 모듈 "),s("code",null,"C"),l("를 필요로 하는 경우(Direct Import)입니다.)")],-1),se=s("p",null,[s("img",{src:"/assets/graph.8f2f36b7.png",alt:"graph"})],-1),le=s("p",null,[l("최적화되지 않은 경우, 먼저 비동기적으로 "),s("code",null,"A"),l(" 청크가 불러와지게 되고, "),s("code",null,"A"),l(" 청크가 모두 파싱된 후에서야 "),s("code",null,"C"),l(" 청크가 필요하다는 사실을 알게 되기에 다음과 같은 네트워크 왕복이 필요합니다.")],-1),ae=s("div",{class:"language-"},[s("pre",null,[s("code",null,"Entry ---\x3e A ---\x3e C\n")])],-1),te=s("p",null,[l("vite는 Preload 스텝을 이용해 "),s("code",null,"A"),l("를 가져올 때 "),s("code",null,"C"),l(" 청크를 "),s("strong",null,"병렬적(Parallel)으로"),l(" 가져올 수 있도록 Dynamic Import 구문을 자동으로 재작성합니다.")],-1),oe=s("div",{class:"language-"},[s("pre",null,[s("code",null,"Entry ---\x3e (A + C)\n")])],-1),re=s("p",null,"vite는 모든 Direct Import 구문에 대해 Preload 하도록 함으로써, 쓸 데 없이 낭비되는 네트워크 왕복을 줄이도록 구성합니다.",-1);t.render=function(s,l,a,t,ce,pe){return n(),e("div",null,[o,r,c,p,i,u,d,k,m,g,h,f,b,v,y,S,w,j,C,_,I,M,x,R,P,A,D,V,W,E,U,L,J,G,F,H,z,B,N,O,T,X,q,K,Q,Y,Z,$,nn,en,sn,ln,an,tn,on,rn,cn,pn,un,dn,kn,mn,gn,hn,fn,bn,vn,yn,Sn,wn,jn,Cn,_n,In,Mn,xn,Rn,Pn,An,Dn,Vn,Wn,En,Un,Ln,Jn,Gn,Fn,Hn,zn,Bn,Nn,On,Tn,Xn,qn,Kn,Qn,Yn,Zn,$n,ne,ee,se,le,ae,te,oe,re])};export default t;export{a as __pageData};
