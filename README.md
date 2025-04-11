# 📦 Team Project Starter

이 저장소는 **VS Code 기반의 팀 프로젝트 개발 환경**을 빠르게 설정하기 위한 기본 설정을 포함합니다.  
Prettier와 ESLint를 이용한 **통일된 코드 스타일**, 추천 확장, 자동 포맷 기능이 모두 준비되어 있어요.

---

## 🚀 사용 방법

### 1. 저장소 클론

아래 명령어를 **CMD 또는 PowerShell**에서 한 줄씩 입력하세요:

```bash
d:
mkdir sidemenu
cd sidemenu
git clone https://github.com/seohay-1ae/sidemenu.git .
code .
```

> `.`은 현재 디렉토리에 저장소를 복제하겠다는 의미입니다.

---

### 2. VS Code로 열기

저장소를 VS Code로 열면 다음과 같은 팝업이 뜹니다:

> **"이 워크스페이스에서 추천하는 확장 기능이 있습니다."**

✅ **"모두 설치"** 를 클릭하세요.  
이후 **파일 저장만 해도 자동 포맷/ESLint 수정**이 적용됩니다!

---

## 🧑‍💻 팀원 가이드

1. 저장소 클론 후 VS Code로 열기
2. 추천 확장 설치
3. 코드 저장 시 자동 포맷 및 ESLint 적용
4. 추가 설정 없이 바로 개발 시작 가능! 🚀

---

## 🔄 팀 협업 Git 작업 가이드

**최신 코드 유지 & 충돌 방지를 위한 팀 개발 규칙**

### 📌 브랜치 전략

| 브랜치 | 용도 |
|--------|------|
| `main` | 최종 배포용 코드 |
| `dev` | 팀 작업을 병합하는 중간 브랜치 (PM이 머지 담당) |
| `이름` | 팀원별 브랜치 |
| `브랜치명` | 기능 개발 브랜치 |

---

### ✅ 팀원 작업 순서

#### 1. `dev` 브랜치에서 최신 코드 가져오기
```bash
git checkout dev        # dev로 이동
git pull origin dev     # dev의 최신 내용 내려받기
```

#### 2. 내 작업 브랜치 만들기 (최초 1회만)
```bash
git checkout -b 이름/브랜치이름(페이지이름)  # dev에서 새로운 작업 브랜치 생성
git push -u origin 이름/브랜치이름  # 원격 저장소에도 브랜치 올리기
```
> 💡 브랜치 이름 예시: `youngshin/product_detail01`

#### 3. 작업 후 커밋 (현재 브랜치 확인 필수!)
```bash
git status                # 현재 브랜치 확인 (선택)
git add .                 # 변경된 파일 모두 추가
git commit -m "✨ 작업 내용"
```

#### 4. 푸시 전 `dev` 최신화 & 반영
```bash
git checkout dev          # dev 이동
git pull origin dev       # 최신 dev 내려받기

git checkout 이름/브랜치이름  # 다시 작업 브랜치로 이동
git merge dev             # 최신 dev 내용 병합
```

#### 5. 작업 브랜치 푸시
```bash
git push                  # 내 브랜치에 최종 작업 푸시
```

---

### 📤 병합 흐름

```bash
이름 → dev → main
```

- 팀원: **이름 → dev** 브랜치까지만 작업  
- `dev → main` 병합은 **PM이 담당**

---

### ⚠️ 주의사항

- ❌ `main` 브랜치에는 직접 작업하지 마세요.
- ✅ 작업 전/푸시 전 **반드시 dev 최신화 → 병합** 진행.
- 📝 Pull Request는 **이름 → dev**로 생성해주세요.

---

## 💻 개발 환경 자동 설정

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
    "source.fixAll": true
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
  "prettier.useTabs": true
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
