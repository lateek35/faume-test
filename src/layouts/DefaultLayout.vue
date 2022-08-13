<template>
    <div>
        <HeaderSticky/>
        <main>
            <slot/>
        </main>
        <FooterPage/>
        <PopinCart />
        <div id="popin-target"></div>
    </div>
</template>

<script>
import HeaderSticky from "@/components/HeaderSticky";
import FooterPage from "@/components/FooterPage";
import PopinCart from "@/components/PopinCart";

export default {
    name: 'DefaultLayout',
    components:{
        HeaderSticky,
        FooterPage,
        PopinCart,
    }
}
</script>

<style lang="scss">

</style>