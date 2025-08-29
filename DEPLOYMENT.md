# 리걸케어 홈페이지 배포 가이드

## 📋 프로젝트 정보

- **프레임워크**: Vite + React + TypeScript
- **UI 라이브러리**: shadcn/ui + Tailwind CSS
- **라우팅**: React Router DOM
- **패키지 매니저**: npm/pnpm

## 🚀 배포 방법

### 1. Netlify 배포 (추천)

#### 방법 1: 드래그 앤 드롭
1. `npm run build` 실행
2. 생성된 `dist` 폴더를 [Netlify](https://netlify.com)에 드래그 앤 드롭

#### 방법 2: Netlify CLI 사용
```bash
# Netlify CLI 설치
npm install -g netlify-cli

# 로그인
netlify login

# 배포
netlify deploy --prod --dir=dist
```

### 2. Vercel 배포

#### 방법 1: Vercel CLI 사용
```bash
# Vercel CLI 설치
npm install -g vercel

# 배포
vercel --prod
```

#### 방법 2: GitHub 연동
1. [Vercel](https://vercel.com)에 GitHub 계정으로 로그인
2. 이 저장소를 import
3. 자동 배포 설정

### 3. GitHub Pages 배포

1. GitHub 저장소 설정에서 Pages 활성화
2. `main` 브랜치에 push하면 자동 배포
3. 워크플로우는 `.github/workflows/deploy.yml`에 정의됨

### 4. 정적 호스팅 서비스

#### AWS S3 + CloudFront
```bash
# AWS CLI 설치 후
aws s3 sync dist/ s3://your-bucket-name --delete
```

#### Cloudflare Pages
1. Cloudflare Dashboard에서 Pages 프로젝트 생성
2. GitHub 저장소 연결
3. 빌드 설정: `npm run build`, 출력 디렉토리: `dist`

## 🔧 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
src/
├── components/     # 재사용 가능한 컴포넌트
├── pages/         # 페이지 컴포넌트
├── hooks/         # 커스텀 훅
├── lib/           # 유틸리티 함수
├── App.tsx        # 메인 앱 컴포넌트
└── main.tsx       # 앱 진입점

public/            # 정적 파일
dist/              # 빌드 출력 (배포용)
```

## 🌐 환경 변수

필요한 경우 `.env` 파일을 생성하여 환경 변수 설정:

```env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=리걸케어
```

## 🔍 문제 해결

### 빌드 오류
```bash
# 캐시 클리어
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 라우팅 문제
- SPA 라우팅을 위해 모든 경로가 `index.html`로 리다이렉트되도록 설정됨
- `_redirects` (Netlify) 또는 `vercel.json` (Vercel) 확인

### 성능 최적화
- 이미지 최적화: WebP 형식 사용 권장
- 코드 스플리팅: React.lazy() 사용
- 번들 크기: `npm run build --report`로 분석

## 📞 지원

배포 관련 문제가 있으면 개발팀에 문의하세요.
