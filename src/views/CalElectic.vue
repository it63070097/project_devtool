<template>
    <div class="wrapper">
      <div class="sidebar">
        <h2 class="txt-logo">logo</h2>
        <ul>
          <router-link to="/home"><li><a href="#"><i class="fas fa-user"></i>Home</a></li></router-link>
          <!-- <li><a href="#"><i class="fas fa-home"></i>Home</a></li> -->
          <li id="select"><a href="#"><i class="fas fa-user"></i>คำนวนค่าไฟฟ้า</a></li>
          <router-link to="/calair"><li><a href="#"><i class="fas fa-address-card"></i>เครื่องปรับอากาศ</a></li></router-link>
          
          <li><a href="#"><i class="fas fa-project-diagram"></i>ทริคการประหยัดไฟ</a></li>
        </ul>
        <!-- <div class="social_media">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
        </div> -->
      </div>
      <div class="main_content">
        <div class="header">
          <div class="box">
            <p>กำหนดค่า</p>
            <div class="columns">
              <div class="column" style="text-align: center;">
                <div class="field">
                  <label class="label">ค่าโวลท์ ภายในบ้านของคุณ</label>
                  <div class="control">
                    <div class="select">
                      <select>
                        <option></option>
                        <option>With options</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column" style="text-align: center;">
                <div class="field">
                  <label class="label">ค่าไฟ / หน่วย </label>
                  <div class="control">
                    <input class="input" type="text" placeholder="Text input">
                  </div>
                </div>
              </div>
              <div class="column" style="text-align: center;">
                <div class="field">
                  <label class="label">เริ่มคำนวนในเดือน</label>
                  <div class="control">
                    <div class="select">
                      <select>
                        <option></option>
                        <option>With options</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="info">
            <button class="button" @click="addList">+</button>
            <div class="box">
                
                <div class="columns">
              <div class="column" style="text-align: center;">
                <div class="field">
                  <label class="label">ชื่อ</label>
                  <div class="control">
                    <div class="select">
                      <select>
                        <option></option>
                        <option>With options</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column" style="text-align: center;">
                <div class="field">
                  <label class="label">กำลังไฟ(วัด)</label>
                  <div class="control">
                    <input class="input" type="text" placeholder="Text input">
                  </div>
                </div>
              </div>
              <div class="column" style="text-align: center;">
                <div class="field">
                  <label class="label">จำนวน</label>
                  <div class="control">
                    <input class="input" type="number" placeholder="Text input">
                  </div>
                </div>
              </div>
              <div class="column" style="text-align: center;">
                <div class="field">
                  <label class="label">เวลา</label>
                  <div class="control">
                    <input class="input" type="number" placeholder="Text input">
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>

    




  </template>
  
  <script>
  
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Josefin Sans', sans-serif;
  }
  
  body {
    background-color: #f3f5f9;
  }
  
  .wrapper {
    display: flex;
    position: relative;
  }
  
  .sidebar {
    width: 250px;
    height: 100%;
    background: #0e0d10;
    padding: 30px 0px;
    position: fixed;
  }
  
  .txt-logo {
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .sidebar li {
    text-align: center;
    padding: 15px;
    /* background-color: #717171; */
    width: 200px;
    margin-left: 25px;
    /* border-bottom: 5px solid #bdb8d7; */
    /* border-bottom: 4px solid rgba(255, 255, 255); */
    /* border-top: 1px solid rgba(255,255,255,0.05); */
  }
  
  .sidebar a {
    color: #ffffff;
    display: block;
  }
  
  #select {
    background-color: #54c687;
    border-radius: 10px;
  }
  
  #select a {
    color: #0e0d10;
  }
  
  /* .wrapper .sidebar ul li a .fas{
    width: 25px;
  } */
  
  .sidebar li:hover {
    /* border: 1px solid #54c687; */
    /* border-top: 1px solid #54c687; */
    /* border-bottom: 1px solid #54c687; */
    /* border-radius: 10px; */
  
    /* background-color: #dcdcdc; */
  }
  
  .wrapper .sidebar ul li:hover a {
    color: #54c687;
    ;
  }
  
  /* .wrapper .sidebar .social_media{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
  } */
  
  /* .wrapper .sidebar .social_media a{
    display: block;
    width: 40px;
    background: #594f8d;
    height: 40px;
    line-height: 45px;
    text-align: center;
    margin: 0 5px;
    color: #bdb8d7;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  } */
  
  .main_content {
    width: 100%;
    margin-left: 250px;
  }
  
  .header {
    padding: 100px;
    background: #fff;
    /* color: #717171; */
    /* border-bottom: 1px solid #e0e4e8; */
  }
  
  .header .box {
    background-color: #66656758;
  }
  
  .box p {
    font-size: 30px;
    font-weight: bold;
  }
  
  
  .info {
    margin: 20px;
    color: #717171;
    line-height: 25px;
  }
  
  
  /* 
  .wrapper .main_content .info div {
    margin-bottom: 20px;
  } */
  </style>
  