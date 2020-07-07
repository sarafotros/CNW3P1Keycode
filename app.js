const btn = document.querySelector('.btn');
const bigNum = document.querySelector('.big-num');
const keyName = document.querySelector('.key');
const which = document.querySelector('.which');
const code = document.querySelector('.code');

document.addEventListener('keypress', (e) => {
	console.log(e.code);
	console.log(e.which);
	console.log(e.key);
	console.log(e);
});
