<template>
  <div class="about">
    <div class="container greeting">
      <div class="about_title sideways">
        <p>About us</p>
      </div>
      <div class="main_content">
        <p>We believe in the power of a thoughtfully crafted brand and the impact it can have on your auience</p>
      </div>
      <div class="greeting_image">
        <img src="https://picsum.photos/1920/1080?random=48" alt />
      </div>
    </div>
    <div class="container description">
      <div class="about_title">
        <h2>Why we do what we love:</h2>
      </div>
      <div class="description_list">
        <div class="list_item">
          <h3>One</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam mollitia rem quisquam expedita! Nostrum aut neque rem, enim exercitationem deleniti eveniet alias ut corporis error quibusdam quos! Praesentium, architecto. Recusandae!</p>
        </div>
        <div class="list_item">
          <h3>Two</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam mollitia rem quisquam expedita! Nostrum aut neque rem, enim exercitationem deleniti eveniet alias ut corporis error quibusdam quos! Praesentium, architecto. Recusandae!</p>
        </div>
        <div class="list_item">
          <h3>Three</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam mollitia rem quisquam expedita! Nostrum aut neque rem, enim exercitationem deleniti eveniet alias ut corporis error quibusdam quos! Praesentium, architecto. Recusandae!</p>
        </div>
      </div>
    </div>
    <div class="container other">
      <div class="about_title sideways rev">
        <p>About me</p>
      </div>
      <div class="main_content">
        <p>We believe in the power of a thoughtfully crafted brand and the impact it can have on your auience</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam et reprehenderit dignissimos sint sunt repellendus ab. Iste odit doloremque exercitationem assumenda deleniti, corrupti consequuntur tenetur explicabo fugiat qui necessitatibus nisi.</p>
      </div>
      <div class="greeting_image">
        <img src="https://picsum.photos/420/720?random=28" alt />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  font-family: source-serif-pro;
  font-weight: 300;
  font-style: normal;
  font-size: 14px;
  letter-spacing: 0.04em;
  line-height: 2.3em;
  text-transform: none;
  // background-color: rebeccapurple;
  box-sizing: border-box;
  // padding: 10px 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  // padding-top: 15vh;
  padding-right: 0;
  position: relative;
  // overflow: hidden;
}
.greeting,
.description,
.other {
  pointer-events: auto;
  font-family: source-serif-pro;
  font-weight: 300;
  font-style: normal;
  font-size: 14px;
  letter-spacing: 0.04em;
  line-height: 2.3em;
  text-transform: none;
  color: #242424;
  float: left;
  width: fit-content;
  padding: 70px;
  padding-right: 0;
  // aspect-ratio: 16/9;
}
.greeting {
  // background-color: darkcyan;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  .greeting_image {
    position: relative;
    aspect-ratio: 16/9;
    // z-index: 23;
    // height: 420px;
    // width: 720px;

    img {
      // position: absolute;
      // left: 0;
      // top: 0;
      width: 100%;
      height: auto;
    }
  }
}
.description {
  // background-color: wheat;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-left: 0;

  .description_list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;

    .list_item {
      text-align: center;
      box-sizing: border-box;
      padding-left: 3rem;
      padding-right: 3rem;
      padding-bottom: 3rem;
      width: calc(100% / 5);
    }
  }
}
.other {
  // background-color: lightblue;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: center;
}
.sideways {
  font-family: source-serif-pro;
  font-weight: 300;
  font-style: normal;
  font-size: 14px;
  letter-spacing: 0.04em;
  line-height: 2.3em;
  text-transform: none;
  color: #242424;
  // height: auto;
  padding-bottom: 16px;
  // clear: none;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 0;
  box-sizing: border-box;
  // margin-right: auto;
  // margin-left: auto;
  // position: relative;
  order: -1;
  justify-self: flex-start;
  // top: 50%;
  // width: 30vw;
  // background-color: darkgoldenrod;
  transform: translate(-50%, -50%) rotate(270deg);

  p {
    font-family: source-serif-pro;
    font-weight: 300;
    font-style: normal;
    font-size: 14px;
    letter-spacing: 0.04em;
    line-height: 2.3em;
    color: #242424;
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
    padding: 10px;
  }
}
.rev {
  order: 2;
}
.main_content {
  font-family: source-serif-pro;
  font-weight: 300;
  font-style: normal;
  font-size: 14px;
  letter-spacing: 0.04em;
  line-height: 2.3em;
  text-transform: none;
  color: #242424;
  align-items: center;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  width: 30vw;
  // margin-left: -10vw;

  p {
    font-family: source-serif-pro;
    font-weight: 300;
    font-style: normal;
    font-size: 38px;
    letter-spacing: 0.04em;
    line-height: 1.5em;
    text-transform: none;
    color: #242424;
    position: relative;
    height: auto;
    padding-bottom: 16px;
    clear: none;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 16px;
    width: 60vw;
    max-width: 550px;
    z-index: 99;
    margin-top: 0;
    margin-bottom: 0;
    white-space: pre-wrap;
  }
}
</style>
