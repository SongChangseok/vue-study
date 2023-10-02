import { createApp } from 'vue'
import i18nPlugin from './i18n'

const app = createApp({})
app.use(i18nPlugin, { greetings: { hello: '안녕!' } })
