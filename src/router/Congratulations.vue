<template>
  <div class="full">
    <div id="container">
      Make
      <div id="flip">
        <div><div>work</div></div>
        <div><div>lifestyle</div></div>
        <div><div>Everything</div></div>
      </div>
      Awesome!
    </div>
    <div class="bottom-text">Test task is complete!</div>
  </div>
</template>
<script>
export default {
  name: 'Congratulations'
}
</script>
<style scoped>
.full{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

#container {
  text-transform: uppercase;
  font-size: 36px;
  font-weight: bold;
  width: 500px;
  display: block;
  text-align: center;
  margin-top: -100px;
}

#flip {
  height: 50px;
  overflow: hidden;
}

#flip > div > div {
  height: 45px;
  margin-bottom: 45px;
  display: inline-block;
}

#flip div:first-child {
  animation: show 5s linear infinite;
}

@keyframes show {
  0% {margin-top:-270px;}
  5%{margin-top:-180px;}
  33%{margin-top:-180px;}
  38%{margin-top:-90px;}
  66%{margin-top:-90px;}
  71%{margin-top:0px;}
  99.9%{margin-top:0px;}
  100%{margin-top:-270px;}
  
}

.bottom-text{
  position: fixed;
  bottom: 100px;
}
</style>