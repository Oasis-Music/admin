import { createApp } from "vue"
import router from "./router"

import App from "./App.vue"
import BaseButton from "./components/base/BaseButton.vue"
import BaseInput from "./components/base/BaseInput.vue"

const app = createApp(App)

app.component("BaseButton", BaseButton)
app.component("BaseInput", BaseInput)

app.use(router)
app.mount("#app")
