<template>
  <div>
    <img src="../assets/image/Logo.png" alt="">
    <nav class="nav flex-column">
      <router-link to="/admintweets">推文清單</router-link>
      <router-link to="/adminusers">使用者列表</router-link>
    </nav>
    <router-link to="/adminlogin">登出</router-link>
  </div>
</template>