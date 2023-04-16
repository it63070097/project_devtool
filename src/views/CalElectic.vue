<template>
  <div class="wrapper">
    <!-- <div class="sidebar">
      <h2 class="txt-logo">logo</h2>
      <ul>
        <router-link to="/home">
          <li><a href="#"><i class="fas fa-user"></i>Home</a></li>
        </router-link>
        <li id="select"><a href="#"><i class="fas fa-user"></i>คำนวนค่าไฟฟ้า</a></li>
        <router-link to="/calair">
          <li><a href="#"><i class="fas fa-address-card"></i>เครื่องปรับอากาศ</a></li>
        </router-link>

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
      <!-- <div class="header">
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
      </div> -->
      <div class="info">
        <div class="columns" style="text-align: center;">
          <div class="column">
            <p class="subtitle" style="color: #d6d4d4fc;">จำนวนยูนิต/เดือน <br> {{ sumunit.toFixed(2) }} unit</p>
          </div>
          <div class="column">
            <p class="subtitle" style="color: #d6d4d4fc;">ราคา/เดือน <br> {{ price.toFixed(2) }} Bath</p>
          </div>
         
        </div>
        <div class="columns">
          <div class="column">
            <p id="test" @click="addList()">+</p>
            <!-- <button class="button" id="test" @click="addList()">+</button> -->
        </div>
        </div>
      
        <div v-if="showmodal" class="box" id="test1">
          <div class="columns">
            <div class="column" style="text-align: center;">
              <div class="field">
                <label class="label" style="color: #d6d4d4fc;">ชื่อ</label>
                <div class="control">
                    <input v-model="addname" class="input" type="text" placeholder="Text input"
                    style="background-color: transparent!important; color: white ">
                  </div>
              </div>
            </div>
            <div class="column" style="text-align: center;">
              <div class="field">
                <label class="label" style="color: #d6d4d4fc;">กำลังไฟ(วัด)</label>
                <div class="control">
                  <input v-model="addpower" class="input" type="number" placeholder="Text input"
                  style="background-color: transparent!important; color: white">
                </div>
              </div>
            </div>
            <div class="column" style="text-align: center;">
              <div class="field">
                <label class="label" style="color: #d6d4d4fc;">จำนวน</label>
                <div class="control">
                  <input v-model="addquantity" class="input" type="number" placeholder="Text input"
                  style="background-color: transparent!important; color: white">
                </div>
              </div>
            </div>
            <div class="column" style="text-align: center;">
              <div class="field">
                <label class="label" style="color: #d6d4d4fc;">เวลา</label>
                <div class="control">
                  <input v-model="addTime" class="input" type="number" placeholder="Text input"
                  style="background-color: transparent!important; color: white">
                </div>
              </div>
            </div>
            <div class="column" style="text-align: center; padding-top: 2%;">
              <div class="field">
                <div class="control">
                  <button class="button" id="test2" @click="submitadd()">ADD</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="box" id="test1">
          <div class="columns" style=" border-bottom: 5px solid rgba(0, 0, 0, 0.5);">
            <div class="column" style="text-align: center;">
              <div class="field">
                <label class="label" style="color: #d6d4d4fc;">ชื่อ</label>
                <!-- <div class="control">
                  <p class="subtitle">{{ value.name }}</p>
                </div> -->
              </div>
            </div>
            <div class="column" style="text-align: center;">
              <div class="field">
                <label class="label" style="color: #d6d4d4fc;">กำลังไฟ(วัด)</label>
                <!-- <div class="control">
                  <p class="subtitle">{{ value.power }}</p>
                </div> -->
              </div>
            </div>
            <div class="column" style="text-align: center;">
              <div class="field">
                <label class="label" style="color: #d6d4d4fc;">จำนวน</label>
                <!-- <div class="control">
                  <p class="subtitle">{{ value.quantity }}</p>
                </div> -->
              </div>
            </div>
            <div class="column" style="text-align: center;">
              <div class="field">
                <label class="label" style="color: #d6d4d4fc;">เวลา</label>
                <!-- <div class="control">
                  <p class="subtitle">{{ value.Time }}</p>
                </div> -->
              </div>
            </div>
            <div class="column" style="text-align: center;">
              <div class="field">
                <label class="label" style="color: #d6d4d4fc;">unit/mouth</label>
                <!-- <div class="control">
                  <p class="subtitle">{{ value.unit }}</p>
                </div> -->
              </div>
            </div>
          </div>

          <div class="columns" v-for="value in electic" :key="value.id" style=" border-bottom: 1px solid rgba(0, 0, 0, 0.5);">
            <div class="column" style="text-align: center;">
              <div class="field">
                <div class="control">
                  <p class="subtitle" style="color: #d6d4d4fc;">{{ value.name }}</p>
                </div>
              </div>
            </div>
            <div class="column" style="text-align: center;">
              <div class="field">
                <div class="control">
                  <p class="subtitle" style="color: #d6d4d4fc;">{{ value.power }}</p>
                </div>
              </div>
            </div>
            <div class="column" style="text-align: center;">
              <div class="field">
                <div class="control">
                  <p class="subtitle" style="color: #d6d4d4fc;">{{ value.quantity }}</p>
                </div>
              </div>
            </div>
            <div class="column" style="text-align: center;">
              <div class="field">
                <div class="control">
                  <p class="subtitle" style="color: #d6d4d4fc;">{{ value.Time }}</p>
                </div>
              </div>
            </div>
            <div class="column" style="text-align: center;">
              <div class="field">
                <div class="control">
                  <p class="subtitle" style="color: #d6d4d4fc;">{{ value.unit }}</p>
                </div>
              </div>
            </div>
          </div>


          <div class="column" style="text-align: center;">
              <div class="field">
                <div class="control">
                  <button class="button" id="test3" @click="calprice()" >คำนวนค่าไฟฟ้า</button>
                </div>
              </div>
            </div>

        </div>

        
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "CalElectic",
  data() {
    return {
      electic: [
        // { id: 1, name: 'Fan', power: 20, quantity: 2, Time: 8, unit: 9.6 },
      ],
      idCounter: 0,
      addname: "",
      addpower: 0,
      addquantity: 0,
      addTime: 0,
      showmodal: false,
      sumunit: 0,
      price: 0,
    }
  },
  created() {
    this.idCounter = this.electic.length;
    this.electic.forEach(val => this.sumunit += val.unit)
  },
  methods: {
    addList() {
      console.log(this.showmodal);
      this.showmodal = true;
    },
    submitadd() {
      this.idCounter += 1
      if (this.addname === "" || this.addpower === 0 || this.addquantity === 0 || this.addTime === 0) {
        alert('Please enter name')
      } else {
        const calunit = this.addpower * this.addquantity / 1000 * this.addTime * 30
        this.sumunit += calunit
        const newlist = {
          id: this.idCounter,
          name: this.addname,
          power: this.addpower,
          quantity: this.addquantity,
          Time: this.addTime,
          unit: calunit,
        }
        this.electic.push(newlist)
        this.showmodal = false;
      }
    },
    calprice() {
      if (this.sumunit <= 15) {
        this.price = this.sumunit * 2.35
      } else if (this.sumunit <= 25) {
        this.price = (this.sumunit - 15) * 3 + 23.5
      } else if (this.sumunit <= 35) {
        this.price = (this.sumunit - 25) * 3.24 + 53.5
      } else if (this.sumunit <= 100) {
        this.price = (this.sumunit - 35) * 3.62 + 85.9
      } else if (this.sumunit <= 150) {
        this.price = (this.sumunit - 100) * 3.71 + 321.2
      } else if (this.sumunit <= 400) {
        this.price = (this.sumunit - 150) * 4.22 + 506.7
      } else {
        this.price = (this.sumunit - 400) * 4.42 + 1561.7
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
  /* position: fixed; */
  /* position: absolute; */
  /* background-repeat: repeat; */
  /* display: flex; */


  min-height: 100%;
  min-width: 1024px;
	
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
	
  /* Set up positioning */
  position: absolute;
  top: 0;
  left: 0;

}

.wrapper {
  /* display: flex; */
  /* position: relative; */
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
  background-color: #66656758;
}

.box p {
  font-size: 20px;
  /* font-weight: bold; */
}


.info {
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;
  /* margin-bottom: 45rem; */
  /* position: relative; */
  
}


/* 
  .wrapper .main_content .info div {
    margin-bottom: 20px;
  } */

#test{
  font-size: 30px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  float: right;
  padding-right: 10px;
}
#test1{
  background-color: #3c34349e;
  border: 6px solid rgba(0, 0, 0, 0.5);
  margin-bottom: 100px;
}
#test2{
  background-color: #d06467fc;
  border: 4px solid rgba(22, 3, 3, 0.298);
  opacity: 1;
}
#test2:hover{
  opacity: 0.7;
  
}
#test3{
  background-color: #1a1a25fc;
  border: 4px solid rgba(210, 208, 208, 0.298);
  color: white;
}
#test3:hover{
  background-color: #90b09dfc;
  border: 4px solid rgba(22, 3, 3, 0.298);
  color: black;
}

</style>
