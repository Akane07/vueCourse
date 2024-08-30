<template>
    <div class="wrapperFourthHome">
        <div class="left">
            <div class="leftOne">
                <img src="../../assets/Chats.svg" alt="">
                <div class="leftText">
                    <span>Поддержка 24/7</span>
                    Сообщество всегда рядом с вами, если у вас возникнут трудности в <br> работе с платформой.
                </div>
            </div>
            <div class="leftTwo">
                <img src="../../assets/Calendar.svg" alt="">
                <div class="leftText">
                    <span>Календарь активности</span>
                    На календаре будут отмечены дни активности ученика и его <br> продвижение 
                </div>
            </div>
            <div class="leftThree">
                <img src="../../assets/Document.svg" alt="">
                <div class="leftText">
                    <span>Занимайтесь бесплатно</span>
                    Наша команда подобрала для Вас категорию бесплатных курсов <br> связанных с программированием, что сильно облегчит Вам поиск <br> нужного.
                </div>
            </div>
        </div>
        <div class="right">
            <span class="rightSpan"><b>&mdash; Почему мы</b></span>
            <div class="bigText">
                Наши специальные <br> функции, которые мы <br> создаем для Вас
            </div>
            <div class="smallText">
                help CODE - это платформа, которая помогает студентам <br> продвигаться по карьерной лестнице, предоставляя решения для <br> простого и гибкого онлайн-обучения, позволяющие вам учиться <br> в любом месте и в любое время абсолютно бесплатно.
            </div>
            <img src="../../assets/imageFourth.png" alt="">
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.wrapperFourthHome{
    width: 100%;
    height: 825px;
    padding: 100px 124px;
    display: flex;
    gap: 64px;
    align-items: center;
    justify-content: space-around;

}
.left{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
}
.leftOne, .leftTwo, .leftThree{
    color: #7C7C7C;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;
    width: 548px;
}
.leftTwo, .leftThree{
    border-top: 1px solid #7C7C7C;
    padding-top: 32px;
}
span{
    color: #252525;
    font-size: 32px;
}
.leftText{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 10px;
}
.right{
    display: flex;
    flex-direction: column;
    width: 597px;
    gap: 25px;
    align-items: start;
}
.rightSpan{
    color: #32BCA3;
    font-size: 24px;
}
.bigText{
    font-size: 52px;
    color: #252525;
    padding-left: 5px;
}
.smallText{
    color: #7C7C7C;
    font-size: 18px;
}
</style>