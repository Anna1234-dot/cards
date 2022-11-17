import { createApp } from 'vue'
import App from '/src/App'
import Vuex from 'vuex'
import workers from './modules/workers'


createApp(App).use(Vuex)

export default new Vuex.Store({
    modules: {
        workers
    }
})