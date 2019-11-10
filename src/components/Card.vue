<template>
  <div>
    <div class="card">
      <div class="card-header">
        <div class="profile-img" @click="openProfile(card.user.links.html)">
          <img :src="card.user.profile_image.large" alt="wow" />
        </div>
        <div class="name-and-link">
          <div @click="openProfile(card.user.links.html)" class="name">{{card.user.name}}</div>
          <div @click="openProfile(card.user.links.html)" class="link">@{{card.user.username}}</div>
        </div>
      </div>
      <div class="card-image">
        <img :src="card.urls.small" alt="wow" />
      </div>
      <div class="card-footer">
        <div class="like-numbers">
          {{card.likes}}
          <i class="far fa-heart"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["card"],
  methods: {
    openProfile(link) {
      window.open(link);
      console.log("wewe");
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 320px;
  height: 320px;
  .card-header {
    height: 50px;
    display: flex;
    align-items: center;
    .profile-img > img {
      height: 30px;
      width: 30px;
      border-radius: 30px;
      margin: 10px;
      cursor: pointer;
    }
    .name-and-link .name {
      font-size: 0.8rem;
      font-style: bold;
      text-align: left;
      cursor: pointer;
    }
    .name-and-link .link {
      font-size: 0.6rem;
      color: grey;
      text-align: left;
      cursor: pointer;
    }
  }
  .card-image {
    width: 320px;
    height: 230px;
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  .card-footer {
    height: 32px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .like-numbers {
      color: grey;
      font-size: 0.8rem;
      padding: 10px;
    }
  }
}
</style>