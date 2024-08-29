<template>
    <div class="wrapperThirdHome">
        <div class="left">
            <div class="textLeft">
                <span>&mdash; О нас</span>
                Мы  хотим предоставлять образовательные услуги, <br> которым не учат в школах, и развить будущую <br> карьеру студентов.
            </div>
            <img src="../../assets/ImageThird1.png" alt="">
        </div>
        <div class="right">
            <img src="../../assets/ImageThird2.png" alt="">
            <div class="textRight">
                <div>
                    <span>100k</span>
                    Студенты уже <br> регистрируются для его <br> использования.
                </div>
                <div>
                    <span>1k+</span>
                    Курсы доступны в <br> различных категориях.
                </div>
                <div>
                    <span>150</span>
                    Опытных авторов, которые <br> научат вас новому.
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.wrapperThirdHome{
    background-color: #1C1C1C;
    height: 672px;
    width: 100%;
    padding: 100px 124px;
    display: flex;
    gap: 64px;
    justify-content: space-around;
    align-items: center;
}
.left{
    display: flex;
    flex-direction: column;
    gap: 43px;
    align-items: center;
}
.textLeft span{
    color: #32BCA3;
    font-size: 24px;
}
.textLeft{
    color: #E0E0E0;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    gap: 43px;
}
.right{
    display: flex;
    gap: 64px;
    color: #E0E0E0;
    align-items: center;
}
.textRight{
    display: flex;
    flex-direction: column;
    gap: 64px;
}
.textRight div{
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.textRight span{
    font-size: 32px;
}
</style>