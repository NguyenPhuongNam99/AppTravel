import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import Header from '../../../../components/header/Header';

const PrivacyPolicy = () => {
  return (
    <ScrollView style={styles.view}>
      <View style={styles.container}>
        <Header title="Chính sách bảo mật" />

        <View style={{width: '100%', paddingHorizontal: 16, marginTop: 20}}>
          <Text>
            Chính sách Bảo mật ("sau đây gọi tắt là Chính Sách") quy định cách
            OKGO (sau đây gọi là "Chúng tôi") thu thập, sử dụng và chia sẻ thông
            tin về khách hàng khi khách hàng truy cập và tương tác với Trang Web
            (từ máy tính, thiết bị di động) và ứng dụng di động của Chúng tôi
            (sau đây gọi chung là "Trang Web") hoặc các phương thức khác có liên
            kết đến Trang Web của Chúng tôi (như liên hệ nhóm chăm sóc khách
            hàng qua chat hoặc email). Tùy từng thời điểm, OKGO có thể sửa đổi
            Chính sách Bảo mật để tương thích với những thay đổi về pháp luật,
            các thực tiễn thu thập và sử dụng Thông tin Cá nhân của Chúng tôi,
            các tính năng của Trang Web, hoặc những tiến bộ về công nghệ. Nếu
            Chúng tôi thực hiện các sửa đổi mà làm thay đổi cách thức Chúng tôi
            thu thập hoặc sử dụng Thông tin Cá nhân của Người dùng, thì những
            sửa đổi đó sẽ được đăng trong Chính sách Bảo mật này và ngày có hiệu
            lực sẽ được nêu ở ngay phần đầu trang. Vì vậy, Người dùng nên xem
            một cách định kỳ Chính sách Bảo mật này để được cập nhật về các
            chính sách và thực tiễn hiện hành của Chúng tôi. 1. Thông tin Chúng
            tôi thu thập "Thông tin Cá nhân" có thể được hiểu là dữ liệu, cho dù
            là đúng hoặc không đúng, về một cá nhân có thể được nhận dạng từ dữ
            liệu đó, hoặc từ dữ liệu và các thông tin khác mà OKGO có được hoặc
            có quyền truy cập. Nói cách khác là thông tin về bạn, bao gồm nhưng
            không giới hạn tên, quốc tịch, địa chỉ, số điện thoại, email, thông
            tin đăng nhập, thông tin công ty (tùy chọn trong việc xuất hóa đơn),
            thông tin xoay quanh về việc đặt Dịch vụ (như thời gian lưu trú, tên
            khách sạn, số phòng, tên hãng hàng không sử dụng, ngày khởi hành,
            ngày về,...). Chúng tôi cũng có thể yêu cầu Người dùng cung cấp
            thông tin về sở thích du lịch, và phản hồi về những trải nghiệm du
            lịch của Người dùng thông qua việc đặt Dịch vụ của Người dùng trên
            Trang Web. Chúng tôi cũng thu thập thông tin không nhận dạng cá nhân
            (thông tin không thể sử dụng để nhận dạng Người dùng), bao gồm nhưng
            không giới hạn ở địa chỉ IP, dữ liệu về vị trí địa lý, loại hệ điều
            hành, ưu tiên tìm kiếm, cũng như dữ liệu liên quan đến việc sử dụng
            Internet nói chung. Khi bạn đặt Dịch vụ cùng các Người dùng khác và
            cung cấp thông tin của người đó cho Chúng tôi theo yêu cầu của việc
            đặt Dịch vụ, hoặc bạn đang đặt Dịch vụ giúp người khác, bạn
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PrivacyPolicy;
