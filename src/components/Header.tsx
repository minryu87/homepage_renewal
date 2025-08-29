import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: '홈', href: '/' },
    { 
      name: '서비스', 
      href: '/services',
      subMenu: [
        { name: '마케팅 솔루션', href: '/marketing-solutions' },
        { name: '맞춤형 솔루션', href: '/custom-solutions' }
      ]
    },
    { name: '블로그', href: '/blog' },
    { name: '회사소개', href: '/about' },
    { name: '리소스', href: '/resources' },
    { name: '고객지원', href: '/support' },
    { name: '문의', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">LC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">리걸케어</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.subMenu ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className={`text-sm font-medium transition-colors hover:text-blue-600 flex items-center ${
                    isActive(item.href) || item.subMenu.some(sub => isActive(sub.href)) 
                      ? 'text-blue-600' 
                      : 'text-gray-700'
                  }`}>
                    {item.name}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.subMenu.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link 
                          to={subItem.href}
                          className="w-full text-sm font-medium text-gray-700 hover:text-blue-600"
                        >
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive(item.href) ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/contact">무료 상담</Link>
            </Button>
            <Button asChild>
              <Link to="/contact">시작하기</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">메뉴 열기</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  item.subMenu ? (
                    <div key={item.name}>
                      <div className="text-lg font-medium text-gray-900 mb-2">
                        {item.name}
                      </div>
                      {item.subMenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`block pl-4 text-base font-medium transition-colors hover:text-blue-600 mb-2 ${
                            isActive(subItem.href) ? 'text-blue-600' : 'text-gray-600'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-lg font-medium transition-colors hover:text-blue-600 ${
                        isActive(item.href) ? 'text-blue-600' : 'text-gray-700'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" asChild>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>무료 상담</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>시작하기</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;