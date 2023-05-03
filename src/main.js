import { createApp } from "vue"
import router from "./router"

import App from "./App.vue"
import BaseButton from "./components/global/BaseButton.vue"
import BaseInput from "./components/global/BaseInput.vue"
import BaseCheckbox from "./components/global/BaseCheckbox.vue"

const app = createApp(App)

app.component("BaseButton", BaseButton)
app.component("BaseInput", BaseInput)
app.component("BaseCheckbox", BaseCheckbox)

app.use(router)
app.mount("#app")
