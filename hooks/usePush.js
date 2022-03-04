import { useRouter } from "next/router";

function usePush(path) {
  const router = useRouter()
  // handler
  const routerHandler = () => router.push(path)
  // returned
  return routerHandler
}

export default usePush