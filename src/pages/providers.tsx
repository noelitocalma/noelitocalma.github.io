import { HeroUIProvider, ToastProvider } from '@heroui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider className="h-full">
      <ToastProvider placement="top-right" />
      {children}
    </HeroUIProvider>
  )
}