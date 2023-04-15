<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <div class="columns is-desktop">
      <div class="column" id="test">
        <div class ='row'>
          <div class="" style="padding-left: 30%; padding-top: 30%;">
              <div class="name pb-5">
                <p class="line">ET</p>
                <p class="line">ENERGY</p>
                
              </div>
              <div class="disc pb-5">
                <p>เว็บที่จะช่วยคำนวนค่าไฟฟ้าภายในบ้านของคุณโดยจะช่วยให้คุณประหยัดเวลาในการคำนวนไฟฟ้าภายในบ้านโดยมีการอ้างอิงการคำนวนจาก ...</p>
              </div>
              <router-link to="/home">
                <button class="button is-dark is-large">LET GO
              </button>
              </router-link> 
        
          </div>
        </div>
      </div>
      <div class="column" id="test2">
        <div class ='row' style="padding-top: 50%; text-align: center;">
          <figure class="image is-128x128" style="display: block; margin-left: auto; margin-right: auto;">
            <img src="https://bulma.io/images/placeholders/256x256.png">
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  components: {},
};
</script>
<style>
.name{
  font-size: 80px;
  color: black;
  font-weight: bold;
}
p.line {
  line-height: 1;
}
#test{
  /* background-color: aqua; */
}
#test2{
  /* background-color: aquamarine; */
}

</style>