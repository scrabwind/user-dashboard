import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () =>
      import('@/components/DashboardComponent/DashboardComponent.vue')
  },
  {
    path: '/settings',
    component: () =>
      import('@/components/SettingsComponent/SettingsComponent.vue')
  }
]
