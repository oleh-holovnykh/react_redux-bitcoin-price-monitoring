export interface Btc {
  status: {
    timestamp: string,
  },
  data: {
    '1': {
      quote: {
        USD: {
          price: number,
        }
      }
    }
  }
}
