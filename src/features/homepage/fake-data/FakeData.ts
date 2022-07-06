import images from '../../../assets/images';

export const dataMenuIcon = [
    {
      id: '1',
      title: 'Lịch trình',
      image: images.PLAN,
    },
    {
      id: '2',
      title: 'Khách sạn',
      image: images.RESTAURANT,
    },
    {
      id: '3',
      title: 'Máy bay',
      image: images.FLIGHT,
    },
    {
      id: '4',
      title: 'Combo',
      image: images.COMBO,
    },
    {
      id: '5',
      title: 'Nhà hàng',
      image: images.RESTAURANT,
    },
  ];

export const dataDiscount = [
  {
    id: '1',
    image: images.DISCOUNT5,
    title: 'Giảm 300K khi nhập mã MEGA để đặt khách sạn',
    time: '1/12 - 31/12'
  },
  {
    id: '2',
    image: images.DISCOUNT3,
    title: 'Giảm 10% khi nhập mã MEGA để đặt khách sạn',
    time: '1/12 - 10/12'
  },
  {
    id: '3',
    image: images.DISCOUNT2,
    title: 'Giảm 10% khi nhập mã MEGA để đặt khách sạn',
    time: '1/12 - 11/12'
  },
  {
    id: '4',
    image: images.DISCOUNT4,
    title: 'Giảm 30% khi nhập mã MEGA để đặt khách sạn',
    time: '1/12 - 20/12'
  }
]

