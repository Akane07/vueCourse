<template>
    <div class="wrapperFB">
        <Header></Header>
        <img src="../../assets/Patern.svg" class="patern">
        <div class="content">
            <div class="contentText">
                <p class="heroText">Основные языки программирования для начинающих</p>
                <p class="context">Мы предоставляем вам  доступ к лучшим курсам по изучению программирования, позволяя вам изучить бесчисленное множество практических уроков по целому ряду тем.</p>
            </div>
            <div class="inputContent">
                <div class="input">
                    <input type="text" placeholder="Название курса, автор или предмет">
                    <button><img src="../../assets/Search.svg" alt=""></button>
                </div>
                <div class="inputHero">
                    Популярные : HTML, C++, Python, Java, JavaScript
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from '../UI/Header.vue'
import Button from '../UI/Button.vue';
</script>

<style scoped>

.wrapperFB {
    width: 100%;
    height: 720px;
    background-color: #1C1C1C;
    background-image: url('../../assets/ImageHome.png');
    background-repeat: no-repeat;
    background-position: right;
}
.content{
    display: flex;
    flex-direction: column;
    gap: 170px;
}
.imgHome{
    width: 600px;
    height: 732px;
    position: absolute;
    right: 0;
    top: 0;
}
.contentText{
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 64px;
    margin-top: 40px;
    margin-left: 170px;
    height: 333px;
    width: 716px;
}
.heroText{
    font-size: 70px;
}
.context{
    color: #E0E0E0;
    font-size: 20px;
}
.patern{
    position: absolute;
    width: 100%;
    z-index: 1;
    top: 0;
}
.inputContent{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 230px;
    color: #E0E0E0;
}
.input{
    background-color: #FFFFFF;
    width: 716px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 8px 24px;
    border-radius: 30px;

}
.input input{
    width: 500px;
    outline: none !important;
    border: 0;
}
.input button{
    background-color: #32BCA3;
    width: 38px;
    height: 38px;
    border: 0;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
</style>