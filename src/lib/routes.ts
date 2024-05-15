export const AppRoutes = {
	pages: {
		home: `/`,
		browse: `/browse`,
		account: `/account`,
		search: `/search`,
		about: `/about`,
		//     upload: `/upload`,
		//     accounts: `/accounts`,
		login: `/signin`,
		logout: `/signout`,
		admin: `/admin`
	},
	album: {
		detailPage: (id: string) => `/albums/${id}`,
		editPage: (id: string) => `/admin/albums/${id}/edit`
	},
	artist: {
		detailPage: (id: string) => `/artists/${id}`,
		editPage: (id: string) => `/admin/artists/${id}/edit`
	},
	track: {
		detailPage: (id: string) => `/tracks/${id}`,
		editPage: (id: string) => `/admin/tracks/${id}/edit`
	},
	genre: {
		detailPage: (id: string) => `/browse/${id}`
	},

	downloadPage: (id: string) => `/download/${id}`,
	account: {
		//     detailPage: (accountId: string) => `/account/${accountId}`,
		//     account: `/account`,
		queue: `/queue`
	},
	admin: {
		home: `/admin`,
		tracks: `/admin/tracks`,
		albums: `/admin/albums`,
		artists: `/admin/artists`,
		create: {
			track: `/admin/add-track`,
			album: `/admin/add-album`,
			artist: `/admin/add-artist`
		}
	},
	browse: {
		//     accounts: `/accounts`,
		tracks: `/tracks`,
		albums: `/albums`,
		artists: `/artists`
		//   },
		//   auth: {
		//     facebook: `/auth/facebook`,
		//   },
	},
	links: {
		jgbSolutions: 'https://jgb.solutions'
	}
}
