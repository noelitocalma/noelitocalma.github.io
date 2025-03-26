export default function LoadingScreen() {
  return (
    <div className="flex h-screen justify-center flex-col items-center">
      <div>
        <span className="loader"></span>
      </div>
      <span className="text-xs">preparing page...</span>
    </div>
  )
}