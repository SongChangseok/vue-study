import { onMounted, onUnmounted, ref } from 'vue'
import { useEventListener } from './useEventListener'

export const useMouse = () => {
  const x = ref(0)
  const y = ref(0)

  const update = (e) => {
    x.value = e.pageX
    y.value = e.pageY
  }

  useEventListener(window, 'mousemove', update)

  return { x, y }
}
