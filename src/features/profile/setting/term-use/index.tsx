import React from 'react';
import Header from '../../../../components/header/Header';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const TermUse = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Header title="Điều khoản sử dụng" />
        <View style={styles.view}>
          <Text>
            1. Đối tượng tham gia Người dùng được tham gia đặt phòng khách sạn,
            vé máy bay, vé tham quan,... (sau đây gọi chung là “Dịch vụ”) trên
            Trang Web phải từ 18 tuổi trở lên và có năng lực hành vi dân sự đầy
            đủ theo quy định của pháp luật Việt Nam. 2. Phạm vi dịch vụ 2.1
            Thông qua Trang Web, TripHunter cung cấp một nền tảng trực tuyến,
            nơi Người dùng có thể duyệt tìm các hãng hàng không khác nhau,
            và/hoặc nơi lưu trú và phòng ở tạm thời (nếu có), và/hoặc thực hiện
            các dịch vụ khác. Người dùng có thể đặt trên Trang Web các dịch vụ
            do bất kỳ nhà cung cấp dịch vụ (“gọi tắt là Các Nhà Cung Cấp”) cung
            cấp. Bằng cách đưa ra một lệnh đặt chỗ thông qua Trang Web, bạn có
            thể đặt Dịch vụ trên Trang Web của Chúng tôi. Chúng tôi sẽ gửi một
            xác nhận lệnh đặt chỗ qua email xác nhận. 2.2 Chúng tôi cam kết nỗ
            lực hết sức để tất cả thông tin chính xác sẽ được hiển thị trên
            Trang Web. Tuy nhiên, Chúng tôi không đảm bảo rằng tất cả các thông
            tin được cung cấp trên Trang Web là hoàn toàn chính xác, đầy đủ,
            không có bất kỳ lỗi nào hoặc đúng với hiện hành. Vì vậy, Chúng tôi
            bảo lưu quyền từ chối mọi đảm bảo hoặc trách nhiệm liên quan đến
            tính chính xác, đầy đủ, hoàn thiện hoặc sự phù hợp của tất cả nội
            dung đăng tải trên Trang Web. Trong trường hợp phát hiện thông tin
            sai lệch hoặc gây nhầm lẫn, Người dùng vui lòng thông báo ngay cho
            TripHunter để có biện pháp xử lý kịp thời, đảm bảo quyền và lợi ích
            Người dùng. 2.3 Trong những trường hợp có sự thay đổi vì lý do thị
            trường - điều kiện kinh tế hoặc các sự kiện bất khả kháng từ thiên
            nhiên mà có thể dẫn đến những thông tin được cung cấp không chính
            xác hoặc không đúng với thời điểm tra cứu hiện tại thì khi có bất kỳ
            vấn đề gì phát sinh, Bộ phận Chăm sóc Khách hàng của Chúng tôi có
            thể liên hệ để hỗ trợ Người dùng và giải đáp cho các thắc mắc của
            bạn. 2.4 Các dịch vụ trên Trang Web có thể được xếp hạng theo các
            tiêu chuẩn khác nhau, bao gồm theo sao, theo đánh giá chủ quan của
            đa số khách hàng, theo đánh giá dựa trên tiêu chí, đặc tính của từng
            vùng miền,… và có thể được cập nhật hoặc được sửa đổi tại từng thời
            điểm. Các thông tin xếp hạng khách sạn trên Trang Web chỉ nhằm mục
            đích hướng dẫn chung, không đảm bảo tính chính xác của các xếp hạng.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    marginBottom: 20,
  },
  view: {
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 20,
  },
});

export default TermUse;
