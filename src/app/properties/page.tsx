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

// Function to fetch data from your local API route
async function getProperties(): Promise<Property[]> {
  // Use the simplest possible relative path: /api/properties
  // Next.js should handle resolving this to http://localhost:3000/api/properties (Dev)
  // OR https://rabakeys.online/api/properties (Prod)
  const res = await fetch('/api/properties', { cache: 'no-store' }); 

  if (!res.ok) {
    // This will catch the 'Failed to parse URL' error if it persists
    throw new Error('Failed to fetch property data. Check Vercel logs for fetch URL details.');
  }

  return res.json();
}

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