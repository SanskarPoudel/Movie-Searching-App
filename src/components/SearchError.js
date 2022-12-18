export default function SearchError() {
  return (
    <div
      class="max-w-md mx-auto mt-10 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong class="font-bold">Sorry!</strong>
      <span class="block sm:inline">Movie Not Found. Try again</span>
    </div>
  );
}
