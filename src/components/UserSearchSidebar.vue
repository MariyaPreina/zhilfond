<template>
    <div :class="$style.content">
        <div :class="$style.search">
            <div :class="$style.headingWrapper">
                <h2 :class="$style.heading">Поиск сотрудников</h2>
                <transition name="fade">
                    <TheLoader v-if="status === 'loading'" :class="$style.loader"/>
                </transition>
            </div>
            <div :class="$style.inputWrapper">
                <input
                    ref="input"
                    v-model="value"
                    placeholder="Введите Id или имя"
                    :class="$style.inputNative"
                    @keydown.enter="onEnter"
                    @blur="onEnter"
                />
            </div>
        </div>
        <div :class="$style.results">
            <h2 :class="$style.heading">Результаты</h2>

            <transition name="fade" mode="out-in">
                <div v-if="message" :class="$style.emptyText">{{ message }}</div>
            </transition>

            <div :class="$style.listWrapper">
                <ul :class="$style.list">
                    <li
                        v-for="card in cards"
                        :key="`${card.id}-${card.name}`"
                        :class="$style.listItem"
                    >
                        <UserSearchCard
                            :user="card"
                            @onClick="$emit('on-click', $event)"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import UserSearchCard from '@/components/UserSearchCard';
import TheLoader from '@/components/TheLoader';

export default {
    name: 'UserSearchSidebar',

    components: {
        UserSearchCard,
        TheLoader,
    },

    props: {
        cards: {
            type: Array,
            default: () => [],
        },

        status: {
            type: String,
            default: '',
        },

        message: {
            type: String,
            default: '',
        }
    },

    data() {
        return {
            value: '',
        };
    },

    methods: {
        onEnter() {
            this.$emit('on-change', this.value.split(','));
        },
    },
};
</script>

<style lang="scss" module>
.content {
    display: flex;
    flex-direction: column;
    padding: 2.7rem 0;
}

.headingWrapper {
    display: flex;
    align-items: center;
}

.heading {
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2.24rem;
}

.loader {
    margin-left: 3rem;
}

.search {
    margin-bottom: 2.2rem;
    padding: 0 3rem 0 2rem;
}

.inputWrapper {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 4.6rem;
    margin-top: 1.4rem;
    padding: 0 1.6rem;
    border-radius: 0.8rem;
    border: 1.5px solid $base-100;
    background-color: $body-bg;
    font-size: 1.4rem;
    line-height: 1.7rem;
}

.inputNative {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    outline: none;
    font-size: inherit;
    color: $base-400;
    box-shadow: none;
    -webkit-appearance: none;
    -webkit-text-size-adjust: 100%;

    &::placeholder {
        color: $base-400;
    }
}

.results {
    flex: 1;
    overflow-y: hidden;

    .heading {
        padding: 0 3rem 0 2rem;
    }
}

.emptyText {
    margin-top: 1rem;
    padding: 0 3rem 0 2rem;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: $base-400;
}

.listWrapper {
    height: 100%;
    overflow-y: scroll;
    padding: 0 3rem 6rem 2rem;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        width: 0;
    }
}

.list {
    margin-top: 1.8rem;
}

.listItem {
    &:not(:last-child) {
        margin-bottom: 1.8rem;
    }
}
</style>
