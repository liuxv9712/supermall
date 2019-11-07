module.exports={
	configureWebpack:{
		resolve:{
			// 设置路径别名alias
			alias:{
				'assets':'@/assets',
				'common':'@/common',
				'components':'@/components',
				'network':'@/network',
				'views':'@/views',
			}
		}
	}
}