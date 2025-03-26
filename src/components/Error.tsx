import SocialIcons from "./SocialIcons";

export default function Error() {
  return (
    <div className="flex h-screen justify-center flex-col items-center">
      <span className="text-8xl font-bold text-danger-500">Oops!</span>
      <span className="mt-5">The page you requested has taken a break. It’ll be back soon.</span>

      <div className="mt-10 text-center">
        <div className="text-xs mb-2">You can reach out to me on the following.</div>
        <div className="flex gap-2 w-[300px]">
          <SocialIcons />
        </div>
      </div>
    </div>
  )
}