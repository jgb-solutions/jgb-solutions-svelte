
import clx from "classnames"
import { customAlphabet } from "nanoid"

import type {
  SearchResults,
  SoundInterface,
  TableTrack,
} from "$lib/interfaces"

export function getFile(event: Event) {
  const input = event.target as HTMLInputElement

  return input.files?.[0]
}

export function getFormattedDate(dateString: string) {
  const date = new Date(dateString)
  const year = date.getFullYear()

  let month = (1 + date.getMonth()).toString()
  month = month.length > 1 ? month : "0" + month

  let day = date.getDate().toString()
  day = day.length > 1 ? day : "0" + day

  return month + "/" + day + "/" + year
}

export const makeSoundFromTrack = ({
  id,
  title,
  posterUrl,
  audioUrl,
  artist,
}: {
  id: string
  title: string
  posterUrl: string
  audioUrl: string
  artist: {
    stageName: string
    id: string
  }
}): SoundInterface => ({
  id,
  title,
  image: posterUrl,
  authorName: artist.stageName,
  authorId: artist.id,
  playUrl: audioUrl,
  type: "track",
})

export const notEmpty = (array: unknown[]) => array.length > 0

export const getSearchTerm = () => {
  const searchParams = new URLSearchParams(
    (typeof window === "undefined" ? {} : window).location?.search || "",
  )

  return (searchParams.get("query") as string) || ""
}

export const getSearchParams = () => new URL(window.location.href).searchParams

export const getTitle = (
  searchTerm: string,
  { tracks, albums, artists }: SearchResults["results"],
) =>
  tracks.length || artists.length || albums.length
    ? `
    ${tracks.length} track${tracks.length !== 1 ? "s" : ""},
    ${artists.length} artist${artists.length !== 1 ? "s" : ""}
    and ${albums.length} album${albums.length !== 1 ? "s" : ""}
    found ${searchTerm.length ? `for *${searchTerm}*` : "from last search"}
    `
    : `No results found ${searchTerm.length ? `for *${searchTerm}*` : ""}`

export const generateId = (size = 15) => {
  return customAlphabet("1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ", size)()
}

export const getNewId = (id: string | number) => {
  return `${id}-${repeatCharacter("0", 15 - (id.toString().length + 1))}`
}

export const repeatCharacter = (character: string | number, times = 10) => {
  return new Array(times).fill(character).join("")
}


export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch (err) {
    return false
  }
}

export const trimText = (text: string, length = 24) => {
  return text.length > length ? `${text.slice(0, length)}...` : text
}

export const makeSoundList = (tracks: TableTrack[]) => {
  return tracks.map(({ id, title, posterUrl, audioUrl, artist }) => ({
    id,
    title,
    image: posterUrl,
    authorName: artist.stageName,
    authorId: artist.id,
    playUrl: audioUrl,
    type: "track",
  }))
}

export const makeList = (id: string, tracks: TableTrack[]) => {
  return {
    id,
    sounds: makeSoundList(tracks),
  }
}


export const getIndexName = ({ name, indexKey }: {
  name: string
  indexKey: string
}) => `${indexKey}_${name}`

export { clx }


export const getTrackTitle = (title: string): string => {
  let newTitle = title
  const el = getContainedEL(title, ['ft.', 'feat.'])

  if (el) {
    newTitle = title.toLocaleLowerCase().split(el)[0].trim()

    if (newTitle.at(-1) === '(') {
      const newTitleArr = newTitle.split('')
      newTitleArr.splice(-1, 1)

      newTitle = newTitleArr.join('')
    }
  } else if (title.includes("(") && title.length > 24) {
    newTitle = title.split('(')[0]
  }

  return newTitle.trim().toUpperCase()
}

const getContainedEL = (text: string, elements: string[]): string => {
  let containedText = ""
  elements.forEach(el => {
    if (text.toLocaleLowerCase().includes(el)) { containedText = el }
  })

  return containedText
}

