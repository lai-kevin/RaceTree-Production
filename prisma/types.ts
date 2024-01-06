export interface Game {
    id: number
    title: string
    description: string
    image: string
    createdAt: Date
    updatedAt: Date
}

export interface Clip {
    id: number
    title: string
    description: string
    video: string
    uploadedBy: string
    createdAt: Date
    updatedAt: Date
}

export interface League {
    id: number
    name: string
    description: string
    image: string
    createdAt: Date
    updatedAt: Date
}

export interface Team {
    id: number
    name: string
    description: string
    image: string
    createdAt: Date
    updatedAt: Date
}