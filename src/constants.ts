import { Major, AdmissionMethod, NewsItem } from './types';

export const MAJORS: Major[] = [
  {
    id: 'mầm-non',
    name: 'Giáo dục Mầm non',
    code: '51140201',
    description: 'Đào tạo giáo viên mầm non có trình độ cao, tâm huyết với nghề, nắm vững kiến thức và kỹ năng chăm sóc, giáo dục trẻ.',
    subjects: ['Toán', 'Văn', 'Năng khiếu (Hát, Kể chuyện, Đọc diễn cảm)'],
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'đặc-biệt',
    name: 'Giáo dục Đặc biệt',
    code: '51140203',
    description: 'Đào tạo giáo viên có khả năng giáo dục và hỗ trợ trẻ khuyết tật, trẻ có nhu cầu đặc biệt hòa nhập cộng đồng.',
    subjects: ['Toán', 'Văn', 'Anh'],
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'âm-nhạc',
    name: 'Sư phạm Âm nhạc',
    code: '51140221',
    description: 'Đào tạo giáo viên âm nhạc cho các trường phổ thông và mầm non, có kỹ năng biểu diễn và giảng dạy âm nhạc.',
    subjects: ['Văn', 'Năng khiếu Âm nhạc'],
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mỹ-thuật',
    name: 'Sư phạm Mỹ thuật',
    code: '51140222',
    description: 'Đào tạo giáo viên mỹ thuật có khả năng sáng tạo nghệ thuật và truyền cảm hứng hội họa cho học sinh.',
    subjects: ['Văn', 'Năng khiếu Mỹ thuật'],
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'đồ-họa',
    name: 'Thiết kế Đồ họa',
    code: '62210403',
    description: 'Ngành học ứng dụng dành cho các bạn trẻ yêu thích sáng tạo hình ảnh, truyền thông đa phương tiện.',
    subjects: ['Toán', 'Văn', 'Vẽ'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800'
  }
];

export const ADMISSION_METHODS: AdmissionMethod[] = [
  {
    title: 'Xét tuyển theo kết quả thi Tốt nghiệp THPT',
    description: 'Sử dụng điểm thi các tổ hợp môn tương ứng với từng ngành học.'
  },
  {
    title: 'Xét tuyển theo Học bạ THPT',
    description: 'Xét điểm trung bình cộng các môn học năm lớp 12 hoặc cả 3 năm THPT.'
  },
  {
    title: 'Xét tuyển kết hợp thi năng khiếu',
    description: 'Áp dụng cho các ngành Sư phạm Mầm non, Âm nhạc, Mỹ thuật.'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Thông báo tuyển sinh chính thức năm 2025',
    date: '20/02/2025',
    summary: 'Trường Cao đẳng Sư phạm Trung ương công bố chỉ tiêu và phương thức tuyển sinh cho 15 ngành đào tạo.'
  },
  {
    id: '2',
    title: 'Ngày hội tư vấn hướng nghiệp "Vững bước tương lai"',
    date: '15/02/2025',
    summary: 'Hàng ngàn học sinh THPT đã tham gia trải nghiệm môi trường sư phạm tại cơ sở chính.'
  }
];

export const COLLEGE_INFO = `
Trường Cao đẳng Sư phạm Trung ương (NCE) là cơ sở đào tạo công lập uy tín hàng đầu tại Việt Nam.
Địa chỉ: 387 Hoàng Quốc Việt, Cầu Giấy, Hà Nội.
Hotline: 024.3756.2666
Email: tuyensinh@nce.edu.vn
Các ngành đào tạo chính: Giáo dục Mầm non, Giáo dục Đặc biệt, Sư phạm Âm nhạc, Sư phạm Mỹ thuật, Thiết kế đồ họa, Công tác xã hội, Quản trị văn phòng.
Phương thức xét tuyển: Học bạ, Điểm thi THPT, Thi năng khiếu.
`;
