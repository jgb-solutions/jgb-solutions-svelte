import FaTwitter from 'svelte-material-icons/Twitter.svelte'
import FaGithubAlt from 'svelte-material-icons/Github.svelte'
import FaYoutube from 'svelte-material-icons/Youtube.svelte'
import FaLinkedinIn from 'svelte-material-icons/Linkedin.svelte'


export const menuItems: { [key: string]: string } = {
	Home: "/",
	Work: "/work",
	About: "/about",
	Contact: "/contact",
}

export const socialNetworks = [
	{
		Icon: FaGithubAlt,
		title: 'We share a lot of our work on Github. Check it out.',
		link: 'https://github.com/jgb-solutions',
	},
	{
		Icon: FaLinkedinIn,
		title: `Let's connect on LinkedIn`,
		link: 'https://linkedin.com/in/jean-g%C3%A9rard-bousiquot-85a83689',
	},
	{
		Icon: FaTwitter,
		title: 'Follow us on Twitter',
		link: 'https://twitter.com/jgb_solutions',
	},
	{
		Icon: FaYoutube,
		title: 'Follow us on YouTube',
		link: 'https://www.youtube.com/channel/UCgYbTVuSR7iXQRsrrbQeVxA',
	},
]

export const AppRoutes = {
	pages: {
		home: `/`,
		search: `/search`,
		about: `/about`,
		contact: `/contact`,
	},
	links: {
		jgbSolutions: 'https://jgb.solutions'
	}
}
