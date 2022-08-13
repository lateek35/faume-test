<template>
    <div>
        <BannerLarge title="femme"/>
        <TextCta/>
        <CollectionDispatch />
        <SliderProduct />
        <CrossLink />
    </div>
</template>

<script>
import BannerLarge from "@/components/BannerLarge";
import TextCta from "@/components/TextCta";
import CollectionDispatch from "@/components/CollectionDispatch";
import CrossLink from "@/components/CrossLink";
import SliderProduct from "@/components/SliderProduct";

export default {
    name: 'HomePage',
    components: {
        BannerLarge,
        TextCta,
        CollectionDispatch,
        CrossLink,
        SliderProduct
    }
}

</script>