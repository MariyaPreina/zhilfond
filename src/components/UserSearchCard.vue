<template>
    <div
        :class="[$style.inner, { [$style._active]: active }]"
        @click="$emit('on-click', this.user)"
    >
        <div :class="$style.imageWrapper">
            <img
                src="@/assets/images/avatar-xs.png"
                alt="User's avatar"
                :class="$style.image"
            />
        </div>
        <div :class="$style.info">
            <p :class="[$style.contacts, $style.name]">{{ user.username }}</p>
            <p :class="$style.contacts">{{ user.email }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserSearchCard',
    props: {
        user: {
            type: Object,
            default: () => ({}),
        },

        active: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<style lang="scss" module>
.inner {
    display: flex;
    width: 100%;
    min-height: 7rem;
    border-radius: 1rem;
    box-shadow: $base-shadow;
    background-color: $body-bg;
    cursor: pointer;

    @include hover {
        .info {
            background-color: rgba($base-300, 0.3);
        }
    }

    &._active {
        .info {
            background-color: $base-300;
        }

        .name {
            transform: translateX(1.2rem);
        }
    }
}

.imageWrapper {
    width: 7rem;
    min-width: 7rem;
    height: 7rem;
}

.image {
    max-width: 100%;
    object-fit: cover;
    border-radius: 1rem 0 0 1rem;
}

.info {
    flex: 1;
    min-width: 0;
    padding: 1.5rem;
    border-radius: 0 1rem 1rem 0;
    background-color: $body-bg;
    transition: background-color $default-color-transition;
}

.contacts {

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: $base-400;


    &.name {
        margin-bottom: 0.5rem;
        font-weight: 600;
        transition: transform $default-transition;
        color: $body-color;
    }
}
</style>
