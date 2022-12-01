<template>
    <div :class="$style.container">
        <transition
            name="fade"
            mode="out-in"
        >
            <div
                v-if="activeUser"
                :key="activeUser.id"
                :class="$style.inner"
            >
                <div :class="$style.imageWrapper">
                    <img
                        src="@/assets/images/avatar-lg.png"
                        alt="User's avatar"
                        :class="$style.image"
                    />
                </div>

                <div :class="$style.info">
                    <div :class="$style.infoContent">
                        <h4 :class="[$style.heading, $style.name]">
                            {{ activeUser.name }}
                        </h4>
                        <ul>
                            <li :class="$style.contactsItem">
                                <span :class="$style.label">email: </span>
                                {{ activeUser.email }}
                            </li>
                            <li :class="$style.contactsItem">
                                <span :class="$style.label">phone: </span>
                                {{ activeUser.phone }}
                            </li>
                        </ul>
                        <div :class="$style.about">
                            <h4 :class="$style.heading">О себе</h4>
                            <p :class="$style.paragraph">{{ aboutText }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                v-else
                :class="[$style.emptyText, $style.paragraph]"
            >
                Выберите сотрудника, чтобы посмотреть его профиль
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'UserSearchInfo',

    props: {
        activeUser: {
            type: Object,
            default: () => ({}),
        },
    },

    data() {
        return {
            aboutText:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' +
                ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
                'aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum' +
                ' dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui o' +
                'fficia deserunt mollit anim id est laborum.',
        }
    },
}
</script>

<style lang="scss" module>
.container {
    background-color: $body-bg;
    border-left: 1px solid $base-300;
}

.emptyText {
    padding-top: 25.5%;
    padding-left: 29%;
}

.inner {
    display: flex;
    padding: 3rem 2.9rem 3rem 2rem;
}

.imageWrapper {
    width: 42.4rem;
    min-width: 42.4rem;
    height: 28.6rem;
    border: 1px solid $base-300;
}

.image {
    max-width: 100%;
    object-fit: cover;
}

.info {
    flex: 1;
    margin-left: 6.1rem;
    padding-bottom: 2rem;
    overflow-y: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        width: 0;
    }
}

.heading {
    margin-bottom: 2.5rem;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2.24rem;

    &.name {
        margin-bottom: 1rem;
        color: $base-500;
    }
}

.contactsItem {
    font-size: 1.4rem;
    line-height: 1.69rem;

    & .label {
        font-weight: 600;
        color: $base-500;
    }

    &:not(:last-child) {
        margin-bottom: 1rem;
    }
}

.about {
    margin-top: 2rem;
}

.paragraph {
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: $base-400;
}
</style>
