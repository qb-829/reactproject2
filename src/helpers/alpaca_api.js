
import Alpaca from '@alpacahq/alpaca-trade-api';



export const alpaca = new Alpaca({
    keyID: 'PK6DRHJMMX7JIYJINHSM',
    secretKey: 'bNTnFJcM90uzw8qlONt0JKY3oTri9lprSyCE3QOq',
    // keyID: process.env.REACT_APP_ALPACA_API_KEY_ID,
    // secretKey: process.env.REACT_APP_ALPACA_API_KEY,
    paper: true,
    })

