# Sidemenu 프로젝트 작업 가이드

```
dev 브랜치 기준 폴더구조

sidemenu/
├── .vscode/       # vscode 설정(⚠️건들지 마세요)
├── admin/         # 관리자페이지 작업 폴더
├── common/        # 공통 헤더/푸터, 공용 스타일 및 유틸 스크립트
├── community/     # 커뮤니티
├── experience/    # 견학/체험
├── festival/      # 축제
├── login_join/    # 로그인_회원가입
├── mainpage/      # 메인페이지
├── mypage/        # 마이페이지
├── node_modules/  # node js 관련 (⚠️건들지 마세요)
├── notice/        # 공지사항
├── product/       # 상품
├── project/       # 프로젝트
├── resources/     # 이미지
├── index.html     # 전체 페이지 목록 테스트용
├── README.md      # 공지사항용 (⚠️건들지 마세요)
└── 그 외 파일      # 세팅용 (⚠️건들지 마세요)
```

---

## ⚠️각 작업자 index.html 수정 방법 (각자 브랜치에서 수정하고 dev로 병합요청)

각 폴더(admin, common, community, ... )에는 `독립적인 index.html`이 존재합니다.  
각 폴더 안에서만 파일을 수정하며, Vercel 미리보기는 해당 index.html 기준으로 동작합니다.  
병합 시 충돌을 피하기 위해 `반드시 자기 폴더 안에서만 작업`하세요.

**예시:**

- admin/index.html
- common/index.html
- community/index.html

```js
const pages = [
	'login.html',
	'dashboard.html',
	// ⚠️여기에 admin(혹은 그 외 각자) 폴더 내 실제 존재하는 html 파일명을 추가!
];
```

⚠️각 페이지 작업 push할때 이 index.html도 꼭 수정해서 같이 push 해주세요!!!!  
변경 후 `add` → `commit` → `push` 해주세요.

---

## 루트 index.html 수정 방법(main 브랜치) ⚠️PM만 수정합니다

루트(sidemenu/index.html)는 전체 페이지 링크를 보여주는 테스트용 페이지입니다.  
`pages` 배열에 경로를 추가하면 자동으로 링크가 생성됩니다.

```js
const pages = [
	'admin/index.html',
	'common/index.html',
	'community/index.html',
	'community/index.html',
	'experience/index.html',
];
```

변경 후 `add` → `commit` → `push`

---

## 공통 요소 삽입 방법 (헤더 / 푸터 / 스타일)

각자의 .html에서 아래와 같이 공통 요소를 포함합니다:

```html
<!DOCTYPE html>
<html lang="ko">
	<head>
		<link rel="stylesheet" href="../common/styles.css" />
		<!-- styles.css 파일 불러오기 (경로는 알아서 잘 맞추기)-->
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>제목</title>
		<!-- 공통 헤더 불러오기 -->
		<script defer src="/common/header.js"></script>

		<!-- 공통 푸터 불러오기 -->
		<script defer src="/common/footer.js"></script>
	</head>
	<body>
		내용 작성
	</body>
</html>
```

---

## 반응형 스타일

PC, 태블릿, 모바일에 대응하는 반응형 CSS는 `common` 폴더 내 `styles.css`에서 관리합니다.  
미디어 쿼리를 통해 화면 크기에 맞춰 자동 대응되도록 작성합니다.

---

## 기본 작업 규칙

- 자신의 폴더 외에는 수정하지 않습니다.
- `common` 폴더 변경 시 팀원과 **사전 협의** 필수입니다.
- PR 시 자신의 디렉토리만 수정되도록 해주세요.
- 리소스는 `/resources`에 넣고, 경로는 **상대경로** 사용하세요.

---

## PR 시 미리보기

각 폴더는 Vercel에 개별 프로젝트로 연동되어 있어, PR 시 미리보기에 충돌이 없습니다.  
병합 시에도 충돌을 피하기 위해 **각자 폴더의 index.html만 수정**해주세요.
