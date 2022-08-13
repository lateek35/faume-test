<template>
    <div>
        <BannerLarge title="Faq"/>
        <FaqBlock />
    </div>
</template>

<script>
import BannerLarge from "@/components/BannerLarge";
import FaqBlock from "@/components/FaqBlock";


export default {
    name: 'FaqPage',
    components: {
        BannerLarge,
        FaqBlock
    }
}

</script>