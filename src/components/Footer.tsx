import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">LC</span>
              </div>
              <span className="text-xl font-bold">리걸케어</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              병원 온라인 마케팅 전문 컨설팅 및 대행 서비스로, 데이터 기반의 마케팅 전략 수립부터 콘텐츠 제작, 채널 관리, 평판 관리까지 원스톱 솔루션을 제공합니다.
            </p>
            <div className="text-sm text-gray-400">
              <p>© 2025 리걸케어. All rights reserved.</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">서비스</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/services" className="hover:text-white transition-colors">메디컨텐츠 시스템</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">홈페이지 제작</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">평판 관리</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">데이터 분석</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">회사</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">회사소개</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">블로그</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">리소스</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">문의하기</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>병원 온라인 마케팅의 새로운 기준, 리걸케어와 함께하세요.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;