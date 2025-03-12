import { Button } from "@heroui/react";
import { HomeIcon } from "lucide-react";
import { useRouter } from "next/router";

export default function ActionButton() {
  const router = useRouter();

  return (
    <Button
      onPress={() => router.push('/')}
      variant="solid" color="success" className='theme-toggler rounded-full text-white' style={{ top: '4rem' }} isIconOnly>
      <HomeIcon />
    </Button>
  )
}