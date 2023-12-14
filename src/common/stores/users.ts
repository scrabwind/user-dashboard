import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import type { UserResponse, UserSubset } from '@/common/types/users'
import { useSettingsStore } from '@/common/stores/settings'

export const useUserStore = defineStore(
  'users',
  () => {
    const users = ref<UserSubset[]>()

    async function downloadUsers() {
      const settings = useSettingsStore()
      const res = await axios.get<UserResponse[]>(
        `https://random-data-api.com/api/v2/users?size=${settings.userSize}`
      )

      users.value = res.data.map(user => {
        const subset: UserSubset = {
          avatar: user.avatar,
          email: user.email,
          first_name: user.first_name,
          id: user.id,
          last_name: user.last_name,
          username: user.username
        }

        return subset
      })
    }

    return { users, downloadUsers }
  },
  { persist: true }
)
