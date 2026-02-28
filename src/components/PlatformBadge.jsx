import {
  Smartphone,
  Globe,
  Monitor,
  Apple,
} from "lucide-react";

const platformMeta = {
  ios: { label: "iOS", Icon: Smartphone },
  android: { label: "Android", Icon: Smartphone },
  web: { label: "Web", Icon: Globe },
  macos: { label: "macOS", Icon: Apple },
  windows: { label: "Windows", Icon: Monitor },
  linux: { label: "Linux", Icon: Monitor },
};

export default function PlatformBadge({ platform }) {
  const meta = platformMeta[platform];
  if (!meta) return null;
  const { label, Icon } = meta;

  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-surface-100 px-2.5 py-0.5 text-xs font-medium text-surface-700">
      <Icon className="h-3 w-3" />
      {label}
    </span>
  );
}
