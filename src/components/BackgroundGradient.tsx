export function BackgroundGradient() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5 animate-gradient-shift opacity-60" />
    </div>
  );
}
