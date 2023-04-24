import { createApp } from "vue"
import router from "./router"

import App from "./App.vue"
import BaseButton from "./components/base/BaseButton.vue"

const app = createApp(App)

app.component("BaseButton", BaseButton)

app.use(router)
app.mount("#app")
