import { z } from "zod"

// Models
const BaseSchema = z.object({
  id: z.string(),
  created: z.string(),
  updated: z.string(),
})

export const AccountSchema = BaseSchema.extend({
  avatar: z.string().optional(),
  fbAvatar: z.string().optional(),
  fbId: z.string().optional(),
  fbLink: z.string().url().optional(),
  firstLogin: z.boolean().default(false),
  imgBucket: z.string().optional(),
  isActive: z.boolean().default(true),
  isAdmin: z.boolean().default(false),
  name: z.string(),
  phone: z.string().optional(),
  twitterAvatar: z.string().optional(),
  twitterId: z.string().optional(),
  twitterLink: z.string().url().optional(),
  type: z.enum(["admin", "user"]).optional(),
})

export const TrackSchema = BaseSchema.extend({
  allowDownload: z.boolean(),
  audioBucket: z.string(),
  audioFileSize: z.number(),
  audioName: z.string(),
  detail: z.string().optional(),
  downloadCount: z.number().default(0),
  featured: z.boolean().default(false),
  imgBucket: z.string(),
  lyrics: z.string().optional(),
  number: z.number().optional(),
  playCount: z.number().default(0),
  poster: z.string(),
  publish: z.boolean().default(false),
  title: z.string(),
})

export const ArtistSchema = BaseSchema.extend({
  bio: z.string().optional(),
  facebook: z.string().url().optional(),
  imgBucket: z.string().optional(),
  instagram: z.string().url().optional(),
  name: z.string(),
  poster: z.string().optional(),
  stageName: z.string(),
  twitter: z.string().url().optional(),
  verified: z.boolean().default(true),
  youtube: z.string().url().optional(),
})

export const GenreSchema = BaseSchema.extend({
  name: z.string(),
})

export const AlbumSchema = BaseSchema.extend({
  cover: z.string().optional(),
  detail: z.string().optional(),
  imgBucket: z.string().optional(),
  releaseYear: z.number().gte(1900).lte(2100),
  title: z.string(),
})

// Schemas

export const deleteTrackSchema = z.object({
  id: z.string(),
  accountId: z.string(),
})

export const deleteArtistSchema = z.object({
  id: z.string(),
  accountId: z.string(),
})

export const deleteAlbumSchema = z.object({
  data: z.object({
    id: z.string(),
  }),
  accountId: z.string(),
})

export const deleteAlbumTrackSchema = z.object({
  trackId: z.string(),
  accountId: z.string(),
})

export const allResourcesSchema = z.object({
  page: z.number(),
  type: z.enum(["tracks", "albums", "artists"]),
})

export const tracksByGenresSchema = z.object({
  id: z.string(),
  page: z.number(),
})

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "The email is required.",
    })
    .email({
      message: "This email is not valid.",
    }),
  password: z
    .string()
    .min(1, {
      message: "Your password Required.",
    })
    .min(6, {
      message: "The password must be at least 6 characters.",
    }),
})

export const PasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, {
        message: "The password is required.",
      })
      .min(6, {
        message: "The password must be at least 6 characters.",
      }),
    passwordConfirmation: z
      .string()
      .min(1, {
        message: "The password Confirmation is required.",
      })
      .min(6, {
        message: "The password must be at least 6 characters.",
      }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"], // path of error
  })

export const UpdatePasswordSchema = z.object({
  email: z.string().email(),
})

export const ProfileSchema = z.object({
  name: z.string().min(1, {
    message: "The name is required.",
  }),
  email: z
    .string()
    .min(1, {
      message: "The email is required.",
    })
    .email({
      message: "This email is not valid.",
    }),
  phone: z
    .string()
    .min(8, { message: "The phone number must be at least 8 characters." })
    .optional()
    .nullable(),
})

export const UpdateProfileSchema = z.object({
  data: z.object({
    name: z.string().min(1, {
      message: "The name is required.",
    }),
    email: z
      .string()
      .min(1, {
        message: "The email is required.",
      })
      .email({
        message: "This email is not valid.",
      }),
    phone: z
      .string()
      .min(8, { message: "The phone number must be at least 8 characters." })
      .optional()
      .nullable(),
  }),
  accountId: z.string(),
})

export const FileUploadSchema = z.object({
  data: z.object({
    filename: z.string().min(1),
    mimeType: z.string().min(1),
    type: z.enum(["image", "audio"]),
    shouldBePublic: z.boolean().default(false),
  }),
  accountId: z.string(),
})

export const SaveAvatarSchema = z.object({
  data: z.object({
    avatar: z.string().min(1),
  }),
  accountId: z.string(),
})

export const UpdatePlayCountSchema = z.object({
  id: z.string(),
})

