<template>
  <main>
    <table class="dashboard__table">
      <thead class="dashboard__thead">
        <tr class="dashboard__row">
          <th
            class="dashboard__header"
            v-for="header in userHeaders"
            :key="header"
          >
            {{ header }}
          </th>
          <button
            class="dashboard__button"
            @click="store.downloadUsers"
          >
            Get Users
          </button>
        </tr>
      </thead>
      <tbody class="dashboard__tbody">
        <tr
          class="dashboard__row"
          v-for="(user, i) in store.users"
          :key="i"
        >
          <td class="dashboard__data">
            <img
              :src="user.avatar"
              alt="avatar"
              width="64"
              height="64"
            />
          </td>
          <td class="dashboard__data">{{ user.first_name }}</td>
          <td class="dashboard__data">{{ user.last_name }}</td>
          <td class="dashboard__data">{{ user.username }}</td>
          <td class="dashboard__data">{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script setup lang="ts">
  import { userHeaders } from '@/components/DashboardComponent/dashboardComponent.const'
  import { useUserStore } from '@/common/stores/users'

  const store = useUserStore()

  // onMounted(async () => {
  //   await store.downloadUsers()
  // })
</script>
<style scoped lang="scss">
  .dashboard {
    &__table {
      display: grid;
      border-collapse: collapse;
      min-width: 100%;
      grid-template-columns:
        minmax(64px, 0.5fr)
        minmax(150px, 1fr)
        minmax(150px, 1fr)
        minmax(150px, 1fr)
        minmax(150px, 1fr);
      align-items: center;
    }

    &__thead,
    &__tbody,
    &__row {
      display: contents;
    }

    &__header,
    &__data {
      padding: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &__header {
      position: sticky;
      top: 0;
      background: #6c7ae0;
      text-align: left;
      font-weight: normal;
      font-size: 1.1rem;
      color: white;

      &:last-child {
        border: 0;
      }
    }

    &__data {
      padding-top: 10px 0;
    }

    &__button {
      background-color: transparent;
      position: absolute;
      right: 16px;
      top: 8px;
      padding: 8px;
      border: 1px solid rgb(83 85 108);
      border-radius: 8px;
      cursor: pointer;

      &:hover {
        background-color: #e6e6e6;
      }
    }
  }
</style>
