export default function Input({ label, ...props }) {
  return (
    <div className="space-y-1">
      <label className="font-medium">{label}</label>
      <input {...props} className="border p-2 w-full rounded" />
    </div>
  );
}
