import type { UserSubset } from '@/common/types/users'

export const userHeaders: Omit<UserSubset, 'id'> = {
  avatar: 'Avatar',
  first_name: 'First Name',
  last_name: 'Last Name',
  username: 'Username',
  email: 'Email'
}
