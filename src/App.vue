<template>
  <div class="carousel wow slideInUp" data-wow-duration="0.3s">
    <n-carousel effect="fade" autoplay loop :show-dots="false" :interval="5000">
      <n-carousel-item v-for="item in config.carousel" :key="item">
        <el-image style="width: 100%; height: 100%" :src="item" fit="cover" loading="lazy" />
      </n-carousel-item>
    </n-carousel>
  </div>
  <div class="page">
    <vue-particles id="particles" :options="options" />
    <div class="home wow slideInUp" data-wow-duration="0.3s">
      <el-container>
        <el-header height="50px" class="wow bounceInDown" data-wow-delay="0.4s">
          <el-avatar :size="32" shape="square" :src="config.love" />
          <el-dropdown trigger="click">
            <el-avatar :size="26" shape="square" :src="config.menu" />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="item in config.dropdownMenu"
                  :key="item.url"
                  @click="open(item.url)"
                >
                  {{ item.title }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-header>
        <el-main>
          <div class="user">
            <div class="avatar wow bounceInDown">
              <el-avatar shape="square" :size="160" fit="cover" :src="config.avatar" />
            </div>
            <h1 class="wow bounceInUp" data-wow-delay="0.4s">
              {{ config.name }}
            </h1>
            <div class="motto" data-wow-delay="0.4s">
              {{ motto }}
            </div>
            <div class="clause wow slideInLeft" data-wow-delay="0.4s">
              {{ zh }}
            </div>
            <div class="clause wow slideInRight" data-wow-delay="0.4s">
              {{ en }}
            </div>
          </div>
          <div class="contact">
            <div
              v-for="item in config.contacts"
              :key="item.icon"
              class="contact-item wow bounceInUp"
              data-wow-delay="0.5s"
            >
              <el-popover
                v-if="item.qrCode"
                :teleported="false"
                placement="top"
                trigger="hover"
                :width="220"
                :hide-after="0"
                popper-class="popover"
              >
                <template #reference>
                  <el-avatar :size="36" :src="item.icon" />
                </template>
                <el-image :src="item.qrCode" fit="cover" />
              </el-popover>
              <el-tooltip v-if="item.link" effect="dark" :content="item.tip" placement="top">
                <el-avatar :size="36" :src="item.icon" @click="open(item.link)" />
              </el-tooltip>
            </div>
          </div>
        </el-main>
        <el-footer height="50px">
          <!-- <div class="record wow bounceInLeft" data-wow-delay="0.4s">
            <a href="https://beian.miit.gov.cn" target="_blank">{{ config.copyright.icp }}</a>
            <el-divider direction="vertical" />
            <a :href="config.copyright.recordUrl" target="_blank" class="icp">
              <img :src="ghs" alt="ghs" />
              {{ config.copyright.recordNum }}
            </a>
          </div> -->
          <div class="copy wow bounceInRight" data-wow-delay="0.4s">
            Copyright © {{ config.copyright.time }}
            <!-- <n-text :href="config.copyright.url">
              {{ config.copyright.use }}
            </n-text> -->
            All Rights Reserved {{ config.copyright.name }}.
          </div>
        </el-footer>
      </el-container>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useApp } from "@/hooks/useApp";

const { options, config, zh, en, motto, open } = useApp();
</script>
