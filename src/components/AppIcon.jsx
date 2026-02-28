export default function AppIcon({ icon, name, className = "" }) {
  const isImage = typeof icon === "string" && (icon.startsWith("/") || icon.startsWith("http") || icon.startsWith("data:") || icon.startsWith("blob:"));

  if (isImage) {
    return (
      <img
        src={icon}
        alt={name}
        className={`object-cover ${className}`}
      />
    );
  }

  return <span className={className}>{icon}</span>;
}
