import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import type { UserResponse, UserSubset } from '@/common/types/users'
import { useSettingsStore } from '@/common/stores/settings'

export const useUserStore = defineStore(
  'users',
  () => {
    const users = ref<UserSubset[]>([])

    const downloadUsers = async () => {
      const settings = useSettingsStore()
      try {
        const res = await axios.get<UserResponse[]>(
          `https://random-data-api.com/api/v2/users?size=${settings.userSize}`
        )

        users.value = res.data.map(user => ({
          avatar: user.avatar,
          email: user.email,
          first_name: user.first_name,
          id: user.id,
          last_name: user.last_name,
          username: user.username
        }))
      } catch (error) {
        console.error(error)
      }
    }

    return { users, downloadUsers }
  },
  { persist: true }
)
