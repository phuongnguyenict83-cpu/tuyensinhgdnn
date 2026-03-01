import React, { useState } from 'react';
import { 
  BookOpen, Monitor, Users, CheckCircle2, MapPin, Phone, Globe, 
  ChevronRight, Menu, X, FileText, GraduationCap,
  Award, Briefcase, HeartHandshake, Banknote
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-500 selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/20">
                <BookOpen size={24} />
              </div>
              <div>
                <h1 className="font-bold text-xl leading-tight text-slate-900">NCE</h1>
                <p className="text-[10px] font-bold text-orange-500 tracking-widest uppercase">CĐSP Trung Ương</p>
              </div>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-semibold text-slate-700 hover:text-orange-500 transition-colors">Trang chủ</a>
              <a href="#nganh-dao-tao" className="text-sm font-semibold text-slate-700 hover:text-orange-500 transition-colors">Ngành đào tạo</a>
              <a href="#tuyen-sinh" className="text-sm font-semibold text-slate-700 hover:text-orange-500 transition-colors">Tuyển sinh 2026</a>
              <a href="#lien-he" className="text-sm font-semibold text-slate-700 hover:text-orange-500 transition-colors">Liên hệ</a>
              <a href="https://forms.gle/JkNsKnSV9rqsjeng9" target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30 hover:-translate-y-0.5">
                Đăng ký ngay
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-4">
            <a href="#" className="block text-sm font-semibold text-slate-700">Trang chủ</a>
            <a href="#nganh-dao-tao" className="block text-sm font-semibold text-slate-700">Ngành đào tạo</a>
            <a href="#tuyen-sinh" className="block text-sm font-semibold text-slate-700">Tuyển sinh 2026</a>
            <a href="#lien-he" className="block text-sm font-semibold text-slate-700">Liên hệ</a>
            <a href="https://forms.gle/JkNsKnSV9rqsjeng9" target="_blank" rel="noopener noreferrer" className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg text-sm font-bold shadow-lg shadow-orange-500/30 text-center block">
              Đăng ký ngay
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                </span>
                Mở cổng tuyển sinh 2026
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-[1.1]">
                TRƯỜNG CAO ĐẲNG SƯ PHẠM TRUNG ƯƠNG <br/>
                <span className="text-orange-500 text-3xl lg:text-5xl mt-4 block">TUYỂN SINH KHOA GIÁO DỤC NGHỀ NGHIỆP NĂM 2026</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
                Hành trình hơn 30 năm đào tạo giáo viên và cán bộ chất lượng cao cho cả nước. Nơi khởi đầu ước mơ sư phạm và sự nghiệp sáng tạo của bạn.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a href="https://forms.gle/JkNsKnSV9rqsjeng9" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-orange-500 text-white rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/30 hover:-translate-y-1 text-center inline-block">
                  Nộp hồ sơ trực tuyến
                </a>
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-orange-500 border-2 border-orange-100 rounded-xl font-bold text-lg hover:border-orange-500 transition-all">
                  Tìm hiểu thêm
                </button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-orange-500 rounded-[3rem] rotate-3 scale-105 opacity-10"></div>
              <img 
                src="https://res.cloudinary.com/dzu1z8mf0/image/upload/v1772341708/485767163_4053562438209434_8986682998779341723_n_ondzuj.jpg" 
                alt="Students" 
                className="relative rounded-[3rem] shadow-2xl object-cover h-[600px] w-full"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500">
                  <Award size={24} />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">30+ Năm</div>
                  <div className="text-sm text-slate-500 font-medium">Kinh nghiệm đào tạo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Majors Section */}
      <section id="nganh-dao-tao" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2">Ngành học trọng điểm</h3>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Tuyển Sinh Các Ngành Xu Thế</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* IT Card */}
            <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all group">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                <Monitor size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Công nghệ thông tin</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Đào tạo kỹ sư thực hành, cử nhân cao đẳng ngành CNTT đáp ứng nhu cầu nhân lực chất lượng cao trong kỷ nguyên số.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 size={20} className="text-green-500" /> Lập trình Web/App
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 size={20} className="text-green-500" /> Quản trị mạng & Bảo mật
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 size={20} className="text-green-500" /> Thiết kế đồ họa
                </li>
              </ul>
              <button className="text-orange-500 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Xem chi tiết <ChevronRight size={20} />
              </button>
            </div>

            {/* Social Work Card */}
            <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all group">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                <HeartHandshake size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Công tác xã hội</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Môi trường học tập chuyên nghiệp, nơi nuôi dưỡng lòng nhân ái và kiến tạo giá trị cộng đồng bền vững.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 size={20} className="text-green-500" /> Tham vấn tâm lý
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 size={20} className="text-green-500" /> Phát triển cộng đồng
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 size={20} className="text-green-500" /> Hỗ trợ đối tượng yếu thế
                </li>
              </ul>
              <button className="text-orange-500 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Xem chi tiết <ChevronRight size={20} />
              </button>
            </div>

            {/* English Card */}
            <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all group">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                <Globe size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Tiếng Anh</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Chương trình đào tạo Tiếng Anh ứng dụng, trang bị kỹ năng ngôn ngữ toàn diện và năng lực giao tiếp quốc tế.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 size={20} className="text-green-500" /> Tiếng Anh thương mại
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 size={20} className="text-green-500" /> Biên - Phiên dịch
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 size={20} className="text-green-500" /> Giảng dạy Tiếng Anh
                </li>
              </ul>
              <button className="text-orange-500 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Xem chi tiết <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-orange-500 rounded-3xl rotate-3 scale-105 opacity-10"></div>
              <img 
                src="https://res.cloudinary.com/dzu1z8mf0/image/upload/v1772341825/533856654_4201277356771274_6738214626208332613_n_lbayvk.jpg" 
                alt="Campus" 
                className="relative rounded-3xl shadow-2xl object-cover aspect-square"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2">Lựa chọn hàng đầu</h3>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">Tại sao nên chọn NCE?</h2>
              <p className="text-lg text-slate-600 mb-10">Môi trường giáo dục chuyên nghiệp, năng động, giúp bạn phát huy tối đa năng lực bản thân.</p>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-orange-500 shrink-0">
                    <Monitor size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Cơ sở vật chất hiện đại</h4>
                    <p className="text-slate-600 leading-relaxed">Hệ thống phòng học, studio, thư viện và khu thực hành đạt chuẩn quốc tế.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-orange-500 shrink-0">
                    <Briefcase size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">100% Hỗ trợ việc làm</h4>
                    <p className="text-slate-600 leading-relaxed">Kết nối doanh nghiệp và đối tác trường học rộng khắp, cam kết giới thiệu việc làm sau tốt nghiệp.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-orange-500 shrink-0">
                    <Users size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Đội ngũ giảng viên tâm huyết</h4>
                    <p className="text-slate-600 leading-relaxed">Các giảng viên tâm huyết, nhiệt tình, giàu kinh nghiệm và chuyên môn cao.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-orange-500 shrink-0">
                    <Banknote size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Học phí rẻ</h4>
                    <p className="text-slate-600 leading-relaxed">Cam kết học phí trường công, chỉ khoảng 1 triệu/tháng.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Info Section */}
      <section id="tuyen-sinh" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Thông Tin Tuyển Sinh 2026</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Hướng dẫn chi tiết các phương thức, tổ hợp và hồ sơ xét tuyển vào Trường Cao đẳng Sư phạm Trung ương.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Phương thức xét tuyển */}
            <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700 backdrop-blur-sm hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400">
                  <FileText size={24} />
                </div>
                <h3 className="text-2xl font-bold">Phương thức xét tuyển</h3>
              </div>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-orange-500/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 border-4 border-slate-900"></div>
                  <h4 className="font-bold text-orange-400 mb-2 text-lg">Phương thức 1</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Xét tuyển theo kết quả học tập THPT (Học bạ lớp 12) đối với thí sinh tốt nghiệp THPT từ năm 2026 trở về trước.
                  </p>
                </div>
                <div className="relative pl-8 border-l-2 border-orange-500/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 border-4 border-slate-900"></div>
                  <h4 className="font-bold text-orange-400 mb-2 text-lg">Phương thức 2</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Xét tuyển bằng điểm thi tốt nghiệp THPT Quốc gia năm 2026.
                  </p>
                </div>
              </div>
            </div>

            {/* Tổ hợp xét tuyển */}
            <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700 backdrop-blur-sm hover:bg-slate-800 transition-colors">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold">Tổ hợp xét tuyển</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { id: 'A00', subjects: 'Toán, Lý, Hóa' },
                  { id: 'A01', subjects: 'Toán, Lý, Anh' },
                  { id: 'B00', subjects: 'Toán, Hóa, Sinh' },
                  { id: 'B01', subjects: 'Toán, Sinh, Sử' },
                  { id: 'C00', subjects: 'Văn, Sử, Địa' },
                  { id: 'C01', subjects: 'Văn, Toán, Lý' },
                  { id: 'C20', subjects: 'Văn, Địa, GDCD' },
                  { id: 'D01', subjects: 'Toán, Văn, Anh' },
                ].map((combo) => (
                  <div key={combo.id} className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-colors">
                    <div className="font-black text-orange-400 text-lg">{combo.id}</div>
                    <div className="text-xs text-slate-400 mt-1">{combo.subjects}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hồ sơ xét tuyển */}
            <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700 backdrop-blur-sm hover:bg-slate-800 transition-colors flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-2xl font-bold">Hồ sơ xét tuyển</h3>
              </div>
              <ul className="space-y-5 flex-grow">
                {[
                  'Phiếu đăng ký xét tuyển (theo mẫu)',
                  'Bản sao công chứng bằng TN hoặc giấy chứng nhận TN tạm thời',
                  'Bản sao công chứng kết quả điểm thi THPT',
                  'Bản sao công chứng Học bạ THPT',
                  'Bản sao công chứng CCCD'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 size={20} className="text-green-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-5 bg-orange-500/10 border border-orange-500/30 rounded-2xl">
                <div className="text-sm text-orange-200/80 mb-1 font-medium">Lệ phí xét tuyển</div>
                <div className="text-3xl font-black text-orange-400">25.000đ<span className="text-base font-normal text-orange-200/80">/hồ sơ</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & QR Section */}
      <section id="lien-he" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
            <div className="grid lg:grid-cols-2">
              {/* Contact Info */}
              <div className="p-10 md:p-16 bg-orange-500 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl"></div>
                
                <h2 className="text-4xl font-black mb-12 relative z-10">Địa Chỉ Nhận Hồ Sơ</h2>
                
                <div className="space-y-10 relative z-10">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0">
                      <Users size={28} />
                    </div>
                    <div>
                      <h4 className="text-orange-100 text-sm font-bold uppercase tracking-wider mb-2">Người nhận</h4>
                      <p className="text-2xl font-bold">Cô Đới Thị Thủy</p>
                      <p className="text-orange-100 mt-2 text-lg">Văn phòng Khoa Giáo dục Nghề nghiệp</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="text-orange-100 text-sm font-bold uppercase tracking-wider mb-2">Địa chỉ</h4>
                      <p className="text-xl font-bold">Trường CĐSP Trung ương</p>
                      <p className="text-orange-100 mt-2 text-lg leading-relaxed">387 Hoàng Quốc Việt, Nghĩa Đô, Cầu Giấy, Hà Nội</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="text-orange-100 text-sm font-bold uppercase tracking-wider mb-2">Điện thoại liên hệ</h4>
                      <p className="text-2xl font-black mb-1">0986.639.969 <span className="text-lg font-normal">Cô Phương</span></p>
                      <p className="text-2xl font-black mb-1">0972.404.639 <span className="text-lg font-normal">Cô Huyến</span></p>
                      <p className="text-2xl font-black">0912.831.300 <span className="text-lg font-normal">Cô Tú</span></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Codes */}
              <div className="p-10 md:p-16 flex flex-col justify-center items-center text-center bg-white">
                <h3 className="text-3xl font-black text-slate-900 mb-4">Tham Gia Nhóm Tư Vấn Zalo</h3>
                <p className="text-lg text-slate-600 mb-10 max-w-sm">Quét mã QR để được hỗ trợ giải đáp thắc mắc 24/7 từ ban tư vấn tuyển sinh.</p>
                
                <div className="flex flex-col items-center group w-full max-w-sm">
                  <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 group-hover:-translate-y-2 transition-transform duration-300 w-full">
                    <img 
                      src="https://res.cloudinary.com/dzu1z8mf0/image/upload/v1772342283/QR_clhagm.png" 
                      alt="QR Zalo" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12 border-b border-slate-800 pb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                  <BookOpen size={20} />
                </div>
                <h4 className="text-white font-bold text-xl">NCE CĐSPTW</h4>
              </div>
              <p className="text-base leading-relaxed mb-6">
                Trường Cao đẳng Sư phạm Trung ương - Đơn vị đào tạo uy tín, chất lượng trực thuộc Bộ Giáo dục và Đào tạo.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Liên kết nhanh</h4>
              <ul className="space-y-4 text-base">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Trang chủ</a></li>
                <li><a href="#tuyen-sinh" className="hover:text-orange-500 transition-colors">Thông tin tuyển sinh</a></li>
                <li><a href="#nganh-dao-tao" className="hover:text-orange-500 transition-colors">Chương trình đào tạo</a></li>
                <li><a href="#lien-he" className="hover:text-orange-500 transition-colors">Liên hệ tư vấn</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Thông tin liên hệ</h4>
              <ul className="space-y-4 text-base">
                <li className="flex items-start gap-4">
                  <MapPin size={20} className="text-orange-500 shrink-0 mt-1" />
                  <span>387 Hoàng Quốc Việt, Nghĩa Đô, Cầu Giấy, Hà Nội</span>
                </li>
                <li className="flex items-start gap-4">
                  <Phone size={20} className="text-orange-500 shrink-0 mt-1" />
                  <div className="flex flex-col space-y-1">
                    <span>0986.639.969 (Cô Phương)</span>
                    <span>0972.404.639 (Cô Huyến)</span>
                    <span>0912.831.300 (Cô Tú)</span>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Globe size={20} className="text-orange-500 shrink-0" />
                  <span>http://cdsptw.edu.vn</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm font-medium">
            <p>&copy; 2026 Trường Cao đẳng Sư phạm Trung ương. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
