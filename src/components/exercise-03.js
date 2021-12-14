import './exercise-03.css';
import React from 'react';

class Exercise03 extends React.Component {
  
    render() {
      return (
        <table id="timeTable" cellspacing="0">
            <tr>
                <th></th>
                <th>Thứ 2</th>
                <th>Thứ 3</th>
                <th>Thứ 4</th>
                <th>Thứ 5</th>
                <th>Thứ 6</th>
                <th>Thứ 7</th>
                <th>Chủ Nhật</th>
            </tr>
            <tr>
                <th>Sáng</th>
                <td>Học ngôn ngữ</td>
                <td>Học ngôn ngữ</td>
                <td>Học ngôn ngữ</td>
                <td>Học ngôn ngữ</td>
                <td>Học ngôn ngữ</td>
                <td>Học ngôn ngữ</td>
                <td>Nghỉ</td>
            </tr>
            <tr>
                <th>Trưa</th>
                <td>Làm việc</td>
                <td>Làm việc</td>
                <td>Làm việc</td>
                <td>Làm việc</td>
                <td>Làm việc</td>
                <td>Làm việc</td>
                <td>Làm việc</td>
            </tr>
            <tr>
                <th>Chiều</th>
                <td>Làm việc</td>
                <td>Học</td>
                <td>Làm việc</td>
                <td>Học</td>
                <td>Làm việc</td>
                <td>Học</td>
                <td>Làm việc</td>
            </tr>
        </table>
      );
    }
  }

export default Exercise03;