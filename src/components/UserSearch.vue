<template>
    <div :class="[$style.content, 'container']">
        <div :class="$style.inner">
            <UserSearchSidebar
                :class="$style.sideBar"
                :cards="users"
                :status="status"
                :message="message"
                @onChange="handleChange"
                @onClick="handleClick"
            />
            <UserSearchInfo
                :class="$style.userInfo"
                :active-user="selectedUser"
            />
        </div>
    </div>
</template>

<script>
import UserSearchSidebar from '@/components/UserSearchSidebar';
import UserSearchInfo from '@/components/UserSearchInfo';
import {mapState, mapActions, mapMutations} from 'vuex';

export default {
    name: 'UserSearch',

    components: {
        UserSearchSidebar,
        UserSearchInfo,
    },

    computed: {
        ...mapState([
            'users',
            'status',
            'selectedUser',
        ]),

        message() {
            return !this.status ? 'начните поиск'
                : this.status === 'error' ? 'Произошла ошибка. Попробуйте еще раз.'
                    : !this.users.length && this.status === 'success' ? 'ничего не найдено'
                        : ''
        }
    },

    methods: {
        ...mapActions(['fetchUsers']),

        ...mapMutations(['SET_SELECTED_USER']),

        handleChange(arr) {
            this.SET_SELECTED_USER(null);
            if (this.onlyNumbers(arr)) {
                this.applyQuery(arr, 'id')
            } else {
                this.applyQuery(arr, 'username')
            }
            this.fetchUsers(this.params)
        },

        handleClick(val) {
            this.SET_SELECTED_USER(val);
        },

        onlyNumbers(array) {
            return array.every((element) => {
                return !isNaN(element)
            })
        },

        applyQuery(array, type) {
            this.params = array
                .map((el) => {
                    return `${type}=${el.replace(/\s/g, '')}`
                })
                .join('&')
        }
    }
}
</script>

<style lang="scss" module>
.content {
    height: calc(100vh - #{$header-h});
    min-height: 50rem;
    padding-bottom: 5.8rem;
}

.inner {
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 1rem;
    box-shadow: $base-shadow;
    background-color: $base-50;
    overflow: hidden;
}

.sideBar {
    width: 23%;
    min-width: 29rem;
    height: 100%;
}

.userInfo {
    flex: 1;
}
</style>
