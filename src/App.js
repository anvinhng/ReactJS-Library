import './App.css';
import Exercise02 from './components/exercise-02';
import Exercise03 from './components/exercise-03';

function App() {
  return (
    <>
    <table id="idCard">
      <tr>
        <td><img  id="avatar" src="NGUYEN NGOC VINH AN.jpg"></img></td>
        <td id="info">
          <p>Họ tên: Nguyễn Ngọc Vĩnh An</p>
          <p>Giới tính: Nữ</p>
          <p>Địa chỉ: Gò Vấp, TPHCM, Việt Nam</p>
          <p>Số điện thoại: 0933 633 516</p>
          <p>Email: ngngvinh.an@gmail.com</p>
          <p>Facebook/Zalo: Vĩnh An (0933 633 516)</p>
        </td>
      </tr>
    </table>
    <Exercise02/>
    <Exercise03/>
    </>
  );
}

export default App;
