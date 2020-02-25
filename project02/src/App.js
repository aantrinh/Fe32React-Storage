import React from 'react';
import './App.css';
// import SinhVien from './component/databinding/sinhVien';
// import Event from './component/databinding/Event.jsx';
// import DemoIf from './component/CauTrucDieuKien_Rerender/DemoIf.jsx'
// import BaiTapState from './component/CauTrucDieuKien_Rerender/baiTapState';
// import DemoVongLap from './component/cauTrucLap/demoVongLap';
// import BaitapVongLap from './component/BaiTap2/baitapVongLap';
import DemoProps from './component/Props/demoProps';
import BaiTapComponent from './component/BaiTap1/BaiTapComponent';
import BaiTapTruyenFunction from './component/Props/BaiTapTruyenFunction/BaiTapTruyenFunction';
import BaiTapGioHang from './component/Props/BaiTapGioHang/BaiTapGioHang';
import BTGioHangRedux from './component/BaiTapRedux/BaiTapGioHang/BTGioHangRedux';
import BaiTapBurger from './component/Props/BaiTapBurger/BaiTapBurger';
import BaiTapForm from './component/BaiTapForm/BaiTapForm';
import DemoHook from './demoHook/demoHook';

function App() {
  return (
    <div className="App">
      {/* <SinhVien/> */}
      {/* <Event/> */}
      {/* <DemoIf/> */}
      {/* <BaiTapState/> */}
      {/* <BaiTapComponent/> */}
      {/* <BaiTapBurger/> */}
      {/* <BaiTapForm/> */}
      <DemoHook/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* <DemoVongLap/> */}
      {/* <BaitapVongLap/> */}
      {/* <DemoProps title={'An'}/> */}
      {/* <BaiTapTruyenFunction/> */}
      {/* < BaiTapGioHang/> */}
      {/* <BTGioHangRedux/> */}
      <br/>
      <br/>
      <br/>


    </div>
  );
}

export default App;
