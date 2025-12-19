import PackageDetailsPage from './PackageDetailsPage';

export default async function PackageDetail({ params }) {
  const { slug } = await params; // ✅ await in Next.js 15
  return <PackageDetailsPage slug={slug} />;
}