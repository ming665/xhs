// const resolve = dir => require('path').join(__dirname, dir)
module.exports = {
	// lintOnSave: false,

	configureWebpack: {
		entry: `./src/index.js`,
		plugins: [
			
		],
	},
	// chainWebpack: (config) => {
	// 	config.resolve.alias
 //        .set('~', resolve('src'))
	// },
}