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
        date: 'Mùa thu 2019',
        heading: 'Lần đầu gặp gỡ',
        text: 'Tụi mình tình cờ quen nhau khi cùng tham gia đoàn hội năm nhất đại học. Những ngày cùng nhau hoạt động giúp tụi mình dần gắn kết và mở đầu cho một câu chuyện thật đẹp.',
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
        name: 'LỄ VU QUY',
        side: 'Nhà Gái — Phú Quốc',
        time: 'Thứ Sáu, 24.07.2026',
        venue: 'Tư gia nhà gái',
        address: 'Phú Quốc, Kiên Giang',
        mapUrl: 'https://maps.google.com/?q=Phu+Quoc+Kien+Giang',
      },
      {
        name: 'TIỆC CƯỚI',
        side: 'Nhà Trai — Bình Phước',
        time: '11:00 • Thứ Sáu, 24.07.2026',
        venue: 'Tư gia nhà trai',
        address: 'Bình Phước',
        mapUrl: 'https://maps.google.com/?q=Binh+Phuoc',
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
      'Vui lòng phản hồi trước ngày 10.07.2026 để tụi mình tiện sắp xếp. Cảm ơn bạn rất nhiều!',
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
      { id: 'countdown', label: 'Đếm ngược' },
      { id: 'story', label: 'Chuyện tình' },
      { id: 'gallery', label: 'Ảnh cưới' },
      { id: 'rsvp', label: 'Xác nhận' },
      { id: 'gift', label: 'Mừng cưới' },
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
