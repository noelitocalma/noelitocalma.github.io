import ActionButton from "@/components/ActionButton";
import HireMe from "@/modules/hire-me";

export default function HireMePage() {
  return (
    <div className="min-h-screen sm:flex items-center justify-center p-5">
      <ActionButton />
      <HireMe />
    </div>
  );
}
