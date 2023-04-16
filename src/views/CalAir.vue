<template>
  <div class="wrapper">
    <!-- <div class="sidebar">
      <h2 class="txt-logo">logo</h2>
      <ul>
        <router-link to="/home">
          <li><a href="#"><i class="fas fa-user"></i>Home</a></li>
        </router-link>
        <router-link to="/calelectic">
          <li><a href="#"><i class="fas fa-user"></i>คำนวนค่าไฟฟ้า</a></li>
        </router-link>
        <li id="select"><a href="#"><i class="fas fa-address-card"></i>เครื่องปรับอากาศ</a></li>
        <li><a href="#"><i class="fas fa-project-diagram"></i>ทริคการประหยัดไฟ</a></li>
      </ul>
    </div> -->
    <div class="main_content">
      <div class="header">
        <router-link to="/home">
          <h2 class="txt-logo">
            logo</h2>
        </router-link>

      </div>
      <div class="info">
        <div class="columns">
          <div class="column is-5 is-offset-1">
            <div class="box" id="test">
              <p>กำหนดค่า</p>

              <div class="columns">
                <div class="column" style="text-align: center;">
                  <div class="field">
                    <label class="label">ค่า BTU</label>
                    
                  </div>
                </div>
                <div class="column" style="text-align: center;">
                  <div class="field">
                    <div class="control">
                      <div class="select">
                        <select v-model="Btu">
                          <option value="9000">9000</option>
                          <option value="12000">12000</option>
                          <option value="15000">15000</option>
                          <option value="18000">18000</option>
                          <option value="20400">20400</option>
                          <option value="22000">22000</option>
                          <option value="24000">24000</option>
                          <option value="25000">25000</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- <div class="column" style="text-align: center;">
                  <div class="field">
                    <label class="label">อุณหภูมิภายในห้อง</label>
                    <label class="label">26</label>
                  </div>
                </div>
                <div class="column" style="text-align: center;">
                  <div class="field">
                    <label class="label">อุณหภูมิภายนอกห้อง</label>
                    <div class="control">
                      <input v-model="temperatureOut" class="input" type="text" placeholder="Text input">
                    </div>
                  </div>
                </div>
                <div class="column" style="text-align: center;">
                  <div class="field">
                    <label class="label">จำนวนการใช้งาน ชั่วโมงต่อวัน</label>
                    <div class="control">
                      <input v-model="time" class="input" type="number" placeholder="Text input">
                    </div>
                  </div>
                </div> -->

              </div>
              <div class="columns">
                <div class="column">
                  <div class="field">
                    <label class="label">อุณหภูมิภายในห้อง</label>
                    <!-- <label class="label">26</label> -->
                  </div>
                </div>
                <div class="column">
                  <div class="field">
                    <!-- <label class="label">อุณหภูมิภายในห้อง</label> -->
                    <label class="label">26</label>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <div class="field">
                    <label class="label">อุณหภูมิภายนอกห้อง</label>
                    <!-- <div class="control">
                      <input v-model="temperatureOut" class="input" type="text" placeholder="Text input">
                    </div> -->
                  </div>
                </div>
                <div class="column">
                  <div class="field">
                    <!-- <label class="label">อุณหภูมิภายนอกห้อง</label> -->
                    <div class="control">
                      <input v-model="temperatureOut" class="input" type="text" placeholder="Text input">
                    </div>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <div class="field">
                    <label class="label">จำนวนการใช้งาน ชั่วโมงต่อวัน</label>
                    <!-- <div class="control">
                      <input v-model="time" class="input" type="number" placeholder="Text input">
                    </div> -->
                  </div>
                </div>
                <div class="column">
                  <div class="field">
                    <!-- <label class="label">จำนวนการใช้งาน ชั่วโมงต่อวัน</label> -->
                    <div class="control">
                      <input v-model="time" class="input" type="number" placeholder="Text input">
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      <div class="info">
        <button class="button" @click="calpriceair()">คำนวนค่าไฟฟ้า</button>
        <p class="title">{{ pricepertemper.toFixed(2) }} บาทต่อเดือน</p>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "CalAir",
  data() {
    return {
      temperatureOut: 0,
      Btu: 0,
      price: 0,
      time: 0,
      unit: 0,
      pricepertemper: 0,
      oldtem: 0,
    }
  },
  methods: {
    calpriceair() {
      this.unit = this.Btu / 15.74 / 1000 * this.time * 30
      if (this.unit <= 15) {
        this.price = this.unit * 2.35
      } else if (this.unit <= 25) {
        this.price = (this.unit - 15) * 3 + 23.5
      } else if (this.unit <= 35) {
        this.price = (this.unit - 25) * 3.24 + 53.5
      } else if (this.unit <= 100) {
        this.price = (this.unit - 35) * 3.62 + 85.9
      } else if (this.unit <= 150) {
        this.price = (this.unit - 100) * 3.71 + 321.2
      } else if (this.unit <= 400) {
        this.price = (this.unit - 150) * 4.22 + 506.7
      } else {
        this.price = (this.unit - 400) * 4.42 + 1561.7
      }
      if (this.temperatureOut == 35) {
        this.pricepertemper = this.price
      }
      if (this.temperatureOut >= 36) {
        this.pricepertemper = this.price + (this.price * 3 / 100)
        this.oldtem = this.pricepertemper
      } if (this.temperatureOut >= 37) {
        this.pricepertemper = this.oldtem + (this.oldtem * 3 / 100)
        this.oldtem = this.pricepertemper
      }
      if (this.temperatureOut >= 38) {
        this.pricepertemper = this.oldtem + (this.oldtem * 3 / 100)
        this.oldtem = this.pricepertemper
      }
      if (this.temperatureOut >= 39) {
        this.pricepertemper = this.oldtem + (this.oldtem * 3 / 100)
        this.oldtem = this.pricepertemper
      }
      if (this.temperatureOut >= 40) {
        this.pricepertemper = this.oldtem + (this.oldtem * 3 / 100)
        this.oldtem = this.pricepertemper
      }
      if (this.temperatureOut >= 41) {
        this.pricepertemper = this.oldtem + (this.oldtem * 3 / 100)
        this.oldtem = this.pricepertemper
      }
    }
  }
}
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
  /* margin-left: 250px; */
}

.header {
  padding-top: 50px;
  /* background: #fff; */
  /* color: #717171; */
  /* border-bottom: 1px solid #e0e4e8; */
}

.header .box {
  /* background-color: #66656758; */
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


#test {
  background-color: #c7a9a99e;
  border: 6px solid rgba(255, 255, 255, 0.5);
  margin-bottom: 100px;
}
</style>
  