import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Users,
  Calendar,
  CheckCircle
} from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "전화 상담",
      description: "평일 09:00 - 18:00",
      contact: "02-1234-5678"
    },
    {
      icon: Mail,
      title: "이메일 문의",
      description: "24시간 접수 가능",
      contact: "contact@legalcare.co.kr"
    },
    {
      icon: MapPin,
      title: "오시는 길",
      description: "서울시 강남구 테헤란로 123",
      contact: "지하철 2호선 강남역 3번 출구"
    }
  ];

  const faqs = [
    {
      question: "서비스 이용료는 어떻게 되나요?",
      answer: "병원 규모와 필요한 서비스에 따라 맞춤형 견적을 제공합니다. 무료 상담을 통해 정확한 견적을 받아보세요."
    },
    {
      question: "계약 기간은 얼마나 되나요?",
      answer: "기본 계약 기간은 6개월이며, 3개월 단위로 연장이 가능합니다. 초기 3개월은 성과 보장 기간입니다."
    },
    {
      question: "의료법 위반 위험은 없나요?",
      answer: "저희는 의료법 전문가와 함께 모든 콘텐츠를 검토하며, 의료법 위반으로 인한 문제 발생 시 전액 책임 보상해드립니다."
    },
    {
      question: "소규모 병원도 서비스 이용이 가능한가요?",
      answer: "네, 개인 의원부터 대형 병원까지 규모에 관계없이 맞춤형 서비스를 제공합니다."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              무료 상담 신청
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              병원 마케팅의 모든 고민, 리걸케어가 해결해드립니다
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">상담 신청 폼</CardTitle>
                  <CardDescription>
                    아래 정보를 입력해주시면 24시간 내에 연락드리겠습니다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">이름 *</Label>
                      <Input id="name" placeholder="홍길동" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">직책</Label>
                      <Input id="position" placeholder="원장님, 마케팅 담당자 등" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hospital">병원명 *</Label>
                    <Input id="hospital" placeholder="○○ 병원/의원" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialty">진료과목</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="진료과목을 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dermatology">피부과</SelectItem>
                        <SelectItem value="plastic">성형외과</SelectItem>
                        <SelectItem value="dental">치과</SelectItem>
                        <SelectItem value="oriental">한의원</SelectItem>
                        <SelectItem value="internal">내과</SelectItem>
                        <SelectItem value="orthopedic">정형외과</SelectItem>
                        <SelectItem value="other">기타</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">연락처 *</Label>
                      <Input id="phone" placeholder="010-1234-5678" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">이메일 *</Label>
                      <Input id="email" type="email" placeholder="example@hospital.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">관심 서비스</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="관심있는 서비스를 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="content">메디컨텐츠 시스템</SelectItem>
                        <SelectItem value="website">홈페이지 제작</SelectItem>
                        <SelectItem value="reputation">평판 관리</SelectItem>
                        <SelectItem value="analytics">데이터 분석</SelectItem>
                        <SelectItem value="all">All-in-One 패키지</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">상담 내용</Label>
                    <Textarea 
                      id="message" 
                      placeholder="현재 마케팅에서 겪고 있는 어려움이나 궁금한 점을 자세히 적어주세요..."
                      rows={4}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="privacy" />
                    <Label htmlFor="privacy" className="text-sm">
                      개인정보 수집 및 이용에 동의합니다. <span className="text-blue-600 cursor-pointer">자세히 보기</span>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="marketing" />
                    <Label htmlFor="marketing" className="text-sm">
                      마케팅 정보 수신에 동의합니다. (선택)
                    </Label>
                  </div>

                  <Button className="w-full text-lg py-6">
                    무료 상담 신청하기
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">연락처 정보</h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <Card key={index} className="border-0 shadow-md">
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Icon className="w-6 h-6 text-blue-600" />
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                  {info.title}
                                </h3>
                                <p className="text-gray-600 mb-2">{info.description}</p>
                                <p className="text-blue-600 font-medium">{info.contact}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                <Card className="border-0 shadow-lg bg-blue-50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Clock className="w-5 h-5 text-blue-600 mr-2" />
                      운영 시간
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">평일</span>
                        <span className="font-medium">09:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">토요일</span>
                        <span className="font-medium">09:00 - 13:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">일요일/공휴일</span>
                        <span className="font-medium">휴무</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Q. {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    A. {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}