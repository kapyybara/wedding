// Cấu hình nội dung website cưới — chỉnh các giá trị bên dưới để cá nhân hóa.
export const wedding = {
  brideAndGroom: 'NHẬT TIẾN & PHƯƠNG VY',
  bride: 'Phương Vy',
  groom: 'Nhật Tiến',
  // Tên gọi ngắn — dùng ở monogram, footer, page loader thay cho chữ viết tắt.
  brideShort: 'V',
  groomShort: 'T',
  // Ngày giờ tổ chức (định dạng ISO) — dùng cho đồng hồ đếm ngược.
  weddingDate: '2026-07-24T11:00:00+07:00',
  dateLabel: '24 . 07 . 2026',
  tagline: 'mình về chung một nhà mình nhé',
  signature: 'Nhật Tiến & Phương Vy',

  welcome: {
    title: 'CHÀO MỪNG ĐẾN NGÀY VUI CỦA CHÚNG MÌNH',
    body: 'Thân gửi gia đình và bạn bè yêu quý, sau quãng thời gian yêu thương và gắn bó, cuối cùng ngày trọng đại của tụi mình cũng đã đến. Sự hiện diện của bạn là món quà tuyệt vời nhất — cùng nhau tạo nên những kỷ niệm thật đẹp trong ngày vui này nhé!',
  },

  countdown: {
    title: 'CÒN BAO LÂU NỮA?',
    subtitle: 'Đếm từng ngày đến khoảnh khắc hạnh phúc',
  },

  // Câu chuyện tình yêu — dòng thời gian.
  story: {
    title: 'CHUYỆN TÌNH CỦA TỤI MÌNH',
    subtitle: 'Từ những ngày đầu đại học đến chung một mái nhà',
    milestones: [
      {
        date: 'Mùa thu 2020',
        heading: 'Lần đầu gặp gỡ',
        text: 'Tụi mình tình cờ quen nhau tại văn phòng Đoàn khi cùng tham gia hoạt động đoàn hội thời đại học. Những ngày cùng nhau hoạt động giúp tụi mình dần gắn kết và mở đầu cho một câu chuyện thật đẹp.',
        photo: '/images/story-1.jpg',
      },
      {
        date: '02 . 01 . 2021',
        heading: 'Chính thức hẹn hò',
        text: 'Sau những ngày thân thiết, tụi mình quyết định đi cùng nhau trên một chặng đường mới. Và thế là câu chuyện tình yêu của tụi mình bắt đầu từ đây.',
        photo: '/images/story-2.jpg',
      },
      {
        date: '07 . 08 . 2026',
        heading: 'Đăng ký kết hôn',
        text: 'Được sự đồng ý của hai bên gia đình, tụi mình chính thức đăng ký kết hôn. Chặng đường phía trước sẽ luôn có nhau. Cảm ơn tất cả mọi người đã yêu thương tụi mình.',
        photo: '/images/story-3.jpg',
      },
    ],
  },

  // Thông tin các nghi lễ.
  events: {
    title: 'SỰ KIỆN CƯỚI',
    subtitle: 'Sự hiện diện của bạn là niềm vinh hạnh của tụi mình',
    items: [
      {
        name: 'TIỆC CƯỚI',
        side: 'Nhà Gái — Phú Quốc',
        time: '17:00 • Chủ Nhật, 19.07.2026',
        venue: 'Nhà Hàng Long Phụng 5 (Sảnh 4)',
        address: 'Đường Đoàn Thị Điểm, Dương Đông, Phú Quốc',
        mapUrl: 'https://maps.google.com/?q=Long+Phung+5+Doan+Thi+Diem+Duong+Dong+Phu+Quoc',
      },
      {
        name: 'TIỆC CƯỚI',
        side: 'Nhà Trai — Đồng Nai',
        time: '11:00 • Thứ Sáu, 24.07.2026',
        venue: 'Nhà Hàng Ba Thành',
        address: 'Thôn 3 - Bom Bo - Đồng Nai',
        mapUrl: 'https://maps.google.com/?q=Nha+Hang+Ba+Thanh+Bom+Bo+Dong+Nai',
      },
    ],
  },

  // Lịch trình di chuyển — xe đưa đón từ Sài Gòn.
  itinerary: {
    title: 'LỊCH TRÌNH DI CHUYỂN',
    subtitle: 'Xe đưa đón từ Sài Gòn đến Đồng Nai',
    date: 'Thứ Sáu, 24.07.2026',
    items: [
      {
        time: '05:00',
        label: 'Khởi hành',
        note: 'Xe sẽ đón khách tại Bến xe Miền Đông cũ lúc 5:00 sáng. Vui lòng có mặt trước 15 phút ạ.',
        location: 'Bến xe Miền Đông cũ',
        address: 'Quận Bình Thạnh, TP. Hồ Chí Minh',
        mapUrl: 'https://maps.app.goo.gl/qFwzC7BDCF21vWwJA',
        icon: 'departure',
      },
      {
        time: '10:00',
        label: 'Đến nơi',
        location: 'Nhà Hàng Ba Thành',
        address: 'Thôn 3 - Bom Bo - Đồng Nai',
        mapUrl: 'https://maps.google.com/?q=Nha+Hang+Ba+Thanh+Bom+Bo+Dong+Nai',
        icon: 'arrival',
      },
      {
        time: '14:00',
        label: 'Về Sài Gòn',
        location: 'Nhà Hàng Ba Thành',
        address: 'Thôn 3 - Bom Bo - Đồng Nai',
        mapUrl: 'https://maps.google.com/?q=Nha+Hang+Ba+Thanh+Bom+Bo+Dong+Nai',
        icon: 'return',
      },
    ],
  },

  gallery: {
    title: 'KHOẢNH KHẮC CỦA TỤI MÌNH',
    subtitle: 'Một vài hình ảnh đáng nhớ trên hành trình yêu thương',
    photos: [
      { src: '/images/gallery-1.jpg', alt: 'Cặp đôi ôm nhau trong màn voan cưới' },
      { src: '/images/gallery-2.jpg', alt: 'Nhẫn cưới lung linh' },
      { src: '/images/gallery-3.jpg', alt: 'Cô dâu Phương Vy rạng rỡ' },
      { src: '/images/gallery-4.jpg', alt: 'Cặp đôi bên tháp chuông và đài phun nước' },
      { src: '/images/gallery-5.jpg', alt: 'Khoảnh khắc âu yếm của cặp đôi' },
      { src: '/images/gallery-6.jpg', alt: 'Nụ hôn ngọt ngào giữa vườn hoa' },
    ],
  },

  rsvp: {
    title: 'XÁC NHẬN THAM DỰ',
    intro: 'Hãy cho tụi mình biết bạn có thể đến chung vui nhé',
    deadlineNote:
      'Vui lòng phản hồi trước ngày 20.07.2026 để tụi mình tiện sắp xếp. Cảm ơn bạn rất nhiều!',
  },

  // Thông tin liên hệ — Zalo / điện thoại.
  contact: {
    title: 'LIÊN HỆ',
    subtitle: 'Nếu cần hỗ trợ, bạn vui lòng liên hệ qua Zalo hoặc gọi điện nhé',
    phones: [
      { number: '0707710344', label: 'Nhà Trai' },
      { number: '0931333574', label: 'Nhà Gái' },
    ],
  },

  // Mừng cưới — chuyển khoản.
  gift: {
    title: 'HỘP MỪNG CƯỚI',
    body: 'Sự hiện diện của bạn đã là món quà quý giá nhất. Nếu muốn gửi lời chúc qua hộp mừng, tụi mình xin trân trọng đón nhận tấm lòng của bạn.',
    qrImage: '/images/qr-mung-cuoi.jpg',
    qrCaption: 'Quét mã để gửi hộp mừng cưới',
  },

  thankYou: {
    title: 'Cảm ơn bạn',
    body: 'Cảm ơn bạn đã là một phần trong ngày hạnh phúc của tụi mình. Hẹn gặp bạn trong ngày trọng đại!',
  },

  // Ảnh cưới.
  photos: {
    hero: '/images/hero.jpg',
    welcome: '/images/welcome.jpg',
    monogram: '/images/monogram.jpg',
    eventsLeft: '/images/events-left.jpg',
    eventsRight: '/images/events-right.jpg',
  },

  // Menu điều hướng
  nav: {
    items: [
      { id: 'welcome', label: 'Chào mừng' },
      { id: 'events', label: 'Sự kiện' },
      { id: 'itinerary', label: 'Lịch trình' },
      { id: 'countdown', label: 'Đếm ngược' },
      { id: 'story', label: 'Chuyện tình' },
      { id: 'gallery', label: 'Ảnh cưới' },
      { id: 'rsvp', label: 'Xác nhận' },
      { id: 'gift', label: 'Mừng cưới' },
      { id: 'contact', label: 'Liên hệ' },
    ],
  },
}

export type RsvpForm = {
  name: string
  attendance: 'yes' | 'no' | ''
  guests: number
  message: string
}

export type GalleryPhoto = {
  src: string
  alt: string
}
