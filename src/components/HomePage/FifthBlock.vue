<template>
    <div class="wrapperFifthHome">
        <div class="textContent">
            <div class="textHero">
                Готовы начать свои курсы <br> и развивать карьеру?
            </div>
            <div class="context">
                Доступ к бесплатным курсам научит вас всему, не выходя из вашего собственного дома. Улучшите <br> свою карьеру уже сегодня, записавшись на отличные курсы.
            </div>
        </div>
        <div class="buttonBegin">
            <Button>Начать</Button>
        </div>
        <div class="footer">
            <div class="left">
                <img src="../../assets/logo.svg" alt="">
                <div class="leftText">
                    help CODE - это глобальная платформа онлайн- <br> обучения, которая предлагает любому желающему <br> доступ к онлайн-курсам в любом месте совершенно <br> бесплатно!
                </div>
            </div>
            <div class="right">
                <div class="page">
                    <span><b>Страницы</b></span>
                    <p>Главная</p>
                    <p>Курсы</p>
                    <p>О нас</p>
                </div>
                <div class="community">
                    <span><b>Сообщество</b></span>
                    <p>Центр помощи</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from '../UI/Button.vue'
</script>

<style scoped>
.wrapperFifthHome{
    width: 100%;
    height: 1106px;
    background-color: #1C1C1C;
    background-image: url('../../assets/PaternTwo.svg');
    background-repeat: no-repeat;
    background-size: 2000px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.textContent{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 190px;
    padding-bottom: 60px;
    padding-top: 200px;

}
.textHero{
    color: #FFFFFF;
    font-size: 72px;
    text-align: center;
}
.context{
    color: #E0E0E0;
    font-size: 20px;
    text-align: center;
}
.buttonBegin{
    padding-bottom: 60px;
}
.footer{
    border-top: 1px solid #E0E0E0;
    width: 100%;
    padding: 20px 90px 90px 90px;
    display: flex;
    gap: 292px;
    align-items: center;
    justify-content: space-around;
}
.left{
    color: #E0E0E0;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 30px;
}
.right{
    color: #E0E0E0;
    display: flex;
    gap: 90px;
}
span{
    color: #FFFFFF;
    font-size: 18px;
    padding-bottom: 7px
}
.page{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.community{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>