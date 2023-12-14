import { specificConst } from '@/components/AdderComponent/adderComponent.const'

// https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums

export type SpecificConst = typeof specificConst[keyof typeof specificConst]
