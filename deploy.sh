#!/bin/bash

# 배포 스크립트
echo "🚀 리걸케어 홈페이지 배포를 시작합니다..."

# 의존성 설치
echo "📦 의존성을 설치합니다..."
npm install

# 프로덕션 빌드
echo "🔨 프로덕션 빌드를 생성합니다..."
npm run build

# 빌드 결과 확인
if [ -d "dist" ]; then
    echo "✅ 빌드가 성공적으로 완료되었습니다!"
    echo "📁 dist 폴더 내용:"
    ls -la dist/
    echo ""
    echo "🌐 배포 준비가 완료되었습니다!"
    echo "다음 중 하나의 방법으로 배포할 수 있습니다:"
    echo ""
    echo "1. Netlify 배포:"
    echo "   - dist 폴더를 Netlify에 드래그 앤 드롭"
    echo "   - 또는 netlify-cli 사용: npx netlify deploy --prod --dir=dist"
    echo ""
    echo "2. Vercel 배포:"
    echo "   - vercel 명령어 사용: npx vercel --prod"
    echo ""
    echo "3. GitHub Pages 배포:"
    echo "   - GitHub Actions 워크플로우 설정 필요"
    echo ""
    echo "4. 정적 호스팅 서비스:"
    echo "   - AWS S3, Cloudflare Pages 등"
else
    echo "❌ 빌드에 실패했습니다!"
    exit 1
fi
