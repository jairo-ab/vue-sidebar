<script setup lang="ts">
    import { reactive } from 'vue'
    import { json_sidebar } from '../data'

    const profile = reactive({
        image: 'https://github.com/jairo-ab.png',
        name: 'Jairo Abreu',
        email: 'jairoabreeu@gmail.com'
    })
</script>

<template>
    <div w-70 min-h-screen flex justify-center bg-gray-800 fixed>
        <div w-full pt-8 px-5>
            <div pt-4>
                <div flex items-center justify-between>
                    <a href="" class="bg-blue-600 p-1.5 rounded flex items-center justify-center decoration-none focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                        <span text-white i-file-icons:arch-linux></span>
                    </a>
                    <button class="flex items-center justify-center b-none p-1.5 rounded bg-gray-700">
                        <span class="w-3 h-3 text-gray-100 stroke-current" i-teenyicons:arrow-left-small-solid></span>
                    </button>
                </div>
            </div>
            <div pt-6>
                <div relative>
                    <div class="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                        <span text-white i-ri:search-line></span>
                    </div>
                    <input
                        class="w-full rounded b-none pl-8 pr-4 py-2.5 text-xs font-light bg-gray-700 text-gray-400 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-700" 
                        type="search"
                        placeholder="Search"
                    >
                </div>
            </div>
            <div pt-5>
                <hr class="border-gray-700" />
            </div>
            <div mt-5>
                <ul flex flex-col space-y-2>
                    <li v-for="item of json_sidebar" text-gray-500 hover:text-white focus-within:text-white cursor-pointer>
                        <div relative>
                            <div absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none>
                                <span w-5 h-5 text-gray-600 stroke-current hover:text-white>
                                    <Icon :icon="item.icon" class="hover:text-white" />
                                </span>
                            </div>
                            <a decoration-none inline-block w-full py-2 pl-8 pr-4 text-xl text-gray-600 rounded hover:text-gray-200 hover:bg-gray-700 focus:outline-none focus:text-white>
                                {{ item.description }}
                            </a>
                        </div>
                        <div class="pt-2 pl-4" v-if="Object.keys(item.properties).length > 0">
                            <ul class="flex flex-col pl-2 text-gray-500 border-l border-gray-700">
                                <li v-for="propertie of item.properties">
                                    <a href="#" class="inline-block w-full px-4 py-2 text-xs rounded hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white">
                                        {{ propertie.description }}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div bottom-0 absolute h-18 bg-gray-700 w-full>
            <div flex items-center justify-evenly h-full>
                <div w-7 h-7>
                    <img rounded-full :src="profile.image">
                </div>
                <div>
                    <p text-white font-600>{{ profile.name }}</p>
                    <p text-white opacity-40>{{ profile.email }}</p>
                </div>
                <div>
                    <button class="flex items-center justify-center b-none p-1.5 rounded bg-gray-600">
                        <Icon icon="entypo:select-arrows" class="hover:text-white w-3 h-3 text-gray-100 stroke-current text-sm" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>