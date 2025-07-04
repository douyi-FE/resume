import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const name = ref('张三')
    const changeName = () => {
        name.value = '李四'
    }
    return {
        name,
        changeName
    }
})