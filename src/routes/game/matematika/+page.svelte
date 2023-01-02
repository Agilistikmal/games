<script lang="ts">
	import { Step, Stepper } from '@skeletonlabs/skeleton';
	import { writable } from 'svelte/store';
	import { generateQuestion } from './Question';

	let level = writable(0);
	let { question, answer } = generateQuestion($level + 1);
	let userAnswer: number | undefined;
	let win: boolean | undefined;
	let finish: boolean | undefined;

	level.subscribe((value) => {
		const generated = generateQuestion(value + 1);
		question = generated.question;
		answer = generated.answer;
	});

	const handleNextLevel = () => {
		if (userAnswer == answer) {
			win = undefined;
			userAnswer = undefined;
			if ($level + 1 == 3) {
				finish = true;
			} else {
				level.update((value) => value + 1);
			}
		} else {
			win = false;
		}
	};
</script>

<svelte:head>
	<title>Games - Matematika</title>
</svelte:head>

<section class="mt-5 max-w-screen-lg mx-auto">
	<div>
		<h2>Permainan Matematika</h2>
		<p>Menjawab pertanyaan matematika dengan hitungan waktu.</p>
	</div>
	<div class="mt-8">
		{#if !finish}
			<Stepper active={level} on:complete={handleNextLevel} buttonTextComplete="Next Level">
				{#each { length: 3 } as _, i}
					<Step index={i} buttonClassesBack="hidden">
						<svelte:fragment slot="header"><h4 class="font-bold">Level {i + 1}</h4></svelte:fragment
						>
						<div>
							<p>Jawablah pertanyaan dibawah ini dengan benar</p>
							<div class="w-max border border-white mb-5 px-8 rounded-lg bg-surface-700">
								{question}
							</div>
							<div>
								{#if win != undefined}
									{#if win == true}
										<p class="!text-success-500">Benar! Silahkan lanjut ke level berikutnya.</p>
									{:else if win == false}
										<p class="!text-warning-500">Maaf! Jawaban anda salah, silahkan coba lagi.</p>
									{/if}
								{/if}
							</div>
							<input
								type="number"
								placeholder="Jawaban"
								class="py-2 px-8 w-max"
								bind:value={userAnswer}
							/>
						</div>
					</Step>
				{/each}
			</Stepper>
		{:else}
			<div class="p-5 rounded-lg bg-surface-700 border border-success-500">
				<h1>Selamat!</h1>
				<p>Anda berhasil memenangkan permainan ini.</p>
				<a href="/" class="btn btn-filled-success btn-sm mt-5">Kembali ke menu utama</a>
			</div>
		{/if}
	</div>
</section>
