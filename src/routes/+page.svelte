<script lang="ts">
	import type { PageData } from './$types';
	import { scale } from 'svelte/transition';

	let viewMenu = true;
	export let data: PageData;
</script>

<section>
	<div class="mt-5 max-w-screen-md mx-auto">
		<h1 class="font-semibold">Selamat datang di area permainan!</h1>
		<h3>Banyak permainan yang dapat di eksplor disini.</h3>
		<button class="btn btn-filled-primary btn-base mt-5" on:click={() => (viewMenu = !viewMenu)}
			>Lihat daftar game</button
		>
		{#if viewMenu}
			<div class="mt-5 flex gap-2 flex-wrap">
				{#each data.games as game, i}
					<div class="card px-8 py-5 max-w-xs" in:scale={{ delay: i * 100 }}>
						<h3>{game.name}</h3>
						<p>{game.description}</p>
						{#if game.available}
							<a href={`/game/${game.slug}`} class="btn btn-ringed-primary btn-sm px-8 mt-2">Play</a
							>
						{:else}
							<button class="btn btn-filled-primary opacity-80 btn-sm px-8 mt-2" disabled
								>Coming soon</button
							>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
