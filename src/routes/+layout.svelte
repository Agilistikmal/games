<script>
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.css';

	import { Breadcrumb, Crumb } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Games</title>
</svelte:head>

<!-- Content -->
<main class="container mx-auto px-8 col-span-10">
	<div class="mt-2 py-2 pl-4 pr-8 rounded-xl w-max bg-surface-700">
		<Breadcrumb>
			<Crumb href="/">Home</Crumb>
			<Crumb>{$page.url.pathname}</Crumb>
		</Breadcrumb>
	</div>
	<slot />
</main>