export const scheduleData = [
  {
    id: '1',
    imageTopLeft: images.SCHEDULE_DATA1,
    imageTopRight: images.SCHEDULE_DATA2,
    imageTopLeftBottom: images.SCHEDULE_DATA3,
    imageTopRightBottom: images.SCHEDULE_DATA4,
    durationTime: '5/12 - 10/12',
    title: 'Tràng An, Ninh Bình',
    place: 'Việt Nam',
    price: '5,200,000 đ/ người',
    time: '10 giờ trước',
    description: 'Di sản thiên nhiên thế giới',
    headerText1: 'Khám phá Danh lam thắng cảnh Tràng An Ninh Bình',
    textHeader1: 'Tràng An là một Khu du lịch sinh thái nằm trong Quần thể di sản thế giới Tràng An thuộc tỉnh Ninh Bình. Nơi đây đã được Chính phủ Việt Nam xếp hạng di tích quốc gia đặc biệt quan trọng và UNESCO công nhận là di sản thế giới kép từ năm 2014 (Di sản Văn hóa và Thiên nhiên). Bài viết này sẽ tổng hợp những thông tin hữu ích nhất cho du khách trong chuyến hành trình du lịch khám phá Tràng An Ninh Bình.',
    headerText2: 'Di chuyển từ Thành Phố Hà Nội đi Mã Phì Lèng',
    textHeader2: 'Xe máy từ 200k đến 500k, Ô tô từ 500k đến 1 triệu',
    HeaderText3: 'Thời điểm thích hợp để khám phá là :',
    textHeader3: '8h sáng đến 17h chiều',
    HeaderText4: 'Nơi ở :',
    textHeader4: 'Đến với nơi đây có rất nhiều lựa chọn về nơi ở cho quý khách như ở HomeStay, khách sạn hay những nhà lưu chú của người dân',
    listSchedule: [
     {
        date: '5/12/2019',
        datetime: 'Ngày 1',
        schedule: [
          {
            idSchedule: '1',
            namePlace: 'Ninh Bình',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
          {
            idSchedule: '2',
            namePlace: 'Đền Thánh Cao Sơn',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData2
          }, {
            idSchedule: '3',
            namePlace: 'Tràng An',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData3
          }, {
            idSchedule: '4',
            namePlace: 'Cố đô Hoa Lư',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData4
          },
        ]
      },
      {
        date: '6/12/2019',
        datetime: 'Ngày 2',
        schedule: [
          {
            idSchedule: '1',
            namePlace: 'Chùa Bái Đính',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData5
          },
          {
            idSchedule: '2',
            namePlace: 'Tam Cốc Bích Động',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData6
          }, {
            idSchedule: '3',
            namePlace: 'Rừng Cúc Phương',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData7
          }
        ]
      },
       {
        date: '7/12/2019',
        datetime: 'Ngày 3',
        schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
          {
            idSchedule: '2',
            namePlace: 'Làng chài Nhơn Hải',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData2
          }, {
            idSchedule: '3',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData3
          }, {
            idSchedule: '4',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData4
          },
        ]
      },
      {
        date: '8/12/2019',
        datetime: 'Ngày 4',
        schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
          {
            idSchedule: '2',
            namePlace: 'Làng chài Nhơn Hải',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData2
          }, {
            idSchedule: '3',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData3
          }, {
            idSchedule: '4',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData4
          },
          
        ]
      },
    ]

  },
  {
    id: '2',
    imageTopLeft: images.SCHEDULE_DATA31,
    imageTopRight: images.SCHEDULE_DATA32,
    imageTopLeftBottom: images.SCHEDULE_DATA33,
    imageTopRightBottom: images.SCHEDULE_DATA34,
    durationTime: '5/12 - 10/12',
    title: 'Hà Giang ơi ơii!',
    place: 'Việt Nam',
    price: '5,200,000 đ/ người',
    time: '10 giờ trước',
    description: 'Mảnh đất thiên nhiên đất trời',
    headerText1: 'Khám phá những con đèo độc nhất vô nhị của Việt Nam',
    textHeader1: 'Đèo Mã Pì Lèng hay còn gọi là Mả Pí Lèng, Mã Pỉ Lèng (nghĩa là “sống mũi con ngựa”) được mệnh danh là vua của các con đèo ở vùng núi Tây Bắc, là cung đường đèo hiểm trở dài khoảng 20km, thuộc xã Pả Vi và Pải Lủng, huyện Mèo Vạc và xã Tả Lủng huyện Đồng Văn.',
    headerText2: 'Di chuyển từ Thành Phố Hà Nội đi Mã Phì Lèng',
    textHeader2: 'Xe máy từ 200k đến 500k, Ô tô từ 500k đến 1 triệu',
    HeaderText3: 'Thời điểm thích hợp để khám phá là :',
    textHeader3: '8h sáng đến 17h chiều',
    HeaderText4: 'Nơi ở :',
    textHeader4: 'Đến với nơi đây có rất nhiều lựa chọn về nơi ở cho quý khách như ở HomeStay, khách sạn hay những nhà lưu chú của người dân',
    listSchedule: [
      {
         date: '5/12/2019',
         datetime: 'Ngày 1',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Hà Giang',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData8
          },
          {
            idSchedule: '2',
            namePlace: 'Cổng Trời Quản Bạ',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData9
          }, {
            idSchedule: '3',
            namePlace: 'Dinh thự họ Vương',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData10
          }, {
            idSchedule: '4',
            namePlace: 'Cột Cờ Lũng Cú',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData11
          },
         ]
       },
       {
         date: '6/12/2019',
         datetime: 'Ngày 2',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Pú Đao',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData13
          },
          {
            idSchedule: '2',
            namePlace: 'Quản Bạ',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData14
          },
         ]
       },
        {
         date: '7/12/2019',
         datetime: 'Ngày 3',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Đồng Văn -Lũng Cú',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData15
          },
          {
            idSchedule: '2',
            namePlace: 'Đồng Văn -Lũng Cú',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData17
          },
         
         ]
       },
       {
         date: '8/12/2019',
         datetime: 'Ngày 4',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Quay trở về thành phố Hà Giang',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData16
          },
         
         ]
       },
     ]

  },
  {
    id: '3',
    imageTopLeft: images.SCHEDULE_DATA5,
    imageTopRight: images.SCHEDULE_DATA6,
    imageTopLeftBottom: images.SCHEDULE_DATA7,
    imageTopRightBottom: images.SCHEDULE_DATA8,
    durationTime: '5/12 - 10/12',
    title: 'Bái Đính, Ninh Bình',
    place: 'Việt Nam',
    price: '5,200,000 đ/ người',
    time: '10 giờ trước',
    description: 'Cuội nguồn của Phật Giáo VN',
    headerText1: 'Dõi theo cuội nguồn Phật giáo Việt Nam',
    textHeader1: 'Chùa Bái Đính là một danh thắng tâm linh nằm trong quần thể khu du lịch sinh thái Bái Đính – Tràng An với bề dày lịch sử hơn 1000 năm tuổi gắn với vùng đất của nhiều triều đại phong kiến từ nhà Đinh, nhà Tiền Lê đến nhà Lý. Cùng khám phá những kinh nghiệm đi chùa Bái Đính – đệ nhất danh thắng tâm linh ở Ninh Bình ',
    headerText2: 'Di chuyển từ Thành Phố Hà Nội đi Mã Phì Lèng',
    textHeader2: 'Xe máy từ 200k đến 500k, Ô tô từ 500k đến 1 triệu',
    HeaderText3: 'Thời điểm thích hợp để trải nghiệm và học hỏi là :',
    textHeader3: '8h sáng đến 17h chiều',
    HeaderText4: 'Nơi ở :',
    textHeader4: 'Đến với không gian học Phật giáo, bạn có thể xin lưu trú lại trù hoặc ở các nhà lều dưới chân chùa. Hi vọng sẽ mang lại cho bạn nhiều trải nghiệm quý giá và học hỏi được cho bản thân mình khi ở lại chùa vào ban đêm để tu dưỡng, tĩnh tâm một cách dễ dàng',
    listSchedule: [
      {
         date: '5/12/2019',
         datetime: 'Ngày 1',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Thăm quan chùa Bái Đính',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData18
          },
          {
            idSchedule: '2',
            namePlace: 'thăm quan chùa',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData19
          }, {
            idSchedule: '3',
            namePlace: 'Tam Cốc',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData20
          }, {
            idSchedule: '1',
            namePlace: 'Hang Múa',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData21
          },
         ]
       },
       {
         date: '6/12/2019',
         datetime: 'Ngày 2',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData21
          },
          {
            idSchedule: '2',
            namePlace: 'Làng chài Nhơn Hải',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData2
          }, {
            idSchedule: '3',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData3
          }, {
            idSchedule: '4',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData4
          },
         ]
       },
        {
         date: '7/12/2019',
         datetime: 'Ngày 3',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
          {
            idSchedule: '2',
            namePlace: 'Làng chài Nhơn Hải',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData2
          }, {
            idSchedule: '3',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData3
          }, {
            idSchedule: '4',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData4
          },
         ]
       },
       {
         date: '8/12/2019',
         datetime: 'Ngày 4',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
          {
            idSchedule: '2',
            namePlace: 'Làng chài Nhơn Hải',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData2
          }, {
            idSchedule: '3',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData3
          }, {
            idSchedule: '4',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData4
          },
         ]
       },
     ]

  },
  {
    id: '4',
    imageTopLeft: images.SCHEDULE_DATA9,
    imageTopRight: images.SCHEDULE_DATA10,
    imageTopLeftBottom: images.SCHEDULE_DATA11,
    imageTopRightBottom: images.SCHEDULE_DATA12,
    durationTime: '5/12 - 10/12',
    title: 'Chùa Đồng, Yên Tử',
    place: 'Việt Nam',
    price: '5,200,000 đ/ người',
    time: '10 giờ trước',
    description: 'Di tích lịch sử của Quốc gia',
    headerText1: 'Khám phá Di tích lịch sử của Quốc gia',
    textHeader1: 'Chùa Đồng là địa điểm nổi tiếng nhất trong quần thể di tích danh thắng Yên Tử (Quảng Ninh), là đích đến của mọi tăng ni, phật tử, du khách thập phương khi hành hương về đất thiêng Yên Tử. Theo quan niệm của các tăng ni, phật tử, chùa Đồng là nơi con người có thể cầu viện được "sinh lực vũ trụ” cho mọi mặt cuộc đời.',
    headerText2: 'Di chuyển từ Thành Phố Hà Nội đi Mã Phì Lèng',
    textHeader2: 'Xe máy từ 200k đến 500k, Ô tô từ 500k đến 1 triệu',
    HeaderText3: 'Thời điểm thích hợp để khám phá là :',
    textHeader3: '8h sáng đến 17h chiều',
    HeaderText4: 'Nơi ở :',
    textHeader4: 'Đến với không gian học Phật giáo, bạn có thể xin lưu trú lại trù hoặc ở các nhà lều dưới chân chùa. Hi vọng sẽ mang lại cho bạn nhiều trải nghiệm quý giá và học hỏi được cho bản thân mình khi ở lại chùa vào ban đêm để tu dưỡng, tĩnh tâm một cách dễ dàng',
    listSchedule: [
      {
         date: '5/12/2019',
         datetime: 'Ngày 1',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
          {
            idSchedule: '2',
            namePlace: 'Làng chài Nhơn Hải',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData2
          }, {
            idSchedule: '3',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData3
          }, {
            idSchedule: '4',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData4
          },
         ]
       },
       {
         date: '6/12/2019',
         datetime: 'Ngày 2',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
          {
            idSchedule: '2',
            namePlace: 'Làng chài Nhơn Hải',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData2
          }, {
            idSchedule: '3',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData3
          }, {
            idSchedule: '4',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData4
          },
         ]
       },
        {
         date: '7/12/2019',
         datetime: 'Ngày 3',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
          {
            idSchedule: '2',
            namePlace: 'Làng chài Nhơn Hải',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData2
          }, {
            idSchedule: '3',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData3
          }, {
            idSchedule: '4',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData4
          },
         ]
       },
       {
         date: '8/12/2019',
         datetime: 'Ngày 4',
         schedule: [
          {
            idSchedule: '1',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData1
          },
          {
            idSchedule: '2',
            namePlace: 'Làng chài Nhơn Hải',
            durationGo: '1 giờ',
            distanCar: '17 km',
            timeStart: '8:15',
            image: images.DetailData2
          }, {
            idSchedule: '3',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData3
          }, {
            idSchedule: '4',
            namePlace: 'Tháp đôi',
            durationGo: '45 phút',
            distanCar: '17 km',
            timeStart: '7:00',
            image: images.DetailData4
          },
           
         ]
       },
     ]

  },
]

