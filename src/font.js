import { Lexend_Exa, JetBrains_Mono, Poppins } from '@next/font/google'

export const lexend_exa = Lexend_Exa(
    {
        subsets: ['latin']
    }
)
export const jetBrains_Mono = JetBrains_Mono(
    {
        subsets: ['latin']
    }
)
export const poppins = Poppins(
    {
        subsets: ['latin'],
        weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
    }
)