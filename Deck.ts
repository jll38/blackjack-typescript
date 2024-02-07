import { PlayingCard } from "./PlayingCard";

interface Stack {
  push(playingCard: PlayingCard): void | null;
  pop(): PlayingCard | null | undefined;
  peek(): Object | null;
  isEmpty(): boolean;
  isFull(): boolean;
  size(): number;
}

export class Deck implements Stack {
  private data: Array<PlayingCard> = [];
  private static readonly suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
  private static readonly ranks = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
  ];

  constructor() {
    Deck.suits.forEach((suit) => {
      Deck.ranks.forEach((rank) => {
        // Assuming PlayingCard accepts rank and suit in its constructor
        const card = new PlayingCard(rank, suit);
        this.data.push(card);
      });
    });
  }

  push(card : PlayingCard) {
    if(this.isFull()) return null;
    this.data.push(card);
  }
  
  pop() {
    return this.data.pop();
  }

  isFull() {
    return this.data.length === 52 ? true : false;
  }

  peek() {
    let card = this.data[this.data.length -1]
    return {
        rank: card.getValue(),
        suit: card.getSuit()
    };
  }
  isEmpty(): boolean {
    return this.data.length == 0 ? true : false;
  }
  size(): number {
    return this.data.length;
  }
}