export const dataListPoPularPlace = [
  {
    id: '1',
    title: 'Rừng Dừa Bảy Mẫu',
    image: images.SCHEDULE_DATA15,
    place: 'Quảng Nam, Việt Nam',
    price: '2.500.000đ'
  },
  {
    id: '2',
    title: 'Cầu Tình Yêu',
    image: images.SCHEDULE_DATA14,
    place: 'Đà Nẵng, Việt Nam',
    price: '2.500.000đ'
  },
  {
    id: '3',
    title: 'Cá Chép Hoá Rồng',
    image: images.SCHEDULE_DATA13,
    place: 'Đà Nẵng, Việt Nam',
    price: '2.500.000đ'
  },
  {
    id: '4',
    title: 'Lý Sơn, Quảng Ngãi',
    image: images.SCHEDULE_DATA24,
    place: 'Quảng Ngãi, Việt Nam',
    price: '2.500.000đ'
  },
]

export const dataSpecialExperience = [
  {
    id: '1',
    image: images.SCHEDULE_DATA18,
    title: 'Hà Giang ơi !',
    place: 'Hà Giang, Việt Nam',
    price: '2.000.000đ'
  },
  {
    id: '2',
    image: images.SCHEDULE_DATA16,
    title: 'Ngắm bình minh Phú Yên',
    place: 'Phú Yên, Việt Nam',
    price: '3.000.000đ'
  },
  {
    id: '3',
    image: images.SCHEDULE_DATA17,
    title: 'Phú Quốc trong tôi',
    place: 'Kiên Giang, Việt Nam',
    price: '1.000.000đ'
  },
 
  {
    id: '4',
    image: images.SCHEDULE_DATA25,
    title: 'Cầu Thê Húc',
    place: 'Hà Nội, Việt Nam',
    price: '2.500.000đ'
  }
]

