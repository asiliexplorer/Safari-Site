'use client';

export default function ImageUploader({ onUpload, label, multiple = false }) {
  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/admin/packages/api/upload', {
      method: 'POST',
      body: formData,
    });

    const { url } = await res.json();
    if (url) onUpload(url);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <label className="flex flex-col items-center px-4 py-6 bg-white text-green-600 rounded-lg shadow cursor-pointer hover:bg-gray-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
        <span className="mt-2 text-sm">Upload Image</span>
        <input type="file" className="hidden" accept="image/*" onChange={handleFile} />
      </label>
    </div>
  );
}