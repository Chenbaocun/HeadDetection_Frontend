<!--
# -*- coding: utf-8 -*-
# @Time : 2019/6/4 21:32
# @Author : Tom Chen
# @Email : chenbaocun@emails.bjut.edu.cn
# @File : video_player.py
# @Software: PyCharm
-->
<template>
    <video-player  class="video-player vjs-custom-skin"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 id="video_player"
               >
            </video-player>
</template>

<script>
    export default {
        name: "video_player",
        props:{
            videoUrl: String,
            state: Boolean
        },
        data(){
            return{
              playerOptions: {
                // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                autoplay: false, //如果true,浏览器准备好时开始回放。
                muted: false, // 默认情况下将会消除任何音频。
                loop: false, // 导致视频一结束就重新开始。
                preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: 'zh-CN',
                aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [{
                type: "video/mp4",
                src: this.videoUrl, //url地址http://39.96.169.188/video_play/?filename=13.mp4
                }],
                // poster: "../assets/DNF.jpg", //你的封面地址
                // width: document.documentElement.clientWidth,
                notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
                 timeDivider: true,
                 durationDisplay: true,
                 remainingTimeDisplay: false,
                 fullscreenToggle: true  //全屏按钮
                }
            }
            }
        },
        watch: {
            //更改视频源 videoUrl从弹出框组件传值
            videoUrl: function (val) {
                // alert(val);
                if (val !== '') {
                    this.$refs.videoPlayer.player.src(val)
                }
            },
                    //弹出框关闭后暂停 否则一直在播放 state从弹出框组件传值
        state: function (val) {
            if (val) {
                // alert(val);
        this.$refs.videoPlayer.player.pause()
        }
        },
        }

    }
</script>

<style scoped>

</style>