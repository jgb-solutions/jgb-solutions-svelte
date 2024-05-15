import { PUBLIC_S3_URL } from '$env/static/public'
import { getCdnUrl } from '../photon'


export const getSearchParams = (request: Request) => new URL(request.url).searchParams

export const getImageUrl = ({
	resource,
	cdn,
	width,
	height
}: {
	resource: string
	cdn?: boolean
	width?: number
	height?: number
}) => {
	const url = `${PUBLIC_S3_URL}/${resource}`

	if (cdn) {
		return getCdnUrl(url, {
			lb: {
				width: width || 250,
				height: height || 250
			}
		})
	}

	return url
}
