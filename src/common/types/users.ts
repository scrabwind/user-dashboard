export type UserAddress = {
  city: string
  street_name: string
  street_address: string
  zip_code: string
  state: string
  country: string
  coordinates: {
    lat: number
    lng: number
  }
}

export type UserSubscription = {
  plan: string
  status: string
  payment_method: string
  term: string
}

export type UserResponse = {
  id: number
  uid: string
  password: string
  first_name: string
  last_name: string
  username: string
  email: string
  avatar: string
  gender: string
  phone_number: string
  social_insurance_number: string
  date_of_birth: string
  employment: {
    title: string
    key_skill: string
  }
  address: UserAddress
  credit_card: {
    cc_number: string
  }
  subscription: UserSubscription
}

export type UserSubset = Pick<
  UserResponse,
  'avatar' | 'username' | 'first_name' | 'last_name' | 'email' | 'id'
>
