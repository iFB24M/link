/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [{
			protocol: 'https',
			hostname: 'www.fb24m.ru',
			pathname: '/**/*'
		}]
	}
}

module.exports = nextConfig