export const Destination12 = [
  {
    id: '1',
    title: 'Hà Giang',
    image: images.SCHEDULE_DATA19,
  },
  {
    id: '2',
    title: 'Phú Quốc',
    image: images.SCHEDULE_DATA22,
  },
  {
    id: '3',
    title: 'Đền Hùng',
    image: images.SCHEDULE_DATA21,
  },
  {
    id: '4',
    title: 'Lý Sơn, Quảng Ngãi',
    image: images.SCHEDULE_DATA23,
  },
]

export const dataResortHotel = [
  {
    id: '1',
    title: 'The Herriott Hotel & Suite',
    headerTtile: 'Khách sạn',
    place: 'Phước Mỹ, Đà Nẵng',
    price: '500,000 đ/ đêm',
    image: images.HOTEL,
    image1: images.HOTELROSRT,
    image2: images.HOTELROSRT1,
    imag3: images.HOTELROSRT2
  },
  {
    id: '1',
    title: 'The Marrios Thach That',
    headerTtile: 'Khách sạn',
    place: 'Thạch Thất, Hà Nội',
    price: '300,000 đ/ đêm',
    image: images.SCHEDULE_DATA26,
    image1: images.HOTELROSRT,
    image2: images.HOTELROSRT1,
    imag3: images.HOTELROSRT2
  },
  {
    id: '1',
    title: 'Hoa Lac Resort',
    headerTtile: 'Khách sạn',
    place: 'Thạch Thất, Hà Nội',
    price: '200,000 đ/ đêm',
    image: images.HOTEL,
    image1: images.HOTELROSRT,
    image2: images.HOTELROSRT1,
    imag3: images.HOTELROSRT2
  },
];
