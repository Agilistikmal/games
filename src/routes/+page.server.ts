export const load = async () => {
	return {
		games: [
			{
				name: 'Matematika',
				description: 'Memecahkan soal matematika dengan timer.',
				slug: 'matematika',
				available: true
			},
			{
				name: 'Tebak Kata',
				description: 'Menebak kata dari rangkaian huruf.',
				slug: 'tebak-kata',
				available: false
			},
			{
				name: 'Tebak Gambar',
				description: 'Menebak kata dari gambar.',
				slug: 'tebak-gambar',
				available: false
			}
		]
	};
};
