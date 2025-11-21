import IconBadge from "./IconBadge";

export default function FeatureItem({ title, description, icon, bgClass, textClass }) {
  return (
    <div className="flex items-start gap-4 max-w-xl">
      <IconBadge icon={icon} bgClass={bgClass} textClass={textClass} />
      <div>
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        {description && <p className="text-zinc-300 text-sm mt-1">{description}</p>}
      </div>
    </div>
  )
}