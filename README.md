# 📦 Team Project Starter

이 저장소는 **VS Code 기반의 팀 프로젝트 개발 환경**을 빠르게 설정하기 위한 기본 설정을 포함합니다.  
Prettier와 ESLint를 이용한 **통일된 코드 스타일**, 추천 확장, 자동 포맷 기능이 모두 준비되어 있어요.

---

## 🧑‍💻 팀원 작업 가이드

### ✅ 기본 작업 순서 (숙지)

1. Node.js 설치 확인
2. 저장소 클론 및 VS Code로 열기
3. npm install 실행
4. 코드 저장 시 자동 포맷 및 ESLint 적용
5. 브랜치 생성 후 기능 개발 시작

> VS Code로 열면 추천 확장은 자동 설치됩니다.  
> 저장만 해도 Prettier 포맷 + ESLint 자동 수정 적용!

---

## 🚀 자동세팅 사용법(최초1회) ⚠️⚠️⚠️(따라하세요)

### 1. Node.js 설치 확인

**CMD**에서 다음 명령어를 입력:

```bash
node -v
```

버전이 출력되지 않으면 Node.js 공식 사이트에서 설치하세요.  
**LTS(Long-Term Support)** 버전을 선택하면 안정적입니다.  
설치 후 다시 명령어 입력하여 버전 출력되는지 확인.  
<br> <br>

### 2. 저장소 클론

아래 명령어를 **CMD**에서 한 줄씩 입력하세요 **⚠️(띄어쓰기 주의)**

```bash
d:
mkdir sidemenu
cd sidemenu
git clone https://github.com/seohay-1ae/sidemenu.git .
code .
```

> `.`은 현재 디렉토리에 저장소를 복제하겠다는 의미입니다.  
> `code .` 후 엔터를 치면 `d:sidemenu` 루트로 **자동으로 VSCode가 실행됩니다.**  
> **"이 워크스페이스에서 추천하는 확장 기능이 있습니다."** 뜨는데  
> **⚠️⚠️설치❌, 닫기❌ 일단 두고 다음단계 진행**  
> <br> <br>

### 3. 의존 패키지 설치

VS Code에서 ESLint, Prettier, 자동 포맷 등이 제대로 작동하려면 아래 설정이 필요해요.

✅ 실행 방법

1. 자동으로 실행된 VSCode에서 `Ctrl + ~` (터미널 열기)
2. 아래 명령어 입력

```bash
npm install
```

> ⚠️루트 폴더(sidemenu)에 `package.json` 파일이 생성되었는지 확인.  
> <br> <br>

### 4. 확장 프로그램 설치

아까 뜬 팝업

> **"이 워크스페이스에서 추천하는 확장 기능이 있습니다."**

✅ **"모두 설치"** 를 클릭하세요.  
이후 **파일 저장만 해도 자동 포맷/ESLint 수정**이 적용됩니다!

---

## 🔄 팀 협업 Git 작업 가이드

**최신 코드 유지 & 충돌 방지를 위한 팀 개발 규칙**

### 📌 브랜치 전략

| 브랜치     | 용도                                             |
| ---------- | ----------------------------------------------- |
| `main`     | 최종 배포용 코드                                  |
| `dev`      | 팀 작업을 병합하는 중간 브랜치 (PM이 머지 담당)    |
| `본인이름`  | 본인이 작업하는 브랜치                           |

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

> 💡 `youngshin` 이라는 브랜치가 있으면 그 브랜치에서 `본인이 맡은 카테고리` 폴더에 `해당 페이지` 작업  
> 💡 예를 들어 `youngshin` 브랜치에서는 `festival` 폴더에 `축제리스트 페이지, 축제상제 페이지` 작업 / `product` 폴더에 `상품리스트 페이지, 상품상세 페이지` 작업  
> 💡 `dev` 브랜치에서는 `resources` 폴더에 `이미지파일`들 업로드  
> 💡 `dev` 브랜치에서는 `common` 폴더에 `공통 소스` 작업 (`PM만 작업`)  
> 본인의 카테고리와 해당 페이지는 `WBS`와 `화면설계서`를 참고하세요

---

### ✅ 팀원 작업 순서 (⚠️VSCode 터미널에서 이것만 직접하면 됨) (⚠️⚠️⚠️꼭꼭 숙지하고 항상 보고 하세요⚠️⚠️⚠️)

#### 1. `dev` 브랜치에서 최신 코드 가져오기

```bash
git checkout dev        # dev로 이동
git pull origin dev     # dev의 최신 내용 내려받기
```

#### 2. 작업 후 커밋 (현재 브랜치 확인 필수!)

