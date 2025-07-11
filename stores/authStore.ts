import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(null)

  function setAuth(newToken: string) {
    token.value = newToken
  }

  function logout() {
    token.value = null
    useCookie('token').value = null
  }

  return { token, setAuth, logout }
}, {
  persist: true
})
