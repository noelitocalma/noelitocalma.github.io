import { HeroUIProvider, ToastProvider } from '@heroui/react'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider className="min-h-screen z-10">
      <ToastProvider placement="top-right" />
      {children}
    </HeroUIProvider>
  )
}