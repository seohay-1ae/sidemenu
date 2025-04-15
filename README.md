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

## 공통 요소 삽입 방법 (헤더 / 푸터 / 스타일)

각자의 .html에서 아래와 같이 공통 요소를 포함합니다:

```html
<!DOCTYPE html>
<html lang="ko">
	<head>
		<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script> <!--j쿼리 사용시-->
		<link rel="stylesheet" href="../common/styles.css" /> <!-- styles.css 파일 불러오기 (경로는 알아서 잘 맞추기)-->
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>제목</title>
		<style>
			/* css 작성 */
		</style>
	</head>
	<body>
		<!-- html 작성 -->
		<scrit>
			<!-- js 작성 -->
		</scrit>
	</body>
		<!-- 공통 헤더 불러오기 -->
		<script defer src="/common/header.js"></script>
	
		<!-- 공통 푸터 불러오기 -->
		<script defer src="/common/footer.js"></script>
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
- 이미지는 `/resources`에 넣고, 경로는 **상대경로** 사용하세요.

---
