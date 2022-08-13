<template>
    <div class="Dropdown" :class="classes">
        <button ref="button" :id="cid" class="Dropdown__button" :class="classes" @click="toggle">
            <TextP1 class="Dropdown__title">{{title}}</TextP1>
            <span class="Dropdown__icon grid">
                <slot name="icon" />
            </span>
        </button>
        <div ref="content" class="Dropdown__container" :class="classes" :data-collapsed="open">
            <br>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
import TextP1 from '@/components/Atoms/Texts/TextP1.vue';

export default {
    name: 'DropdownButton',
    components:{
        TextP1
    },

    props:{
        cid:{
            type: String,
            required: true,
            default: "issue_with_uid"
        },
        title:{
            type: String,
            required: true
        }
    },

    data() {
        return {
            open: false,
        }
    },

    mounted() {
        if( this.force ){
            this.open = true;
        }
    },

    computed: {
        classes() {
            return {
                "is-open": this.open,
            };
        },
    },

    methods: {
        toggle() {
            if (!this.open) {
                this.expandSection();
            } else {
                this.collapseSection();
            }
        },

        onDropdownOpen(uid){
            if( uid !== this.cid) this.collapseSection();
        },

        collapseSection() {
            if(!this.open ) return;
            
            this.$refs.content.style.height = 0 + 'px';
            this.$refs.content.setAttribute('data-collapsed', 'true');
            this.open = false;
        },

        expandSection() {
            let sectionHeight = this.$refs.content.scrollHeight;
            this.$refs.content.style.height = sectionHeight + 'px';
            this.$refs.content.setAttribute('data-collapsed', 'false')
            this.open = true;
        }
  },
}
</script>


<style lang="scss">
.Dropdown{
  border-radius: 15px;
  background-color: rgba(color(black), 0.04);
  padding: 20px;
  transition: background-color 0.15s linear;

  @include media('<=sm'){
    padding: 20px;
  }


  &:hover, &:focus-within, &.is-active{
    background-color: rgba(color(black), 0.13);
  }

  &__title{
    max-width: 400px;
    padding-right: 0px;
    line-break: 110%;
    font-size: rem(16px);
    font-weight: 700;
  }

  &__button{
    width: 100%;
    padding: 0;
    text-align: left;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    cursor: pointer;

    &.is-open{
      .Dropdown__icon{
        transform: rotate(90deg);
      }
    }
  }

  &__icon{
    flex-shrink: 0;
    transform-origin: center center;
    transition: transform 0.6s $ease-out-quint;

    @include media('<=sm'){
      width: 40px;
    }
    svg{
        width: 15px;
        height: 15px;
        margin-top: 5px;
        transform-origin: center center;
        transform: rotate(-90deg);
    }
  }

  &__container{
    height: 0;
    overflow: hidden;
    visibility: hidden;
    transition: height 0.6s $ease-out-quint, visibility 0.6s;

    &.is-open{
      transition: height 0.6s $ease-out-quint, visibility 0s;
      visibility: visible;
    }
  }
}
</style>
