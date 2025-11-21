import { NextResponse } from 'next/server';

// Mock data structure for a property/key listing
const mockProperties = [
  {
    id: 1,
    title: 'Luxury Villa with Seaview',
    location: 'Casablanca',
    price: 5500000,
    bedrooms: 4,
    area: 350,
    currency: 'MAD',
  },
  {
    id: 2,
    title: 'Modern Apartment in Downtown Rabat',
    location: 'Rabat',
    price: 1850000,
    bedrooms: 2,
    area: 120,
    currency: 'MAD',
  },
  {
    id: 3,
    title: 'Commercial Space in Marrakech',
    location: 'Marrakech',
    price: 3200000,
    bedrooms: 0,
    area: 200,
    currency: 'MAD',
  },
];

/**
 * Handles GET requests to /api/properties
 * Returns a list of mock property listings.
 */
export async function GET() {
  // Simulate a network delay (optional)
  await new Promise(resolve => setTimeout(resolve, 500)); 
  return NextResponse.json(mockProperties, { status: 200 });
}