```bash
git checkout 본인브랜치               # 본인 브랜치로 이동
git status                           # 현재 브랜치 한번 더 확인 (선택사항)
카테고리 폴더에서 페이지 작업하기
git add .                            # 변경된 파일 모두 추가
git commit -m "작업 내용 메세지"
```

#### 3. 푸시 전 `dev` 최신화 & 반영

```bash
git checkout dev           # dev 브랜치로 이동
git pull origin dev        # ⚠️최신 dev 내려받기

git checkout 본인브랜치     # 다시 본인 브랜치로 이동
git merge dev              # 최신 dev 내용을 본인 브랜치에 병합
```

#### 4. 작업 브랜치 푸시

```bash
git push                  # 브랜치에 최종 작업 푸시
```

#### 5. Dev 브랜치에 PR 요청하기

**작업한 내용이 완료**되었다고 생각되면 **본인 브랜치 -> dev** 로 **PR 요청**해주세요.  
요청한 PR은 팀장, 부팀장이 깃허브 내에서 바로 vercel을 통해 웹으로 미리보기 할 수 있습니다.  
**PM이 확인 후 작업내용을 리뷰 / 반려/ 승인** 합니다.  
해당 내용은 vercel 서버를 통해 **잔디 '커밋기록'** 토픽에 자동으로 메세지 송출됩니다.
꼭 확인해주세요.

---

### 📤 병합 흐름 (여기서부터는 그냥 설명)

```bash
본인 브랜치 → dev → main
```

- **팀원**: `본인 브랜치 → dev` 브랜치까지만 작업
- `dev → main` 병합은 **PM이 담당**

---

### ⚠️ 주의사항

- ❌ `main`, `dev` 브랜치에는 직접 작업하지 마세요.
- ✅ 작업 전/푸시 전 **반드시 dev 최신화 → 병합** 진행.
- 📝 Pull Request는 **본인 브랜치 → dev**로 생성해주세요.

---

## 💻 개발 환경 자동 설정 (세팅값 설명)

### 📂 주요 설정 파일

| 파일명                    | 설명                                        |
| ------------------------- | ------------------------------------------- |
| `.vscode/settings.json`   | 저장 시 자동 포맷, ESLint 연동 설정         |
| `.vscode/extensions.json` | 추천 확장 목록                              |
| `.prettierrc`             | 코드 포맷 스타일 설정                       |
| `.eslintrc.js`            | 코드 검사 및 규칙 설정 (Prettier 연동 포함) |

---

### `.vscode/settings.json`

```json
{
	"editor.formatOnSave": true,
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"editor.codeActionsOnSave": {
		"source.fixAll": "explicit"
	},
	"editor.tabSize": 2,
	"editor.insertSpaces": false,

	"eslint.validate": ["javascript", "javascriptreact"],
	"files.eol": "\n",
	"files.insertFinalNewline": true,

	"prettier.requireConfig": true,
	"prettier.singleQuote": true,
	"prettier.printWidth": 100,
	"prettier.tabWidth": 2,
	"prettier.useTabs": true,
	"files.exclude": {
		"**/node_modules": true
	},
	"search.exclude": {
		"**/node_modules": true
	},
	"[javascript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[typescript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[json]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	}
}
```

---

### `.vscode/extensions.json`

```json
{
	"recommendations": [
		"dbaeumer.vscode-eslint",
		"donjayamanne.jquerysnippets",
		"ecmel.vscode-html-css",
		"esbenp.prettier-vscode",
		"formulahendry.auto-rename-tag",
		"formulahendry.code-runner",
		"kisstkondoros.vscode-gutter-preview",
		"ms-ceintl.vscode-language-pack-ko",
		"ms-vscode.live-server",
		"naumovs.color-highlight",
		"oderwat.indent-rainbow",
		"pranaygp.vscode-css-peek",
		"ritwickdey.liveserver",
		"solnurkarim.html-to-css-autocompletion",
		"streetsidesoftware.code-spell-checker",
		"vincaslt.highlight-matching-tag",
		"zignd.html-css-class-completion"
	]
}
```

---

### `.prettierrc`

```json
{
	"semi": true,
	"singleQuote": true,
	"tabWidth": 2,
	"useTabs": true,
	"printWidth": 100,
	"bracketSpacing": true,
	"trailingComma": "all"
}
```

---

### `.eslintrc.js`

```js
// .eslintrc.js
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react', 'jsx-a11y', 'import'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				printWidth: 100,
				tabWidth: 2,
				useTabs: true,
				bracketSpacing: true,
				trailingComma: 'all',
			},
		],
		semi: ['error', 'always'],
		'no-unused-vars': 'warn',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
```

---

Happy Coding! ✨
