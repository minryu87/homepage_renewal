# 리걸케어 홈페이지

병원 온라인 마케팅 전문 컨설팅 회사 리걸케어의 공식 홈페이지입니다.

## 🚀 배포된 사이트

**GitHub Pages**: https://minryu87.github.io/homepage_renewal/

## 🛠 기술 스택

- **프레임워크**: Vite + React + TypeScript
- **UI 라이브러리**: shadcn/ui + Tailwind CSS
- **라우팅**: React Router DOM (HashRouter)
- **패키지 매니저**: npm/pnpm

## 📦 설치 및 실행

### 의존성 설치
```bash
npm install
# 또는
pnpm install
```

### 개발 서버 실행
```bash
npm run dev
# 또는
pnpm run dev
```

### 프로덕션 빌드
```bash
npm run build
# 또는
pnpm run build
```

### GitHub Pages 배포
```bash
npm run deploy
# 또는
pnpm run deploy
```

## 🌐 배포 방법

### GitHub Pages 배포 (현재 사용 중)
1. `npm run build` - 프로덕션 빌드
2. `npm run deploy` - GitHub Pages에 배포
3. https://minryu87.github.io/homepage_renewal/ 에서 확인

### 다른 배포 방법들
- **Netlify**: `dist` 폴더를 Netlify에 드래그 앤 드롭
- **Vercel**: `vercel` 명령어 사용
- **정적 호스팅**: AWS S3, Cloudflare Pages 등

## 📁 프로젝트 구조

```
src/
├── components/     # 재사용 가능한 컴포넌트
│   ├── ui/        # shadcn/ui 컴포넌트들
│   ├── Header.tsx # 헤더 컴포넌트
│   └── Footer.tsx # 푸터 컴포넌트
├── pages/         # 페이지 컴포넌트
├── hooks/         # 커스텀 훅
├── lib/           # 유틸리티 함수
├── App.tsx        # 메인 앱 컴포넌트
└── main.tsx       # 앱 진입점

public/            # 정적 파일
dist/              # 빌드 출력 (배포용)
```

## 🔧 주요 설정

### GitHub Pages 설정
- `vite.config.ts`: `base: '/homepage_renewal/'` 설정
- `package.json`: `"deploy": "gh-pages -d dist"` 스크립트
- 라우팅: HashRouter 사용 (GitHub Pages 호환성)

### 환경 변수
필요한 경우 `.env` 파일을 생성하여 환경 변수 설정:

```env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=리걸케어
```

## 📞 지원

배포 관련 문제가 있으면 개발팀에 문의하세요.

---

© 2025 리걸케어. All rights reserved.
