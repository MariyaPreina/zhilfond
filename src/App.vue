<template>
  <TheHeader />
  <UserSearch />
</template>

<script>
import TheHeader from '@/components/TheHeader';
import UserSearch from '@/components/UserSearch';

export default {
  name: 'App',

  metaInfo: {
    title: 'Жилфонд | Поиск сотрудников'
  },

  components: {
    TheHeader,
    UserSearch,
  },

  created(){
    document.title = `${process.env.VUE_APP_TITLE}`;
  },
};
</script>

<style lang="scss" module>

</style>