export const AddTrackToAlbumSchema = z.object({
  trackId: z.string(),
  albumId: z.string(),
  trackNumber: z.number(),
})

export const AddTrackSchema = z.object({
  account: z.string(),
  title: z.string(),
  genre: z.string(),
  artist: z.string(),
  album: z.string().optional(),
  trackNumber: z.number().optional(),
  poster: z.string(),
  audioName: z.string(),
  audioFileSize: z.number(),
  detail: z.string().optional(),
  lyrics: z.string().optional(),
})

export const AddTrackFormSchema = z.object({
  title: z.string().min(1, {
    message: "The title of the track is required.",
  }),
  genreId: z.string().min(1, {
    message: "You must choose a genre.",
  }),
  artistId: z.string().min(1, {
    message: "You must choose an artist.",
  }),
  poster: z.string().min(1, {
    message: "You must choose a poster.",
  }),
  audioName: z.string().min(1, {
    message: "You must choose a track.",
  }),
  audioFileSize: z.string().min(1, {
    message: "You must choose a track.",
  }),
  detail: z
    .string()
    // .min(MIN_TRACK_DETAIL_LENGTH, {
    //   message: `The detail must be at least ${MIN_TRACK_DETAIL_LENGTH} characters.`,
    // })
    .optional(),
  lyrics: z
    .string()
    // .min(MIN_TRACK_LYRICS_LENGTH, {
    //   message: `The lyrics must be at least ${MIN_TRACK_LYRICS_LENGTH} characters.`,
    // })
    .optional(),
})

export const AddArtistSchema = z.object({
  name: z.string().min(1, {
    message: "Name  is required.",
  }),
  stageName: z.string().min(1, {
    message: "Stage name is required.",
  }),
  poster: z.string().optional(),
  bio: z.string().optional(),
  facebook: z
    .string()
    .url({ message: "The facebook link must be valid." })
    .optional(),
  twitter: z
    .string()
    .url({ message: "The twitter link must be valid." })
    .optional(),
  instagram: z
    .string()
    .url({ message: "The instagram link must be valid." })
    .optional(),
  youtube: z
    .string()
    .url({ message: "The youtube link must be valid." })
    .optional(),
})

export const AddArtistFormSchema = AddArtistSchema

export const AddGenreSchema = z.object({
  name: z.string().min(1, {
    message: "Name  is required.",
  }),
})

export const AddGenreFormSchema = AddGenreSchema

export const AddAlbumSchema = z.object({
  title: z.string().min(1, {
    message: "The title of the album is required.",
  }),
  releaseYear: z.coerce.number({
    required_error: "The release year of the album is required.",
  }),

  artistId: z.string().min(1, {
    message: "You must choose an artist.",
  }),
  cover: z.string().optional(),
  detail: z.string().optional(),
})

// new schemas for requests.server functions
export const ArtistThumbnailSchema = ArtistSchema.pick({
  id: true,
  stageName: true,
  poster: true,
  imgBucket: true,
})

export const TrackThumbnailSchema = TrackSchema.pick({
  id: true,
  title: true,
  poster: true,
  imgBucket: true,
  artist: ArtistThumbnailSchema,
})

export const CreateTrackSchema = TrackSchema.pick({
  poster: true,
  audioName: true,
  audioFileSize: true,
  title: true,
  artist: true,
  genre: true,
  detail: true,
  lyrics: true,
  account: true,
  imgBucket: true,
  audioBucket: true,
  id: true,
  number: true,
  album: true,
}).extend({
  account: z.string(),
})

export const CreateAlbumSchema = AlbumSchema.pick({
  artist: true,
  cover: true,
  detail: true,
  imgBucket: true,
  releaseYear: true,
  title: true,
  account: true,
  id: true,
}).extend({
  artist: z.string(),
  account: z.string(),
})

export const CreateArtistSchema = ArtistSchema.pick({
  name: true,
  stageName: true,
  account: true,
  id: true,
  imgBucket: true,
  poster: true,
  bio: true,
  facebook: true,
  twitter: true,
  instagram: true,
  youtube: true,
}).extend({
  account: z.string(),
})

export const getTrackDownloadSchema = TrackSchema.pick({
  id: true,
  title: true,
  audioBucket: true,
  audioName: true,
  poster: true,
}).extend({
  expand: z.object({
    artist: ArtistSchema.pick({
      id: true,
      stageName: true,
    }),
  }),
})

export const AlbumListSchema = z.array(AlbumSchema)
export const TrackListSchema = z.array(TrackSchema)
export const ArtistListSchema = z.array(ArtistSchema)

export const AddAlbumFormSchema = AddAlbumSchema
