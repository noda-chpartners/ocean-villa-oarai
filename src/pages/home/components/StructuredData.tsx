export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'Ocean villa 大洗',
    description: '茨城県大洗町にある一棟貸切民宿。定員10名、BBQやキッチン完備、海沿いのカジュアルな空間。',
    telephone: '090-2555-6998',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '磯浜町6902-1',
      addressLocality: '東茨城郡大洗町',
      addressRegion: '茨城県',
      postalCode: '311-1301',
      addressCountry: 'JP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.3156,
      longitude: 140.5747,
    },
    numberOfRooms: 1,
    maximumAttendeeCapacity: 10,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        opens: '10:00',
        closes: '20:00',
      },
    },
    sameAs: [
      'https://www.instagram.com/ocean_villa_oarai',
      'https://www.booking.com/Share-hRPX64',
      'https://www.airbnb.jp/rooms/1155566626188288038',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}