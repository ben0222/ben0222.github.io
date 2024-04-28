<template>
    <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
            <div class="home-block1">
                <a herf="/zh/visit/">
                    <div class="info">
                        <div class="info-title">开放信息
                        </div>
                        <br>
                        <div class="info-content">黎槎古村八卦景区</div>
                        <br>
                        <div class="info-p">票务咨询电话：0758-8155718</div>
                        <div class="info-p">何小姐：19529677260</div>
                        <br>
                        <div class="ul-flex-main-center">
                            <div class="li">
                                <div class="info-h1">08:30</div>
                                <div class="info-p">开放时间</div>
                            </div>
                            <div class="info-span"> ________ </div>
                            <div class="li">
                                <div class="info-h1">17:30</div>
                                <div class="info-p">关闭时间</div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </el-col>

        <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
            <div class="home-block2">
                <div class="news">近期资讯</div>
                <div class="news-list">
                    <ul>
                        <a href="/zh/news/0305.html">
                            <div class="date">2024/03/06</div>
                            <div class="news-li">一路生花 畅游“八卦”</div>
                        </a>
                        <a href="/zh/news/0419.html">
                            <div class="date">2024/04/19</div>
                            <div class="news-li">五一假期的正确打开方式</div>
                        </a>
                        <a href="/zh/news/0215.html">
                            <div class="date">2024/02/15</div>
                            <div class="news-li">八卦村游玩的欢乐记忆</div>
                        </a>
                    </ul>
                </div>
            </div>
        </el-col>
    </el-row>

    <el-row :gutter="20">
        <el-col xs="24" :sm="24" :md="24" :lg="16" :xl="16">
            <div class="home-block3-1">
                <a href="/zh/guide/licha/">
                    <img src="/assets/images/background/bg15.jpg" width="100%" height=auto>
                </a>
            </div>
            <div class="home-block3-2">
                <a href="/zh/guide/">
                    <img src="/assets/images/background/bg1.jpg" width="100%" height=auto>
                </a>
            </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
            <div class="home-block4">
                <div class='my-icon1'>
                    <a href="/zh/guide/">
                        <i class="iconfont icon-jiangjiedian"></i>
                        <div class="icon-text">智述</div>
                    </a>
                </div>
                <div class='my-icon'>
                    <i class="iconfont icon-gongjiao"></i>
                    <div class="icon-text">交通</div>
                </div>
                <div class='my-icon'>
                    <i class="iconfont icon-zixun"></i>
                    <div class="icon-text">资讯</div>
                </div>
                <div class='my-icon'>
                    <i class="iconfont icon-guzhenminsu-copy"></i>
                    <div class="icon-text">非遗</div>
                </div>
                <div class="zoom-bgc"></div>
                <div class="icon-text">黎槎古村八卦景区微信公众号</div>
                <!-- <div class="zoom-bgc"></div>
                <div class="icon-text">梨香茶叹微信公众号</div> -->
            </div>

        </el-col>
    </el-row>

    <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <div class="home-block5">
                <img src="/assets/images/map.jpg" width="100%" height=auto>
            </div>
        </el-col>

    </el-row>

</template>

<style>
a {
    text-decoration: none;
    /* 去除默认的下划线 */
    outline: none;
    /* 去除旧版浏览器的点击后的外虚线框 */
    color: #FFF;
    /* webkit-tap-highlight-color: transparent; */

}

.el-col {
    border-radius: 4px;
}

.el-row {
    margin-bottom: 20px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.home-block1 {
    height: 283px;
    margin-bottom: 20px;
    background: url("/assets/images/background/bg14.jpg");

}

.info {}

.info-content {
    font-family: "Noto Serif SC", serif;
    font-weight: 900;
    font-style: bold;
    font-size: 32px;
    text-align: center;
    color: #FFF;
}

.info-title {
    font-family: "Noto Serif SC", serif;
    font-weight: 900;
    font-style: bold;
    font-size: 32px;
    text-align: center;
    color: #FFF;

    &::before {
        content: "";
        display: inline-block;
        content: url(/assets/images/icon/before.svg);
        height: 10px;
        width: 10px;
    }
}

.info-h1 {
    font-family: "Noto Serif SC", serif;
    font-weight: 900;
    font-style: bold;
    font-size: 32px;
    text-align: center;
    font-size: 40px;
    color: #FFF;
}

.info-p {
    text-align: center;
    color: #FFF;
}

.info-span {
    color: #FFF;
}


.home-block2 {
    height: 283px;
    margin-bottom: 20px;
    background: url("/assets/images/background/bg14.jpg");
    background-repeat: no-repeat;
}

.news {
    font-family: "Noto Serif SC", serif;
    font-weight: 900;
    font-style: bold;
    font-size: 32px;
    text-align: center;
    color: #FFF;

    &::before {
        content: "";
        display: inline-block;
        background-image: url(/assets/images/icon/before.svg);

    }
}

.news::before {}

.news-list {
    font-weight: 900;
    font-style: bold;
    font-size: 14px;
}

.news-li {
    color: #FFF
}

.date {
    font-weight: 1000;
    font-style: bold;
    font-size: 25px;
    color: #FFF;
}

.ul-flex-main-center {
    display: flex;
    flex-direction: row;
    justify-content: center
}

.home-block3-1 {
    height: auto;
    margin-bottom: 20px;
}

.home-block3-1:hover {
    content: "test";
}

.home-block3-2 {
    height: auto;
    margin-bottom: 20px;
}

.zoom-licha {
    padding: 20px;
    background: url("/assets/images/qrcode/licha.jpg");
    transition: transform .2s;
    /* 动画 */
    width: 50px;
    height: 50px;
    margin: 0 auto;
    margin-top: calc((100% - 1px) / 6);
    background-size: 100% 100%;
    align-items: center;
}

.zoom-licha:hover {
    transform: scale(1.5);
    /* （150% 缩放 - 注意：如果缩放太大，它会超出视口） */
}

.zoom-bgc {
    padding: 20px;
    background: url("/assets/images/qrcode/baguacun.jpg");
    transition: transform .2s;
    /* 动画 */
    width: 90px;
    height: 90px;
    margin: 0 auto;
    margin-top: calc((100% - 1px) / 6);
    margin-bottom: 40px;
    background-size: 100% 100%;
    align-items: center;
}

.zoom-bgc:hover {
    transform: scale(1.5);
    /* （150% 缩放 - 注意：如果缩放太大，它会超出视口） */
}

.home-block4 {
    background: url("/assets/images/background/bg13.jpg");
    height: auto;
    margin-bottom: 20px;

}

.home-block5 {

    height: auto;
    width: auto;
    margin-bottom: 20px;
}


.my-icon {
    margin-top: calc((100% - 1px) / 6);
}


.icon-text {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px, 20px, 20px, 20px;
    color: #fff;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    setup() { },
})
</script>
<style lang="less" scoped></style>
