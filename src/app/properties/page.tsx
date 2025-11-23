// Define the type for a single property/key listing
interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  area: number;
  currency: string;
}

async function getProperties(): Promise<Property[]> {
  // Use a base URL that works for both environments:
  // 1. If VERCEL_URL is set (i.e., we are on Vercel), use the live domain.
  // 2. Otherwise (i.e., we are on localhost), use http://localhost:3000.
  // NOTE: We rely on the VERCEL_URL being automatically available in Server Components.

  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : 'http://localhost:3000';
    
  const apiUrl = `${baseUrl}/api/properties`;

  // The fetch call now uses a guaranteed, parsable absolute URL in both environments
  const res = await fetch(apiUrl, { cache: 'no-store' }); 

  if (!res.ok) {
    console.error(`Fetch failed for URL: ${apiUrl}`); 
    throw new Error(`Failed to fetch property data from ${apiUrl}`);
  }

  return res.json();
}
// ... rest of the file

export default async function PropertiesPage() {
  let properties: Property[] = [];
  let error: string | null = null;

  try {
    properties = await getProperties();
  } catch (e) {
    error = e instanceof Error ? e.message : 'An unknown error occurred';
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Available Key Listings</h1>
      
      {error && <p className="text-red-600">Error loading data: {error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white p-6 shadow-lg rounded-lg border border-gray-100">
            <h2 className="text-xl font-semibold text-teal-600 mb-2">{property.title}</h2>
            <p className="text-gray-700 mb-1">
              **Location:** {property.location}
            </p>
            <p className="text-gray-700 mb-1">
              **Price:** {property.price.toLocaleString()} {property.currency}
            </p>
            <p className="text-gray-500 text-sm">
              **Bedrooms:** {property.bedrooms} | **Area:** {property.area} m²
            </p>
          </div>
        ))}
      </div>
      
      {/* Footer is imported in layout.tsx, so it will appear below this page content */}
    </div>
  );
}