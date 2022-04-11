<template>
  <div :class="`rayne-${this.$store.state.theme}`">
    <div class="about container">
      <div class="container greeting">
        <div class="about_title sideways">
          <p>About us</p>
        </div>
        <div class="main_content">
          <div class="main_banner">
            <p>
              We believe in the power of a thoughtfully crafted brand and the
              impact it can have on your auience. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Aut ipsam neque voluptates unde
              tempora, rerum iusto mollitia quos atque impedit. Quo quam magni
              et eveniet commodi voluptatibus optio ullam tenetur.
            </p>
          </div>
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              mollitia rem quisquam expedita! Nostrum aut neque rem, enim
              exercitationem deleniti eveniet alias ut corporis error quibusdam
              quos! Praesentium, architecto. Recusandae!
            </p>
          </div>
          <div class="list_item">
            <h3>Two</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              mollitia rem quisquam expedita! Nostrum aut neque rem, enim
              exercitationem deleniti eveniet alias ut corporis error quibusdam
              quos! Praesentium, architecto. Recusandae!
            </p>
          </div>
          <div class="list_item">
            <h3>Three</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              mollitia rem quisquam expedita! Nostrum aut neque rem, enim
              exercitationem deleniti eveniet alias ut corporis error quibusdam
              quos! Praesentium, architecto. Recusandae!
            </p>
          </div>
        </div>
      </div>
      <div class="container other">
        <div class="about_title sideways rev">
          <p>About me</p>
        </div>
        <div class="main_content">
          <div class="main_banner">
            <p>
              We believe in the power of a thoughtfully crafted brand and the
              impact it can have on your auience
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam et
              reprehenderit dignissimos sint sunt repellendus ab. Iste odit
              doloremque exercitationem assumenda deleniti, corrupti
              consequuntur tenetur explicabo fugiat qui necessitatibus nisi.
            </p>
          </div>
        </div>
        <div class="other_image">
          <div class="image_banner">
            <img src="https://picsum.photos/720/420?random=28" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@include rayne($themes) {
  .about {
    font-family: themed("serif-font");
    font-weight: 300;
    font-style: normal;
    font-size: 14px;
    letter-spacing: 0.04em;
    line-height: 2.3em;
    text-transform: none;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding-right: 0;
    position: relative;
  }
  .greeting,
  .description,
  .other {
    pointer-events: auto;
    font-family: themed("serif-font");
    font-weight: 300;
    font-style: normal;
    font-size: 14px;
    letter-spacing: 0.04em;
    line-height: 2.3em;
    text-transform: none;
    color: #242424;
  }
  .greeting {
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 20px 0;

    .main_content {
      box-sizing: border-box;
      padding-left: 5vw;
      width: 33%;
      .main_banner {
        position: relative;
        width: 60vw;
        max-width: 550px;
        z-index: 99;
      }
    }

    .greeting_image {
      width: 66%;
      aspect-ratio: 16/9;

      img {
        max-width: 100%;
        height: auto;
      }
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-left: 0;
    margin-top: 30px;

    .description_list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;
      align-items: center;
      padding-left: 2rem;
      padding-right: 2rem;

      .list_item {
        text-align: center;
        padding-bottom: 3rem;
      }
    }
  }
  .other {
    display: flex;
    flex-direction: row;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    margin: 20px 0;

    .main_content {
      box-sizing: border-box;
      .main_banner {
        position: relative;
        width: 60vw;
        max-width: 550px;
        p {
          text-align: center;
          padding-right: 5vw;
        }
      }
    }

    .other_image {
      position: relative;
      aspect-ratio: 16/9;
      box-sizing: border-box;
      width: 33%;

      .image_banner {
        position: relative;
        width: 60vw;
        max-width: 550px;
        z-index: -1;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  .sideways {
    font-family: themed("serif-font");
    font-weight: 300;
    font-style: normal;
    font-size: 14px;
    letter-spacing: 0.04em;
    line-height: 2.3em;
    text-transform: none;
    color: #242424;
    box-sizing: border-box;
    order: -1;
    justify-self: flex-start;
    transform: translate(-50%, -50%) rotate(270deg);

    p {
      font-family: themed("serif-font");
      font-weight: 300;
      font-style: normal;
      font-size: 14px;
      letter-spacing: 0.04em;
      line-height: 2.3em;
      color: #242424;
      margin-top: 0;
      margin-bottom: 0;
      text-align: center;
      width: 100px;
      position: absolute;
      top: -40px;
      left: -50px;
    }
  }
  .rev {
    order: 1;
    z-index: 99;
  }

  @media screen and (min-width: $SB_Breakpoint_SM) {
    .other {
      .main_content {
        .main_banner {
          p {
            text-align: right;
            padding-right: 10vw;
          }
        }
      }
    }
  }
  @media screen and (min-width: $SB_Breakpoint_MD) {
    .description {
      .description_list {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
    .other {
      justify-content: space-evenly;
      .main_content {
        .main_banner {
          p {
            padding-right: 5vw;
          }
        }
      }
    }
  }
  @media screen and (min-width: $SB_Breakpoint_LG) {
    .other {
      .main_content {
        .main_banner {
          p {
            padding-right: 0;
          }
        }
      }
    }
  }
}
</style>
