import type { AllResources } from '$lib/interfaces'

type AppData<T> = {
	tracks: T
	artists: T
	albums: T
}

export const INITIAL_STATE: AppData<AllResources | null> = {
	tracks: null,
	artists: null,
	albums: null
}

export const appState = $state(INITIAL_STATE)
