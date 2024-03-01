// Represents a card's suit type.
export type CardType = 'c' | 'd' | 'h' | 's'

// Represents a card's color for easier identification.
export type CardColor = 0 | 1 // 0 for black, 1 for red

export interface Card {
  el: HTMLElement
  type: CardType
  number: number
  facingUp: boolean
}

export interface CardLocation {
  location: 'desk' | 'finish' | 'deal'
  pile: number | 'pile' | 'deal'
  index: number
}

export interface GameState {
  types: CardType[]
  colors: Record<CardType, CardColor>
  cards: Card[]
  deal: {
    pile: DeckPile
    deal: DeckDeal
  }
  finish: FinishDeck[]
  desk: DeskDeck[]
  target: any // Define more specifically if possible.
  moving: MovingState
}

export interface DeckPile {
  el: HTMLElement | null
  cards: number[] // Array of card indices.
}

export interface DeckDeal extends DeckPile {}

export interface FinishDeck {
  el: HTMLElement | null
  cards: number[] // Array of card indices.
}

export interface DeskDeck extends FinishDeck {}

export interface MovingState {
  card: Card | {} // Consider defining a more specific type or interface.
  element: HTMLElement | null
  index: number
  capture: boolean
  container: {
    cards: number[]
  }
  target: any // Define more specifically if possible.
  origin: any // Define more specifically if possible.
  offset: {
    x: number
    y: number
  }
  destinations: any[] // Define more specifically if possible.
}
