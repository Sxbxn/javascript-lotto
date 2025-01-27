const MONEY = {
    IN_THOUSAND: 1000,
    ZERO: 0
}

const RANGE = {
    START: 1,
    END: 45
}

const LOTTO = {
    SIX_NUMBERS: 6,
    SIX_MATCHES: 6,
    FIVE_MATCHES: 5,
    FOUR_MATCHES: 4,
    THREE_MATCHES: 3,
}

const RANK = {
    BANG: 0,
    FIRST_PLACE: 1,
    SECOND_PLACE: 2,
    THIRD_PLACE: 3,
    FOURTH_PLACE: 4,
    FIFTH_PLACE: 5
}

const REWARD_MONEY = {
    BANG: 0, // 꽝!
    FIRST: 2000000000,
    SECOND: 30000000,
    THIRD: 1500000,
    FOURTH: 50000,
    FIFTH: 5000
}

const CALCULATE = {
  MAKE_PERCENTAGE: 100,  
  ROUND_OFF_FROM_SECOND_PLACE: 1
}


module.exports = { MONEY, REWARD_MONEY, RANK, RANGE, LOTTO, CALCULATE };
