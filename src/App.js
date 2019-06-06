import React from "react";
import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="watch-body">
      <header className="watch-header-container">
        <div className="watch-header">
          <div className="watch-logo">
            <span className="watch-logo-text">ไทยโพลิทิคเชี่ยน.วอช</span>
            <span className="watch-beta-tag" />
            <span className="watch-menu-item">สนับสนุนเว็บไซต์</span>
            <span className="watch-menu-item">การพัฒนา</span>
            <span className="watch-menu-item">หลักการจัดการข้อมูล</span>
          </div>
        </div>
      </header>
      <div className="watch-header-topic">
        สรุปผลการลงคะแนนเสียงเลือกนายกรัฐมนตรีคนที่ ๓๐
      </div>
      <div className="watch-header-filter-label">การลงคะแนน</div>
      <div className="watch-header-filter">
        <button className="watch-filter">เลือก พล.อ.ประยุทธ์ จันโอชา</button>
        <button className="watch-filter">เลือก ธนาธร จึงรุงเรืองกิจ</button>
        <button className="watch-filter">งดออกเสียง และอื่นๆ</button>
      </div>
      <div className="watch-header-filter-label">สังกัด</div>
      <div className="watch-header-filter">
        <button className="watch-filter">พรรคพลังประชารัฐ</button>
        <button className="watch-filter">พรรคเพื่อไทย</button>
        <button className="watch-filter">พรรคอนาคตใหม่</button>
        <button className="watch-filter">พรรคภูมิใจไทย</button>
        <button className="watch-filter">พรรคประชาธิปัตย์</button>
        <button className="watch-filter">พรรคชาติพัฒนา</button>
        <button className="watch-filter">พรรคอื่นๆ</button>
        <button className="watch-filter">ไม่สังกัดพรรค</button>
      </div>
      <div className="watch-header-filter-label">ที่มา</div>
      <div className="watch-header-filter">
        <button className="watch-filter">สมาชิกสภาผู้แทนราษฎรที่มาจากการเลือกตั้ง</button>
        <button className="watch-filter">สมาชิกสภาผู้แทนราษฎรระบบปาร์ตี้ลิสต์</button>
        <button className="watch-filter">สมาชิกวุฒิสภาที่มากจากการแต่งตั้งโดย คสช.</button>
      </div>
      <div className="watch-header-filter-label">ตัวเลือกอื่นๆ</div>
      <div className="watch-header-filter">
        <button className="watch-filter">เปลี่ยนท่าทีหลังจากที่ได้รับเลือก</button>
        <button className="watch-filter">ลงคะแนนเสียงสวนทางกับมติพรรค</button>
      </div>
      <div className="watch-result-container">
        <div className="watch-result-card">
          <div className="watch-potrait" />
          <div id="cardname">ชื่อ</div>
          <div id="cardsurname">นามสกุล</div>
          <div id="cardposition">ตำแหน่งและที่มา</div>
          <div id="cardparty">สังกัดพรรค</div>
        </div>
        <div className="watch-result-card">
          <div className="watch-potrait" />
          <div id="cardname">ชื่อ</div>
          <div id="cardsurname">นามสกุล</div>
          <div id="cardposition">ตำแหน่งและที่มา</div>
          <div id="cardparty">สังกัดพรรค</div>
        </div>
        <div className="watch-result-card">
          <div className="watch-potrait" />
          <div id="cardname">ชื่อ</div>
          <div id="cardsurname">นามสกุล</div>
          <div id="cardposition">ตำแหน่งและที่มา</div>
          <div id="cardparty">สังกัดพรรค</div>
        </div>
        <div className="watch-result-card">
          <div className="watch-potrait" />
          <div id="cardname">ชื่อ</div>
          <div id="cardsurname">นามสกุล</div>
          <div id="cardposition">ตำแหน่งและที่มา</div>
          <div id="cardparty">สังกัดพรรค</div>
        </div>
        <div className="watch-result-card">
          <div className="watch-potrait" />
          <div id="cardname">ชื่อ</div>
          <div id="cardsurname">นามสกุล</div>
          <div id="cardposition">ตำแหน่งและที่มา</div>
          <div id="cardparty">สังกัดพรรค</div>
        </div>
        <div className="watch-result-card">
          <div className="watch-potrait" />
          <div id="cardname">ชื่อ</div>
          <div id="cardsurname">นามสกุล</div>
          <div id="cardposition">ตำแหน่งและที่มา</div>
          <div id="cardparty">สังกัดพรรค</div>
        </div>
        <div className="watch-result-card">
          <div className="watch-potrait" />
          <div id="cardname">ชื่อ</div>
          <div id="cardsurname">นามสกุล</div>
          <div id="cardposition">ตำแหน่งและที่มา</div>
          <div id="cardparty">สังกัดพรรค</div>
        </div>
        <div className="watch-result-card">
          <div className="watch-potrait" />
          <div id="cardname">ชื่อ</div>
          <div id="cardsurname">นามสกุล</div>
          <div id="cardposition">ตำแหน่งและที่มา</div>
          <div id="cardparty">สังกัดพรรค</div>
        </div>
        <div className="watch-result-card">
          <div className="watch-potrait" />
          <div id="cardname">ชื่อ</div>
          <div id="cardsurname">นามสกุล</div>
          <div id="cardposition">ตำแหน่งและที่มา</div>
          <div id="cardparty">สังกัดพรรค</div>
        </div>
        <div className="watch-result-card">
          <div className="watch-potrait" />
          <div id="cardname">ชื่อ</div>
          <div id="cardsurname">นามสกุล</div>
          <div id="cardposition">ตำแหน่งและที่มา</div>
          <div id="cardparty">สังกัดพรรค</div>
        </div>
        <div className="watch-result-card">
          <div className="watch-potrait" />
          <div id="cardname">ชื่อ</div>
          <div id="cardsurname">นามสกุล</div>
          <div id="cardposition">ตำแหน่งและที่มา</div>
          <div id="cardparty">สังกัดพรรค</div>
        </div>
        <div className="watch-result-card">
          <div className="watch-potrait" />
          <div id="cardname">ชื่อ</div>
          <div id="cardsurname">นามสกุล</div>
          <div id="cardposition">ตำแหน่งและที่มา</div>
          <div id="cardparty">สังกัดพรรค</div>
        </div>
        <div className="watch-result-card">
          <div className="watch-potrait" />
          <div id="cardname">ชื่อ</div>
          <div id="cardsurname">นามสกุล</div>
          <div id="cardposition">ตำแหน่งและที่มา</div>
          <div id="cardparty">สังกัดพรรค</div>
        </div>
        <div className="watch-result-card">
          <div className="watch-potrait" />
          <div id="cardname">ชื่อ</div>
          <div id="cardsurname">นามสกุล</div>
          <div id="cardposition">ตำแหน่งและที่มา</div>
          <div id="cardparty">สังกัดพรรค</div>
        </div>
        <div className="watch-result-card">
          <div className="watch-potrait" />
          <div id="cardname">ชื่อ</div>
          <div id="cardsurname">นามสกุล</div>
          <div id="cardposition">ตำแหน่งและที่มา</div>
          <div id="cardparty">สังกัดพรรค</div>
        </div>
        <div className="watch-result-card">
          <div className="watch-potrait" />
          <div id="cardname">ชื่อ</div>
          <div id="cardsurname">นามสกุล</div>
          <div id="cardposition">ตำแหน่งและที่มา</div>
          <div id="cardparty">สังกัดพรรค</div>
        </div>
        <div className="watch-result-card">
          <div className="watch-potrait" />
          <div id="cardname">ชื่อ</div>
          <div id="cardsurname">นามสกุล</div>
          <div id="cardposition">ตำแหน่งและที่มา</div>
          <div id="cardparty">สังกัดพรรค</div>
        </div>
        <div className="watch-result-card">
          <div className="watch-potrait" />
          <div id="cardname">ชื่อ</div>
          <div id="cardsurname">นามสกุล</div>
          <div id="cardposition">ตำแหน่งและที่มา</div>
          <div id="cardparty">สังกัดพรรค</div>
        </div>
        <div className="watch-result-card">
          <div className="watch-potrait" />
          <div id="cardname">ชื่อ</div>
          <div id="cardsurname">นามสกุล</div>
          <div id="cardposition">ตำแหน่งและที่มา</div>
          <div id="cardparty">สังกัดพรรค</div>
        </div>
        <div className="watch-result-card">
          <div className="watch-potrait" />
          <div id="cardname">ชื่อ</div>
          <div id="cardsurname">นามสกุล</div>
          <div id="cardposition">ตำแหน่งและที่มา</div>
          <div id="cardparty">สังกัดพรรค</div>
        </div>
      </div>
      <div className="watch-footer">
        หากไม่ได้มีข้อกำหนดหรือบ่งชี้ใดๆ
        ข้อมูลทั้งหมดในเว็บไซต์แห่งนี้อยู่ภายใต้สัญญาอนุญาต{" "}
        <a href="https://creativecommons.org/licenses/by/4.0/">
          แสดงที่มา 4.0 ต้นฉบับ (CC BY 4.0)
        </a>{" "}
        รวมถึงอิสระภาพในการเข้าถึงข้อมูลและข้อเท็จจริงเป็นสิทธิขั้นพื้นฐานของประชาชนคนไทยทุกคน
      </div>
    </div>
  );
}

export default App;
