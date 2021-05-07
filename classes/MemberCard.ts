import Card from './Card'

export default class MemberCard extends Card {
  private static currentId = 1000
  cardId: number

  constructor(
    protected memberName: string,
    protected rating: number,
    protected credits: number,
    protected centre: string
  ) {
    super(credits, rating, memberName)
    this.rating = rating
    this.credits = credits
    this.cardId = MemberCard.currentId++
    this.centre = centre
  }
  creditNumber(): number {
    throw new Error('Method not implemented.')
  }

  public getName = (): string => this.memberName

  public getId = (): number => this.cardId

  public changeRating = (rating: number): void => {
    this.rating = rating
  }

  public getRating = (): number => this.rating

  public addCredits = (credits: number): void => {
    this.credits += credits
  }

  public useZone = (): void => {
    this.credits -= 4
  }

  public getCredits = (): number => this.credits

  public hasEnoughCredits = (): boolean => this.credits >= 4

  public toString = (): string =>
    '***Member Card***' +
    '\nCard No: ' +
    this.cardId +
    '\nName: ' +
    this.memberName +
    '\nRating: ' +
    this.rating +
    '\nCredits: ' +
    this.credits +
    '\nRelax Centre : ' +
    this.centre +
    '\n'
}
