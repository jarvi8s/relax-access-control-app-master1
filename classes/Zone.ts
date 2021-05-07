import Card from './Card'
/**
 * A zone represents an area at a centre.Each zone has a name and a
 * capacity which represents the maximum number of people who can enter
 * the zone at any one time. Each zone must maintain a list of all cards
 * (and hence members) currently in the zone. These lists are updated
 * whenever members enter or leave a zone,and it is always possible to
 * say how many people(cards) are in the zone and who they are.
 */

export default class Zone {
  private cards: Array<Card> = new Array<Card>()

  constructor(
    private zonename: string,
    private zonecapacity: number,
    private zonepeople: number,
    private rating: number
  ) {
    this.zonename = zonename
    this.zonecapacity = zonecapacity
    this.zonepeople = zonepeople
    this.rating = rating
  }

  public addCard = (person: Card): void => {
    this.cards.push(person)
  }
  public howmanyPeople = (): number => this.cards.length
  public incapacity = (): void => {
    if (this.zonepeople > this.zonecapacity) {
      console.log('out of capacity')
    }
  }
  public cardsInZone = (): string => {
    let cardsinzone = ''

    for (const card of this.cards) {
      cardsinzone += card.toString()
    }
    return cardsinzone
  }
  public getName = (): string => this.zonename

  public getrating = (): number => this.rating
}
