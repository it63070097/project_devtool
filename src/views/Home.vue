<template>
  <!-- <div class="home">Home page</div> -->
  <div class="wrapper">
    <!-- <div class="sidebar">
      <h2 class="txt-logo">logo</h2>
      <ul>
        <li id="select"><a href="#"><i class="fas fa-home"></i>Home</a></li>
        <router-link to="/calelectic">
          <li><a href="#"><i class="fas fa-user"></i>คำนวนค่าไฟฟ้า</a></li>
        </router-link>
        <router-link to="/calair">
          <li><a href="#"><i class="fas fa-address-card"></i>เครื่องปรับอากาศ</a></li>
        </router-link>
        
        <li><a href="#"><i class="fas fa-project-diagram"></i>ทริคการประหยัดไฟ</a></li>

        
      </ul>

    </div> -->
    <div class="main_content">

      <div class="header">
        <h2 class="txt-logo">logo</h2>
      </div>
      <div class="info">
        <p class="name-home">ET ENERGY</p>
        <p class="desc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; . . . ในปัจจุบัน
          ชีวิตประจำวันของเราคงหนีไม่พ้นการใช้ไฟฟ้าไม่ว่าจะเป็นการเปิดไฟ เปิดพัดลม
          หรือว่าในตอนที่เราใช้โทรศัพท์มือถือ เราก็ต้องชาตแบตเมื่อแบตหมด
          ดังนั้นไฟฟ้าถือเป็นสิ่งหนึ่งที่สำคัญกับเราในชีวิตประจำวันมาก
          และพวกคุณรู้กันหรือไม่ว่าไฟฟ้าที่เราใช้กันมีราคาเท่าไรกันบ้าง ET Energy ของเราจะคำนวนให้พวกคุณเอง . . .</p>
      </div>
      <div class="columns">
        <div class="column is-2 is-offset-2">
          <div class="box-left border-gradient-bl has-text-centered" id="box-1">
            <div class="pic-bl">
              <router-link to="/calelectic">
              <img
                src="../assets/elelctic.png"
                alt=""
                width="50"
                height="50"
              /><br/>
            </router-link>
            </div>
            <p>calulator electic cost</p>
            <p>ช่วยให้คุณคำนวนค่าไฟ... ลองคล๊กที่รูปสายฟ้าแล้วไปคำนวนกันเลย</p>
          </div>
        </div>

        <div class="column is-2">
          <div class="box-left border-gradient-br has-text-centered" id="box-1">
            <div class="pic-bl">
              <router-link to="/calair">
              <img
                src="../assets/air.png"
                alt=""
                width="50"
                height="50"
              /><br/>
            </router-link>
            </div>
            <p>calulator electic cost</p>
            <p>ช่วยให้คุณคำนวนค่าไฟ... ลองคล๊กที่รูปสายฟ้าแล้วไปคำนวนกันเลย</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
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
  /* background-color: #f3f5f9; */
  background-image: linear-gradient(to bottom,
      rgba(18, 18, 17, 0.5),
      rgba(220, 228, 199, 0.5)), url("../assets/bg_1.jpg");
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;

}

.wrapper {
  display: flex;
  position: relative;
}

.sidebar {
  width: 250px;
  height: 100%;
  background: linear-gradient(to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(238, 240, 208, 0.2));
  /* background: rgb(0, 0, 0, 0.2); */
  opacity: 20;
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
  margin-bottom: 10px;
  /* border-bottom: 5px solid #bdb8d7; */
  /* border-bottom: 4px solid rgba(255, 255, 255); */
  /* border-top: 1px solid rgba(255,255,255,0.05); */
}

.sidebar a {
  color: #ffffff;
  display: block;
}

#select {
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 2px solid rgb(125, 122, 122);
}

#select a {
  color: #ffffff;
}

/* .wrapper .sidebar ul li a .fas{
  width: 25px;
} */

.sidebar li:hover {
  /* border: 1px solid #54c687; */
  /* border-top: 1px solid #54c687; */
  /* border-bottom: 1px solid #54c687; */
  /* border-radius: 10px; */
  /* width: 400px; */
  /* background-color: #c1c1c1; */
  border-radius: 10px;
  border: 2px solid rgb(125, 122, 122);
}

.wrapper .sidebar ul li:hover a {
  /* color: #000000; */


}

.wrapper .main_content {
  width: 100%;
  /* margin-left: 250px; */

}

.main_content .header {
  padding-top: 50px;
  /* background: #fff; */
  /* color: #717171; */
  border-bottom: 1px solid #e0e4e8;
}

.wrapper .main_content .info {
  margin-top: 5%;
  margin-left: 10%;
  color: #717171;
  /* line-height: 25px; */
  /* background-color: #0e0d10; */
}

/* .wrapper .main_content .info div {
  margin-bottom: 20px;
} */

.name-home {
  font-size: 40px;
  color: rgb(255, 255, 255);
  font-weight: bold;
}

.desc {
  color: #000;
  width: 50%;
}


.columns {
  text-align: center;
  /* background-color: #000; */
}

.box-left {
  background-color: rgba(230, 206, 206, 0);
  /* border: 3px solid rgba(0, 0, 0, 0.323); */
  border: 3px solid;
  border-image-slice: 1;
  padding: 10px;

}
.border-gradient-bl {
  border-image-source: linear-gradient(to right, #000000, #3d3d3d);
}
.border-gradient-br {
  border-image-source: linear-gradient(to left, #000000, #3d3d3d);
}


.pic-bl{
  transform: scale(1);
  transition: transform 1s;
  /* text-align: center; */
  opacity: 0.6;
}
.pic-bl:hover{
  transform: scale(1.1);
  opacity: 0.7;
}
</style>

