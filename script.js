const base = Module.findBaseAddress('GameAssembly.dll');
const size = Process.findModuleByName("GameAssembly.dll").size

const UpdateMoney_AddMoney = base.add(0x1dafb0);
const openMarketplace = base.add(0x1DB090);

Interceptor.replace(openMarketplace, new NativeCallback(function(a,b) {
	setInterval(function() {
		new NativeFunction(UpdateMoney_AddMoney, 'void', ['pointer', 'pointer'])(a, b);
	}, 1);
}, 'void', ['pointer', 'pointer']));


console.log('attached')
