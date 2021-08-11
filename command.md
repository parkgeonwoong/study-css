👉 npm ERR! gyp 에러 일 경우 : npm install --global windows-build-tools  
(해도 npm ERR! 뜸 무시)

👉 sass 설치 시 오류 
npm uninstall -g node-sass 
yarn add node-sass@4.14.1 
(설치 후 yarn 업그레이드)

참고: https://online.codingapple.com/forums/topic/sass%EC%84%A4%EC%B9%98-%EC%8B%9C-%EC%98%A4%EB%A5%98/   


👉 yarn을 필수로 설치하자 : npm install --global yarn   
yarn --version

참고 : https://classic.yarnpkg.com/en/docs/install/#windows-stable  


👉 yarn 업그레이드 : yarn upgrade  


👉 yarn 으로 gulp 다운 : yarn add gulp


👉 Failed to load ... module ....
최신버전은 앞에 @ 마크가 붙음
yarn add @babel/core
yarn add @babel/register
yarn add @babel/preset-env   


👉 전역 설치가 꼬여서 gulp --version을 쳐봐도 설치가 안되있다고 하거나 gulp를 글로벌로 설치했는데도 찾을 없다고 하는 경우 아래의 순서로 다시 설치합니다.  

1. npm rm --global gulp
2. sudo npm install --global gulp-cli  




