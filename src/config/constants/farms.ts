import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'EGG-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 1,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'EGG OOb',
    lpAddresses: {
      97: '0xb18e66e489113b24e3a236ba8b8a1e2697d56a67',
      56: '0xb18e66e489113b24e3a236ba8b8a1e2697d56a67', // EGG-BUSD LP
    },
    tokenSymbol: 'EGG O',
    tokenAddresses: {
      97: '0xb18e66e489113b24e3a236ba8b8a1e2697d56a67',
      56: '0xb18e66e489113b24e3a236ba8b8a1e2697d56a67',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

]

export default farms
