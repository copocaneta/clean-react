export class UnexpectedError extends Error {
  constructor() {
    super('Alguma coisa deu errado. Tente novamente mais tarde.')
    this.name = 'UnexpectedError'
  }
}
