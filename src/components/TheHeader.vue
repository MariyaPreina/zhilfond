<template>
		<header :class="$style.content">
      <h1 :class="$style.title">Жилфонд</h1>
      <p :class="$style.subtitle">Пользователь</p>
		</header>
</template>

<script>
		export default {
				name: 'TheHeader',


		}
</script>

<style lang="scss" module>
		.content {
      padding: 4.6rem 5rem 3rem 5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
		}

    .title {
      font-size: 3.2rem;
      line-height: 3.9rem;
      font-weight: 700;
      color: $accent;
    }

    .subtitle {
      font-size: 1.6rem;
      line-height: 1.9rem;
    }
</style>
