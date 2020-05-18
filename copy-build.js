const fs = require('fs-extra');

(async () => {
	const src = './build';
	const target = './www';

	await fs
		.remove(target)
		.then(() => console.log('./build directory has been removed.'))
		.catch(() => console.log('Failed for removing ./build directory.'));

	await fs
		.copy(src, target)
		.then(() => console.log('Copied ./build to ./www.'))
		.catch(() => console.log('Failed for copying ./build to ./www.'));
})();
